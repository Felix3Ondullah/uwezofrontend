// PartnerDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PartnerDetails() {
  const { id } = useParams();
  const [partner, setPartner] = useState({});

  useEffect(() => {
    // Fetch partner details using the provided API endpoint
    fetch(`http://35.227.55.58:8002/partner/${id}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch partner details');
        }
        return response.json();
      })
      .then((data) => {
        setPartner(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Partner Details</h2>
      <div>
        <p>First Name: {partner.first_name}</p>
        <p>Middle Name: {partner.middle_name}</p>
        <p>Last Name: {partner.last_name}</p>
        <p>Date of Birth: {partner.date_of_birth}</p>
        <p>Document Type: {partner.document_type}</p>
        <p>Document Number: {partner.document_number}</p>
        <p>MSISDN: {partner.msisdn}</p>
        <p>Email: {partner.email}</p>
        {/* Add more partner details here */}
      </div>
      <div className="mt-4">
        <Link to={`/edit/${id}`} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2">
          Edit
        </Link>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}

export default PartnerDetails;
