import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Contracts from './Components/Contracts';
import Driver from './Components/Driver/Driver';
import MobilePayments from './Components/MobilePayment';
import PartnerReg from './Components/Partners/PartnerReg';
import PartnerList from './Components/Partners/PartnerList';
import PartnerDetails from './Components/Partners/PartnerDetails';
import PartnerUpdate from './Components/Partners/PartnerUpdate';


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
            <Route path="/driver" element={<Driver />} />
            <Route path="/partnerreg" element={<PartnerReg />} />
            <Route path="/partnerlist" element={<PartnerList />} />
            <Route path="/partnerdetails/:id" element={<PartnerDetails />} />
            <Route path="/edit/:id" element={<PartnerUpdate />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
