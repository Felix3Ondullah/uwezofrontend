import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Contracts from './Components/Contracts';

import MobilePayments from './Components/MobilePayment';
import PartnerReg from './Components/Partners/PartnerReg';
import PartnerList from './Components/Partners/PartnerList';
import PartnerDetails from './Components/Partners/PartnerDetails';
import PartnerUpdate from './Components/Partners/PartnerUpdate';
import DriverList from './Components/Driver/DriverList';
import DriverDetails from './Components/Driver/DriverDetails';
import DriverReg from './Components/Driver/Driverreg';
import DriverUpdate from './Components/Driver/DriverUpdate';
import VehicleReg from './Components/Vehicle/VehicleReg';
import VehicleDetails from './Components/Vehicle/VehicleDetails';
import VehicleList from './Components/Vehicle/VehicleList';
import VehicleUpdate from './Components/Vehicle/VehicleUpdate';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/mobilepayment" element={<MobilePayments />} />
            <Route path="/driverreg" element={<DriverReg />} />
            <Route path="/driverlist" element={<DriverList />} />
            <Route path="/driverdetails/:id" element={<DriverDetails />} />
            <Route path="/edit/driver/:id" element={<DriverUpdate />} />
            <Route path="/partnerreg" element={<PartnerReg />} />
            <Route path="/partnerlist" element={<PartnerList />} />
            <Route path="/partnerdetails/:id" element={<PartnerDetails />} />
            <Route path="/edit/partner/:id" element={<PartnerUpdate />} />
            <Route path="/vehiclereg" element={<VehicleReg />} />
            <Route path= "/vehicledetails/:id" element={<VehicleDetails />} />
            <Route path="/vehiclelist" element={<VehicleList />} />
            <Route path= "/edit/vehicle/:id"  element={<VehicleUpdate />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
