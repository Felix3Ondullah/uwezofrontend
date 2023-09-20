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
    <div className="bg-gray-900 text-white min-h-screen p-6"> {/* Set min-h-screen for full page coverage */}
      <h2 className="text-2xl font-semibold mb-4">Partner List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {partners.map((partner) => (
          <div key={partner.id} className="bg-white p-4 rounded-md shadow-md">
            <Link to={`/partnerdetails/${partner.id}`} className="text-blue-500 hover:underline">
              <h3 className="text-lg font-semibold">{partner.first_name} {partner.last_name}</h3>
            </Link>
            <p className="text-gray-600">First Name: {partner.first_name}</p>
            <p className="text-gray-600">Middle Name: {partner.middle_name}</p>
            <p className="text-gray-600">Last Name: {partner.last_name}</p>
            <p className="text-gray-600">Email: {partner.email}</p>

            {/* Add more details as needed */}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Register Partner
        </button>
      </div>
    </div>
  );
}

export default PartnerList;
