import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function DriverUpdate() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [driverData, setDriverData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        date_of_birth: '',
        document_type: 'national_id',
        document_number: '',
        msisdn: '',
        email: '',
        document: '',
        status: 'active',
        partner: '',
        id_document: "null",
    });

    const [partnerOptions, setPartnerOptions] = useState([]);

    const statusOptions = [
        { value: 'active', label: 'Active' },
        { value: 'suspended', label: 'Suspended' },
        { value: 'closed', label: 'Closed' },
    ];

    const documentTypeOptions = [
        { value: 'national_id', label: 'National ID' },
        { value: 'passport', label: 'Passport' },
        { value: 'military_id', label: 'Military ID' },
    ];

    useEffect(() => {
        // Fetch driver details using the provided API endpoint
        fetch(`http://35.227.55.58:8002/driver/${id}/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch driver details');
                }
                return response.json();
            })
            .then((data) => {
                // Set the driver details in the state
                setDriverData(data);
            })
            .catch((error) => {
                console.error(error);
            });

        // Fetch partners from API
        fetch('http://35.227.55.58:8002/partner/', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched partner data:', data);
                setPartnerOptions(
                    data.map((partner) => ({
                        value: partner.id,
                        label: `${partner.first_name} ${partner.middle_name} ${partner.last_name}`,
                    }))
                );
            })
            .catch((error) => {
                console.error('Error fetching partners:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // If the name is 'partner', parse the value as an integer
        const parsedValue = name === 'partner' ? parseInt(value, 10) : value;

        setDriverData({
            ...driverData,
            [name]: parsedValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('first_name', driverData.first_name);
        formData.append('middle_name', driverData.middle_name);
        formData.append('last_name', driverData.last_name);
        formData.append('date_of_birth', driverData.date_of_birth);
        formData.append('document_type', driverData.document_type);
        formData.append('document_number', driverData.document_number);
        formData.append('msisdn', driverData.msisdn);
        formData.append('email', driverData.email);
        formData.append('document', driverData.document);
        formData.append('status', driverData.status);

        // Append the 'partner' field only if it's not an empty string
        if (driverData.partner !== '') {
            formData.append('partner', driverData.partner);
        }

        if (driverData.id_document) {
            formData.append('id_document', driverData.id_document);
        }

        console.log('Sending updated data:', formData);

        // Sending a PUT request to update driver details
        fetch(`http://35.227.55.58:8002/driver/${id}/`, {
            method: 'PUT',
            headers: {
                // Add any headers you need for the driver update request
            },
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    // Handle success
                    console.log('Driver details updated successfully');

                    // Redirect back to the driver details page
                    navigate(`/driverdetails/${id}`);
                } else {
                    console.error('Failed to update driver details');
                    return response.json();
                }
            })
            .then((errorData) => {
                console.error('API Error:', errorData);
            })
            .catch((error) => {
                console.error('Fetch Error:', error);
            });
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <h2 className="text-2xl font-semibold mb-4">Update Driver Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    {/* First Name */}
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block text-sm font-medium">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={driverData.first_name}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Middle Name */}
                    <div className="mb-4">
                        <label htmlFor="middle_name" className="block text-sm font-medium">
                            Middle Name
                        </label>
                        <input
                            type="text"
                            id="middle_name"
                            name="middle_name"
                            value={driverData.middle_name}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                        <label htmlFor="last_name" className="block text-sm font-medium">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={driverData.last_name}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="mb-4">
                        <label htmlFor="date_of_birth" className="block text-sm font-medium">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="date_of_birth"
                            name="date_of_birth"
                            value={driverData.date_of_birth}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Document Type */}
                    <div className="mb-4">
                        <label htmlFor="document_type" className="block text-sm font-medium">
                            Document Type
                        </label>
                        <select
                            id="document_type"
                            name="document_type"
                            value={driverData.document_type}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        >
                            {documentTypeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Document Number */}
                    <div className="mb-4">
                        <label htmlFor="document_number" className="block text-sm font-medium">
                            Document Number
                        </label>
                        <input
                            type="number"
                            id="document_number"
                            name="document_number"
                            value={driverData.document_number}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* MSISDN */}
                    <div className="mb-4">
                        <label htmlFor="msisdn" className="block text-sm font-medium">
                            Msisdn
                        </label>
                        <input
                            type="number"
                            id="msisdn"
                            name="msisdn"
                            value={driverData.msisdn}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={driverData.email}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Document */}
                    <div className="mb-4">
                        <label htmlFor="document" className="block text-sm font-medium">
                            Document
                        </label>
                        <input
                            type="text"
                            id="document"
                            name="document"
                            value={driverData.document}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                        <label htmlFor="status" className="block text-sm font-medium">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={driverData.status}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        >
                            {statusOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Partner */}
                    <div className="mb-4">
                        <label htmlFor="partner" className="block text-sm font-medium">
                            Partner
                        </label>
                        <select
                            id="partner"
                            name="partner"
                            value={driverData.partner}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        >
                            <option value="" className="text-black bg-white">
                                Select a partner
                            </option>
                            {partnerOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    style={{
                                        color: 'black',
                                        backgroundColor: 'white'
                                    }}
                                    className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
                    >
                        Update Driver
                    </button>
                    <Link
                        to={`/driverdetails/${id}`}
                        className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default DriverUpdate;
