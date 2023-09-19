import React, { useState } from 'react';
// import axios from 'axios';

function Partner() {
    const [partnerData, setPartnerData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        date_of_birth: '',
        document_type: '',
        document_number: '',
        msisdn: '',
        email: '',
        document: '',
    });

    const documentTypeOptions = [
        { value: 'NATIONAL_ID', label: 'National ID' },
        { value: 'PASSPORT', label: 'Passport' },
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
        // Send a POST request to your Django backend to create a new partner
        // You can use libraries like Axios or the Fetch API to make the API call
        // Example API call:
        // axios.post('/api/partners/', partnerData)
        //   .then((response) => {
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
    };

    return (
        <div className="bg-gray-900 text-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Partner Registration</h2>
            <form onSubmit={handleSubmit}>
                {/* Include input fields for partner details here */}
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
                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md"
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
                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md"
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
                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="date_of_birth" className="block text-sm font-medium">
                        Date of Birth
                    </label>
                    <input
                        type="date" // Use type="date" for date input
                        id="date_of_birth"
                        name="date_of_birth"
                        value={partnerData.date_of_birth}
                        onChange={handleChange}
                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md"
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
                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md"
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
                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md"
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
                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="text" // Keep it as "text" for email input
                        id="email" // Change the id to match the field name
                        name="email"
                        value={partnerData.email}
                        onChange={handleChange}
                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md"
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
                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md"
                    />
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
