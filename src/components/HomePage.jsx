import React from 'react';

const HomePage = () => (
  <div className="text-center p-8">
    <h2 className="text-3xl font-bold mb-6">Smart Waste Management Dashboard</h2>
    <p className="mb-8">Welcome to the Smart Waste Management Dashboard. This platform provides an overview of waste management metrics, information on waste levels across different locations, and optimized routes for waste collection.</p>
    
    {/* Container for the columns */}
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
      {/* Key Metrics Column */}
      <div className="mb-8 md:mb-0 bg-white shadow-lg rounded-lg overflow-hidden">
        <h3 className="text-2xl font-semibold mb-3 p-4">Key Metrics</h3>
        <p className="p-4">Overview of waste collection efficiency, recycling rates, and environmental impact.</p>
        {/* Image below the description */}
        <img src="/images/metrics.jpg" alt="Key Metrics Visualization" className="w-full object-cover h-40" />
      </div>

      {/* Waste Level Insights Column */}
      <div className="mb-8 md:mb-0 bg-white shadow-lg rounded-lg overflow-hidden">
        <h3 className="text-2xl font-semibold mb-3 p-4">Waste Level Insights</h3>
        <p className="p-4">Real-time data on waste levels from various locations, helping to prioritize collection routes.</p>
        {/* Image below the description */}
        <img src="/images/level1.jpeg" alt="Waste Level Data Visualization" className="w-full object-cover h-40" />
      </div>

      {/* Route Optimization Column */}
      <div className="mb-8 md:mb-0 bg-white shadow-lg rounded-lg overflow-hidden">
        <h3 className="text-2xl font-semibold mb-3 p-4">Route Optimization</h3>
        <p className="p-4">Interactive map showing optimized routes for waste collection to maximize efficiency and reduce carbon footprint.</p>
        {/* Image below the description */}
        <img src="/images/route-op.png" alt="Route Optimization Visualization" className="w-full object-cover h-40" />
      </div>
    </div>
  </div>
);

export default HomePage;
