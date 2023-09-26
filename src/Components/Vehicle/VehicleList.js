import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch a list of vehicles from your Django backend using the provided API endpoint
    fetch('http://35.227.55.58:8002/vehicle/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch vehicle list');
        }
        return response.json();
      })
      .then((data) => {
        setVehicles(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Vehicle List</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="text-left border border-gray-300 px-4 py-2">Registration</th>
            <th className="text-left border border-gray-300 px-4 py-2">Make</th>
            <th className="text-left border border-gray-300 px-4 py-2">Model</th>
            <th className="text-left border border-gray-300 px-4 py-2">Year of Manufacture</th>
            <th className="text-left border border-gray-300 px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr
              key={vehicle.id}
              className="bg-white border border-gray-300"
            >
              <td className="text-lg text-gray-600 border border-gray-300 px-4 py-2">
                {vehicle.registration}
              </td>
              <td className="text-lg text-gray-600 border border-gray-300 px-4 py-2">
                {vehicle.make}
              </td>
              <td className="text-lg text-gray-600 border border-gray-300 px-4 py-2">
                {vehicle.model}
              </td>
              <td className="text-lg text-gray-600 border border-gray-300 px-4 py-2">
                {vehicle.yom}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Link to={`/vehicledetails/${vehicle.id}`} className="text-blue-500 hover:underline">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Link to="/vehiclereg">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Register Vehicle
          </button>
        </Link>
      </div>
    </div>
  );
}

export default VehicleList;
