import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Contracts from './Components/Contracts';
import Driver from './Components/Driver';
import MobilePayments from './Components/MobilePayment';
import Partner from './Components/Partners/Partner';
import PartnerList from './Components/Partners/PartnerList';
import PartnerDetails from './Components/Partners/PartnerDetails';


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
            <Route path="/partner" element={<Partner />} />
            <Route path="/partnerlist" element={<PartnerList />} />
            <Route path="/partnerdetails/:id" element={<PartnerDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
