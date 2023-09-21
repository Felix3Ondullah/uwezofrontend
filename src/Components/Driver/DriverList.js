import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DriverList() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Fetch a list of drivers from your Django backend using the provided API endpoint
    fetch('http://35.227.55.58:8002/driver/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch driver list');
        }
        return response.json();
      })
      .then((data) => {
        setDrivers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Driver List</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="text-left border border-gray-300 px-4 py-2">Name</th>
            <th className="text-left border border-gray-300 px-4 py-2">Email</th>
            <th className="text-left border border-gray-300 px-4 py-2">Msisdn</th>
            <th className="text-left border border-gray-300 px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr
              key={driver.id}
              className="bg-white border border-gray-300"
            >
              <td className="text-lg text-gray-600 border border-gray-300 px-4 py-2">
                {driver.first_name} {driver.middle_name} {driver.last_name}
              </td>
              <td className="text-lg text-gray-600 border border-gray-300 px-4 py-2">
                <span className="text-blue-500">{driver.email}</span>
              </td>
              <td className="text-lg text-gray-600 border border-gray-300 px-4 py-2">
                <span className="text-blue-500">{driver.msisdn}</span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Link to={`/driverdetails/${driver.id}`} className="text-blue-500 hover:underline">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Link to="/driverreg">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Register Driver
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DriverList;
