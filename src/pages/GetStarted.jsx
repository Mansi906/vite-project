import React from "react";

function GetStarted() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 tracking-tight">Get Started with Uber</h1>
        <p className="text-lg text-gray-300 mb-8">
          Join our platform and explore fast, reliable and secure services.
          Experience seamless rides, powerful tools and world-class support.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-black rounded-2xl font-semibold shadow-lg hover:scale-105 transition-all">
            Create Account
          </button>
          <button className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-2xl font-semibold hover:bg-gray-700 transition-all">
            Login
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-semibold mb-3">Book Rides</h3>
          <p className="text-gray-400">Fast, safe and comfortable rides anytime, anywhere.</p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-semibold mb-3">Track Trips</h3>
          <p className="text-gray-400">Track your rides in real-time with accurate live location.</p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-semibold mb-3">Easy Payments</h3>
          <p className="text-gray-400">Multiple secure payment options for seamless checkout.</p>
        </div>
      </div>

      {/* Onboard Section */}
      <div className="mt-20 max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4">Become a Driver & Earn with Uber</h2>
        <p className="text-gray-300 mb-6">
          Start earning on your own schedule. Join as a driver and get access to
          exclusive tools, insights, and support.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-2xl font-semibold shadow-lg hover:scale-105 transition-all">
          Start Onboarding
        </button>
      </div>

    </div>
  );
}
export default GetStarted;