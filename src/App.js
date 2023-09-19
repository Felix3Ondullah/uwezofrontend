import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Contracts from './Components/Contracts';
import Driver from './Components/Driver';
import MobilePayments from './Components/MobilePayment';
import Partner from './Components/Partner';
import PartnerDetails from './Components/PartnerDetails';
import PartnerList from './Components/PartnerList';

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
            <Route path="/" exact component={PartnerList} />
            <Route path="/details/:id" component={PartnerDetails} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
