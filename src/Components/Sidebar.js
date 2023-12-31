import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Disclosure } from '@headlessui/react';

function Sidebar() {
  const location = useLocation();

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
                className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                  location.pathname === '/' ? 'text-white' : 'hover:text-white'
                }`}
              >
                <span className="text-base">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contracts"
                className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                  location.pathname === '/contracts' ? 'text-white' : 'hover:text-white'
                }`}
              >
                <span className="text-base">Contracts</span>
              </Link>
            </li>
            <li>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                        location.pathname.includes('/driver') ? 'text-white' : 'hover:text-white'
                      }`}
                    >
                      <span className="text-base">Driver</span>
                      <span>{open ? '▲' : '▼'}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ul>
                        <li>
                          <Link
                            to="/driverreg"
                            className={`flex justify-start items-center gap-4 pl-10 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                              location.pathname === '/driverreg' ? 'text-white' : 'hover:text-white'
                            }`}
                          >
                            <span className="text-base">Driver Registration</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/driverlist"
                            className={`flex justify-start items-center gap-4 pl-10 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                              location.pathname === '/driverlist' ? 'text-white' : 'hover:text-white'
                            }`}
                          >
                            <span className="text-base">Driver List</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/driverdetails/:id"
                            className={`flex justify-start items-center gap-4 pl-10 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                              location.pathname === '/driverdetails/:id' ? 'text-white' : 'hover:text-white'
                            }`}
                          >
                            <span className="text-base">Driver Details</span>
                          </Link>
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
            <li>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                        location.pathname.includes('/driver') ? 'text-white' : 'hover:text-white'
                      }`}
                    >
                      <span className="text-base"> Vehicle </span>
                      <span>{open ? '▲' : '▼'}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ul>
                        <li>
                          <Link
                            to="/vehiclereg"
                            className={`flex justify-start items-center gap-4 pl-10 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                              location.pathname === '/vehiclereg' ? 'text-white' : 'hover:text-white'
                            }`}
                          >
                            <span className="text-base">Vehicle Registration</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/vehiclelist"
                            className={`flex justify-start items-center gap-4 pl-10 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                              location.pathname === '/vehiclelist' ? 'text-white' : 'hover:text-white'
                            }`}
                          >
                            <span className="text-base">Vehicle List</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/vehicledetails/:id"
                            className={`flex justify-start items-center gap-4 pl-10 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                              location.pathname === '/vehicledetails/:id' ? 'text-white' : 'hover:text-white'
                            }`}
                          >
                            <span className="text-base">Vehicle Details</span>
                          </Link>
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
            <li>
              <Link
                to="/mobilepayment"
                className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                  location.pathname === '/mobilepayment' ? 'text-white' : 'hover:text-white'
                }`}
              >
                <span className="text-base">Mobile Payments</span>
              </Link>
            </li>
            <li>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                        location.pathname.includes('/partner') ? 'text-white' : 'hover:text-white'
                      }`}
                    >
                      <span className="text-base">Partner</span>
                      <span>{open ? '▲' : '▼'}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ul>
                        <li>
                          <Link
                            to="/partnerreg"
                            className={`flex justify-start items-center gap-4 pl-10 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                              location.pathname === '/partnerreg' ? 'text-white' : 'hover:text-white'
                            }`}
                          >
                            <span className="text-base">Partners Registration</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/partnerlist"
                            className={`flex justify-start items-center gap-4 pl-10 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                              location.pathname === '/partnerlist' ? 'text-white' : 'hover:text-white'
                            }`}
                          >
                            <span className="text-base">Partner List</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/partnerdetails/:id"
                            className={`flex justify-start items-center gap-4 pl-10 hover:bg-gray-800 p-2 rounded-md group cursor-pointer ${
                              location.pathname === '/partnerdetails/:id' ? 'text-white' : 'hover:text-white'
                            }`}
                          >
                            <span className="text-base">Partner Details</span>
                          </Link>
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
          </ul>
        </div>
      </Disclosure>
    </div>
  );
}

export default Sidebar;
