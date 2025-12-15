// src/pages/RidePage.jsx

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

// Default Marker Fix for Leaflet (important for Vite)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function RidePage() {
  const mapRef = useRef(null);
  const routingRef = useRef(null);

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const [pickupCoord, setPickupCoord] = useState(null);
  const [dropCoord, setDropCoord] = useState(null);

  // Initialize Map
  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        center: [28.6139, 77.2090], // Default Delhi
        zoom: 13,
      });

      // OSM TILE
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(mapRef.current);
    }
  }, []);

  // Convert Address → Coordinates
  const geocodeLocation = async (location, type) => {
    if (!location) return;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${location}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data && data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      if (type === "pickup") setPickupCoord([lat, lon]);
      if (type === "drop") setDropCoord([lat, lon]);

      L.marker([lat, lon]).addTo(mapRef.current);
    }
  };

  // Add Routing
  useEffect(() => {
    if (pickupCoord && dropCoord && mapRef.current) {
      if (routingRef.current) {
        mapRef.current.removeControl(routingRef.current);
      }

      routingRef.current = L.Routing.control({
        waypoints: [
          L.latLng(pickupCoord[0], pickupCoord[1]),
          L.latLng(dropCoord[0], dropCoord[1]),
        ],

        lineOptions: {
          styles: [{ color: "black", weight: 5 }],
        },

        router: L.Routing.osrmv1({
          serviceUrl: "https://router.project-osrm.org/route/v1", // ⭐ FIX
        }),

        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: false,
      }).addTo(mapRef.current);
    }
  }, [pickupCoord, dropCoord]);

  return (
    <div style={{ display: "flex", height: "100vh", background: "#fff" }}>
      {/* LEFT SIDE FORM */}
      <div
        style={{
          width: "35%",
          padding: "30px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Book your ride</h1>

        <label style={{ fontWeight: "600" }}>Pickup Location</label>
        <input
          type="text"
          placeholder="Enter pickup"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          onBlur={() => geocodeLocation(pickup, "pickup")}
          style={{
            padding: "12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <label style={{ fontWeight: "600" }}>Drop Location</label>
        <input
          type="text"
          placeholder="Enter drop"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          onBlur={() => geocodeLocation(drop, "drop")}
          style={{
            padding: "12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
        

        <button
          style={{
            background: "black",
            color: "white",
            padding: "14px",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "600",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Confirm Ride
        </button>
      </div>

      {/* MAP SECTION */}
      <div id="map" style={{ width: "65%", height: "100%" }}></div>
    </div>
  );
}
