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
    <div className="bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Partner List</h2>
      <ul>
        {partners.map((partner) => (
          <li key={partner.id}>
            <Link to={`/partnerdetails/${partner.id}`} className="text-blue-500 hover:underline">
              {partner.first_name} {partner.last_name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/partner" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mt-4">
        Register Partner
      </Link>
    </div>
  );
}

export default PartnerList;
