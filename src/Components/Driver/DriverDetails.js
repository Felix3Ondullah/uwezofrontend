import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function DriverDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [driver, setDriver] = useState({});
    const [partner, setPartner] = useState({});

    useEffect(() => {
        // Fetching driver details from API endpoint
        fetch(`http://35.227.55.58:8002/driver/${id}/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch driver details');
                }
                return response.json();
            })
            .then((data) => {
                setDriver(data);
                // Check if a partner ID is available in driver data
                if (data.partner) {
                    // Fetch partner details based on partner ID
                    fetch(`http://35.227.55.58:8002/partner/${data.partner}/`)
                        .then((response) => {
                            if (!response.ok) {
                                throw  Error('Failed to fetch partner details');
                            }
                            return response.json();
                        })
                        .then((partnerData) => {
                            setPartner(partnerData);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const handleDeleteClick = () => {
        // Display a confirmation dialog
        const confirmDelete = window.confirm('Are you sure you want to delete this driver?');

        if (confirmDelete) {
            // Send a DELETE request to delete the driver
            fetch(`http://35.227.55.58:8002/driver/${id}/`, {
                method: 'DELETE',
            })
                .then((response) => {
                    if (response.ok) {
                        // Handle success
                        console.log('Driver deleted successfully');

                        // Redirect to the driver list page
                        navigate('/driverlist');
                    } else {
                        // Handle errors
                        console.error('Failed to delete driver');
                    }
                })
                .catch((error) => {
                    console.error('Fetch Error:', error);
                });
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Driver Details</h2>
            <div className="bg-white p-4 rounded-md shadow-md text-blue-500">
                <p className="text-lg font-semibold">Driver Information</p>
                <hr className="my-2" />

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <p className="text-gray-600 font-semibold">First Name:</p>
                        <p className="text-base">{driver.first_name}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-semibold">Middle Name:</p>
                        <p className="text-base">{driver.middle_name}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-semibold">Last Name:</p>
                        <p className="text-base">{driver.last_name}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-semibold">Date of Birth:</p>
                        <p className="text-base">{driver.date_of_birth}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-semibold">Document Type:</p>
                        <p className="text-base">{driver.document_type}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-semibold">Document Number:</p>
                        <p className="text-base">{driver.document_number}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-semibold">MSISDN:</p>
                        <p className="text-base">{driver.msisdn}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-semibold">Email:</p>
                        <p className="text-base">{driver.email}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md">
  <p className="text-lg font-semibold text-blue-500">Partner Information</p>
  <hr className="my-2" />

  <div className="flex justify-between">
    <div className="flex-grow">
      <p className="text-gray-600 font-semibold">First Name:</p>
      <p className={`text-base ${partner.first_name ? 'text-blue-500' : ''}`}>
        {partner.first_name}
      </p>
    </div>
    <div className="flex-grow">
      <p className="text-gray-600 font-semibold">Middle Name:</p>
      <p className={`text-base ${partner.middle_name ? 'text-blue-500' : ''}`}>
        {partner.middle_name}
      </p>
    </div>
    <div className="flex-grow">
      <p className="text-gray-600 font-semibold">Last Name:</p>
      <p className={`text-base ${partner.last_name ? 'text-blue-500' : ''}`}>
        {partner.last_name}
      </p>
    </div>
  </div>
</div>


            <div className="mt-4 space-x-2">
                <Link
                    to={`/edit/driver/${id}`}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
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

export default DriverDetails;
