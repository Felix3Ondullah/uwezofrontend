import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PartnerList() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // Fetch a list of partners from your Django backend using the provided API endpoint
    fetch('http://35.227.55.58:8002/partner/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch partner list');
        }
        return response.json();
      })
      .then((data) => {
        setPartners(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Partner List</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="text-left border border-gray-300 px-2 py-1">Name</th>
            <th className="text-left border border-gray-300 px-2 py-1">Email</th>
            <th className="text-left border border-gray-300 px-2 py-1">Msisdn</th>
            <th className="text-left border border-gray-300 px-2 py-1">Details</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <tr
              key={partner.id}
              className="bg-white border border-gray-300"
            >
              <td className="text-lg text-gray-600 border border-gray-300 px-2 py-1">
                {partner.first_name} {partner.middle_name} {partner.last_name}
              </td>
              <td className="text-lg text-gray-600 border border-gray-300 px-2 py-1">
                <span className="text-blue-500">{partner.email}</span>
              </td>
              <td className="text-lg text-gray-600 border border-gray-300 px-2 py-1">
                <span className="text-blue-500">{partner.msisdn}</span>
              </td>
              <td className="border border-gray-300 px-2 py-1">
                <Link to={`/partnerdetails/${partner.id}`} className="text-blue-500 hover:underline">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Link to="/partnerreg">
          <button
            className="bg-blue-500 text-white px-2 py-1rounded-md hover:bg-blue-600"
          >
            Register Partner
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PartnerList;
