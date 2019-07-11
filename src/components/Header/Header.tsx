import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const Header: React.FC = () => (
  <ul className="h-20 bg-white flex container mx-auto px-4 py-3 flex items-center">
    <li className="mr-6">
      <img src={logo} className="h-12" alt="logo" />
    </li>
    <li className="mr-6">
      <Link className="text-blue-500 hover:text-blue-800 text-lg" to="/">Home</Link>
    </li>
    <li className="mr-6">
      <Link className="text-blue-500 hover:text-blue-800 text-lg" to="/todo">Todo</Link>
    </li>
  </ul>
);

export default Header;
