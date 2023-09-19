import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Disclosure } from '@headlessui/react';

function Sidebar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="bg-gray-900 text-white w-64 min-h-screen py-6 px-4">
          <ul>
            <li>
              <Link
                to="/"
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:text-white"
              >
                <span className="text-base">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contracts"
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:text-white"
              >
                <span className="text-base">Contracts</span>
              </Link>
            </li>
            <li>
              <Link
                to="/driver"
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:text-white"
              >
                <span className="text-base">Driver</span>
              </Link>
            </li>
            <li>
              <Link
                to="/mobilepayment"
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:text-white"
              >
                <span className="text-base">Mobile Payments</span>
              </Link>
            </li>
            <li>
              <Link
                to="/partner"
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:text-white"
              >
                <span className="text-base">Partner</span>
              </Link>
            </li> 
            {/* Add more navigation links here */}
          </ul>
        </div>
      </Disclosure>
    </div>
  );
}

export default Sidebar;
