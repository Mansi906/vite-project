import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SidePic from "../assets/Homepgride.webp"; // Apni side image

export default function Home() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [selectedRide, setSelectedRide] = useState(null);

  const rides = [
    { name: "UberX", price: 250, desc: "Affordable everyday rides" },
    { name: "UberXL", price: 400, desc: "For larger groups" },
    { name: "Uber Black", price: 800, desc: "Premium luxury ride" },
  ];

  const suggestions = ["Airport", "Train Station", "City Center", "Hotel"]; // Sample suggestions

  return (
    <div className="home-container">
      {/* LEFT SIDE */}
      <div className="left-side">
        <h1 className="title">Ride with Uber</h1>
        <p className="subtitle">
          Enter your pickup and drop locations to find your ride quickly.
        </p>

        {/* Inputs */}
        <div className="inputs">
          <input
            type="text"
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <input
            type="text"
            placeholder="Drop Location"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
          />
        </div>

        {/* Suggested Locations */}
        <div className="suggestions">
          <h4>Suggested Locations:</h4>
          <div className="suggestions-list">
            {suggestions.map((sugg) => (
              <button
                key={sugg}
                className="suggestion-btn"
                onClick={() => setPickup(sugg)}
              >
                {sugg}
              </button>
            ))}
          </div>
        </div>

        {/* Ride Cards */}
        {pickup && drop && (
          <div className="ride-cards">
            {rides.map((ride) => (
              <div
                key={ride.name}
                className={`ride-card ${selectedRide === ride.name ? "selected" : ""}`}
                onClick={() => setSelectedRide(ride.name)}
              >
                <div>
                  <h3>{ride.name}</h3>
                  <p>{ride.desc}</p>
                </div>
                <p>₹{ride.price}</p>
              </div>
            ))}
          </div>
        )}

        {/* Confirm Button */}
        {selectedRide && (
          <Link to="/RidePage" className="confirm-btn">
            Confirm {selectedRide} Ride
          </Link>
        )}
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="right-side">
        <img src={SidePic} alt="Ride illustration" className="side-image" />
      </div>
    </div>
  );
}
