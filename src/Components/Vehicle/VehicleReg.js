import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function VehicleReg() {
    const navigate = useNavigate();

    const [vehicleData, setVehicleData] = useState({
        partner: '',
        registration: '',
        make: '',
        model: '',
        yom: '',
        logbook: '',
        chasis_no: '',
        engine_no: '',
    });

    const [partnerOptions, setPartnerOptions] = useState([]);

    useEffect(() => {
        // Fetching partners from API 
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
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setVehicleData({
            ...vehicleData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('partner', vehicleData.partner);
        formData.append('registration', vehicleData.registration);
        formData.append('make', vehicleData.make);
        formData.append('model', vehicleData.model);
        formData.append('yom', vehicleData.yom);
        formData.append('logbook', vehicleData.logbook);
        formData.append('chasis_no', vehicleData.chasis_no);
        formData.append('engine_no', vehicleData.engine_no);

        console.log('Sending data:', formData);

        fetch('http://35.227.55.58:8002/vehicle/', {
            method: 'POST',
            headers: {
                
            },
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Vehicle registered successfully');
                    navigate('/vehiclelist'); // Redirect to the vehicle list page
                } else {
                    console.error('Failed to register vehicle');
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
            <h2 className="text-2xl font-semibold mb-4">Vehicle Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    {/* Partner Select */}
                    <div className="mb-4">
                        <label htmlFor="partner" className="block text-sm font-medium">
                            Partner
                        </label>
                        <select
                            id="partner"
                            name="partner"
                            value={vehicleData.partner}
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
                                        backgroundColor: 'white',
                                    }}
                                    className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Registration */}
                    <div className="mb-4">
                        <label htmlFor="registration" className="block text-sm font-medium">
                            Registration
                        </label>
                        <input
                            type="text"
                            id="registration"
                            name="registration"
                            value={vehicleData.registration}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Make */}
                    <div className="mb-4">
                        <label htmlFor="make" className="block text-sm font-medium">
                            Make
                        </label>
                        <input
                            type="text"
                            id="make"
                            name="make"
                            value={vehicleData.make}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Model */}
                    <div className="mb-4">
                        <label htmlFor="model" className="block text-sm font-medium">
                            Model
                        </label>
                        <input
                            type="text"
                            id="model"
                            name="model"
                            value={vehicleData.model}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Year of Manufacture (YOM) */}
                    <div className="mb-4">
                        <label htmlFor="yom" className="block text-sm font-medium">
                            Year of Manufacture (YOM)
                        </label>
                        <input
                            type="number"
                            id="yom"
                            name="yom"
                            value={vehicleData.yom}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Logbook */}
                    <div className="mb-4">
                        <label htmlFor="logbook" className="block text-sm font-medium">
                            Logbook
                        </label>
                        <textarea
                            id="logbook"
                            name="logbook"
                            value={vehicleData.logbook}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>

                    {/* Chasis Number */}
                    <div className="mb-4">
                        <label htmlFor="chasis_no" className="block text-sm font-medium">
                            Chasis Number
                        </label>
                        <input
                            type="text"
                            id="chasis_no"
                            name="chasis_no"
                            value={vehicleData.chasis_no}
                            onChange={handleChange}
                            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md text-black bg-white"
                        />
                    </div>
                    {/* Engine Number */}
                    <div className="mb-4">
                        <label htmlFor="engine_no" className="block text-sm font-medium">
                            Engine Number
                        </label>
                        <input
                            type="text"
                            id="engine_no"
                            name="engine_no"
                            value={vehicleData.engine_no}
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
                        Register Vehicle
                    </button>
                </div>
            </form>
        </div>
    );
}

export default VehicleReg;

