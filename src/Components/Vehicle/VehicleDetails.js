import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function VehicleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    // Fetching vehicle details from API endpoint
    fetch(`http://35.227.55.58:8002/vehicle/${id}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch vehicle details');
        }
        return response.json();
      })
      .then((data) => {
        setVehicle(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleDeleteClick = () => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this vehicle?');

    if (confirmDelete) {
      // Send a DELETE request to delete the vehicle
      fetch(`http://35.227.55.58:8002/vehicle/${id}/`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // Handle success
            console.log('Vehicle deleted successfully');

            // Redirect to the vehicle list page
            navigate('/vehiclelist');
          } else {
            // Handle errors
            console.error('Failed to delete vehicle');
          }
        })
        .catch((error) => {
          console.error('Fetch Error:', error);
        });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Vehicle Details</h2>
      <div className="bg-white p-4 rounded-md shadow-md text-blue-500">
        <p className="text-lg font-semibold">Vehicle Information</p>
        <hr className="my-2" />

        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-gray-600 font-semibold">Registration:</p>
            <p className="text-base">{vehicle.registration}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Make:</p>
            <p className="text-base">{vehicle.make}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Model:</p>
            <p className="text-base">{vehicle.model}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Year of Manufacture:</p>
            <p className="text-base">{vehicle.yom}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Logbook:</p>
            <p className="text-base">{vehicle.logbook || 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Chasis Number:</p>
            <p className="text-base">{vehicle.chasis_no || 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Engine Number:</p>
            <p className="text-base">{vehicle.engine_no || 'N/A'}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-x-2">
        <Link
          to={`/edit/vehicle/${id}`}
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

export default VehicleDetails;
