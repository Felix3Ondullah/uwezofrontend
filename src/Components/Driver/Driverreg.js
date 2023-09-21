import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DriverReg() {
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
    id_document: null,
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
    // Fetching partners from API with headers
    fetch('http://35.227.55.58:8002/partner/', {
      headers: {
        'Content-Type': 'application/json', // Set the content type as needed
        // Add any other headers you need here
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched partner data:', data);
        setPartnerOptions(
          data.map((partner) => ({ value: partner.id, label: partner.name }))
        );
      })
      .catch((error) => {
        console.error('Error fetching partners:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // If the name is 'partner', parse the value as an integer
    const parsedValue = name === 'partner' ? parseInt(value, 10) : value;
  
    setDriverData({
      ...driverData,
      [name]: parsedValue,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setDriverData({
      ...driverData,
      id_document: file,
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
  
    console.log('Sending data:', formData);
  
    // Sending a POST request to driver API with headers
    fetch('http://35.227.55.58:8002/driver/', {
      method: 'POST',
      headers: {
        // Add any headers you need for the driver request
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
          console.log('Driver created successfully');
  
          // Redirect to the driver list page
          navigate('/driverlist');
        } else {
          console.error('Failed to create driver');
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
      <h2 className="text-2xl font-semibold mb-4">Driver Registration</h2>
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
              value={driverData.first_name}
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
              value={driverData.middle_name}
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
              value={driverData.last_name}
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
              value={driverData.date_of_birth}
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
              style={{ color: 'black', backgroundColor: 'white' }}
            >
              <option value="" className="text-black bg-white">Select a partner</option>
              {partnerOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  style={{ color: 'black', backgroundColor: 'white' }}
                  className="text-black bg-white border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="id_document" className="block text-sm font-medium">
              ID Document (PDF or Image)
            </label>
            <input
              type="file"
              id="id_document"
              name="id_document"
              onChange={handleFileChange}
              accept=".pdf, image/*"
              className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
            />
            <p className="text-sm text-gray-500 mt-2">
              Upload an ID document (PDF or image, max 5MB).
            </p>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Register Driver
          </button>
        </div>
      </form>
    </div>
  );
}

export default DriverReg;

