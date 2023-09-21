import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function PartnerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [partner, setPartner] = useState({});

  useEffect(() => {
    // Fetching partner details from API endpoint
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

  const handleDeleteClick = () => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this partner?');

    if (confirmDelete) {
      // Send a DELETE request to delete the partner
      fetch(`http://35.227.55.58:8002/partner/${id}/`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // Handle success
            console.log('Partner deleted successfully');

            // Redirect to the partner list page
            navigate('/partnerlist');
          } else {
            // Handle errors
            console.error('Failed to delete partner');
          }
        })
        .catch((error) => {
          console.error('Fetch Error:', error);
        });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Partner Details</h2>
      <div className="bg-white p-6 rounded-md shadow-md text-blue-500"> {/* Apply text-blue-500 class */}
        <p className="text-xl font-semibold">Partner Information</p>
        <hr className="my-4" />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">First Name:</p>
            <p className="text-xl">{partner.first_name}</p>
          </div>
          <div>
            <p className="text-gray-600">Middle Name:</p>
            <p className="text-xl">{partner.middle_name}</p>
          </div>
          <div>
            <p className="text-gray-600">Last Name:</p>
            <p className="text-xl">{partner.last_name}</p>
          </div>
          <div>
            <p className="text-gray-600">Date of Birth:</p>
            <p className="text-xl">{partner.date_of_birth}</p>
          </div>
          <div>
            <p className="text-gray-600">Document Type:</p>
            <p className="text-xl">{partner.document_type}</p>
          </div>
          <div>
            <p className="text-gray-600">Document Number:</p>
            <p className="text-xl">{partner.document_number}</p>
          </div>
          <div>
            <p className="text-gray-600">MSISDN:</p>
            <p className="text-xl">{partner.msisdn}</p>
          </div>
          <div>
            <p className="text-gray-600">Email:</p>
            <p className="text-xl">{partner.email}</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Link
          to={`/edit/partner/${id}`} // Updated path for partner update
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
          style={{ textDecoration: 'none' }}
        >
          Edit
        </Link>
        <button
          onClick={handleDeleteClick}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default PartnerDetails;
