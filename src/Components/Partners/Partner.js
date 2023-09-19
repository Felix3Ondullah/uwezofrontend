import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Partner() {
    const navigate = useNavigate();

    const [partnerData, setPartnerData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        date_of_birth: '',
        document_type: 'national_id',
        document_number: '',
        msisdn: '',
        email: '',
        document: '',
    });

    const documentTypeOptions = [
        { value: 'national_id', label: 'National ID' },
        { value: 'passport', label: 'Passport' },
        { value: 'military_id', label: 'Military ID' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPartnerData({
            ...partnerData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Sending data:', partnerData);

        // Send a POST request to your partner API
        fetch('http://35.227.55.58:8002/partner/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(partnerData),
        })
            .then((response) => {
                if (response.ok) {
                    // Handle success
                    console.log('Partner created successfully');

                    // Redirect to the partner list page
                    navigate('/partnerlist');
                } else {
                    // Handle errors
                    console.error('Failed to create partner');
                    return response.json(); // Parse the error response as JSON
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
        <div className="bg-gray-900 text-white min-h-screen p-6"> {/* Add min-h-screen to make sure the background covers the entire screen */}
            <h2 className="text-2xl font-semibold mb-4">Partner Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block text-sm font-medium">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={partnerData.first_name}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="middle_name" className="block text-sm font-medium">
                            Middle Name
                        </label>
                        <input
                            type="text"
                            id="middle_name"
                            name="middle_name"
                            value={partnerData.middle_name}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last_name" className="block text-sm font-medium">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={partnerData.last_name}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date_of_birth" className="block text-sm font-medium">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="date_of_birth"
                            name="date_of_birth"
                            value={partnerData.date_of_birth}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="document_type" className="block text-sm font-medium">
                            Document Type
                        </label>
                        <select
                            id="document_type"
                            name="document_type"
                            value={partnerData.document_type}
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
                    <div className="mb-4">
                        <label htmlFor="document_number" className="block text-sm font-medium">
                            Document Number
                        </label>
                        <input
                            type="number"
                            id="document_number"
                            name="document_number"
                            value={partnerData.document_number}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="msisdn" className="block text-sm font-medium">
                            Msisdn
                        </label>
                        <input
                            type="number"
                            id="msisdn"
                            name="msisdn"
                            value={partnerData.msisdn}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={partnerData.email}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="document" className="block text-sm font-medium">
                            Document
                        </label>
                        <input
                            type="text"
                            id="document"
                            name="document"
                            value={partnerData.document}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Register Partner
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Partner;
