import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function DriverDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [driver, setDriver] = useState({});

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
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <h2 className="text-2xl font-semibold mb-4">Driver Details</h2>
            <div className="bg-white p-6 rounded-md shadow-md text-blue-500">
                <p className="text-xl font-semibold">Driver Information</p>
                <hr className="my-4" />

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-gray-600">First Name:</p>
                        <p className="text-xl">{driver.first_name}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Middle Name:</p>
                        <p className="text-xl">{driver.middle_name}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Last Name:</p>
                        <p className="text-xl">{driver.last_name}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Date of Birth:</p>
                        <p className="text-xl">{driver.date_of_birth}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Document Type:</p>
                        <p className="text-xl">{driver.document_type}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Document Number:</p>
                        <p className="text-xl">{driver.document_number}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">MSISDN:</p>
                        <p className="text-xl">{driver.msisdn}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Email:</p>
                        <p className="text-xl">{driver.email}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md mt-4">
                <p className="text-xl font-semibold">Partner Information</p>
                <hr className="my-4" />

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-gray-600">First Name:</p>
                        <p className="text-xl">{driver.partner_first_name}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Last Name:</p>
                        <p className="text-xl">{driver.partner_last_name}</p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <Link
                    to={`/edit/driver/${id}`} // Updated path for driver update
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

export default DriverDetails;
