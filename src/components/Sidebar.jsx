import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfo, FaRoute, FaCog } from 'react-icons/fa';

const Sidebar = () => (
  <div className="w-64 h-full bg-gray-800 p-4 text-white flex flex-col justify-between">
    <ul className='mt-12'>
      <li className="mb-6">
        <NavLink to="/" exact className="flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out" activeClassName="bg-gray-900">
          {<FaHome className="mr-2" />} Home
        </NavLink>
      </li>
      <li className="mb-6">
        <NavLink to="/waste-info" className="flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out" activeClassName="bg-gray-900">
          {<FaInfo className="mr-2" />} Waste Information
        </NavLink>
      </li>
      <li className="mb-6">
        <NavLink to="/route-collection" className="flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out" activeClassName="bg-gray-900">
          {<FaRoute className="mr-2" />} Route For Collection
        </NavLink>
      </li>
      <li className="mb-6">
        <NavLink to="/settings" className="flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out" activeClassName="bg-gray-900">
          {<FaCog className="mr-2" />} Settings
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Sidebar;
