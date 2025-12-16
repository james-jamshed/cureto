import { memo } from 'react';
import {assets}from '../assets/assets';

const Navbar = () => {
  return (
  <div className="">
  <img
    src={assets.logo}
    alt="Logo"
    className="bg-white p-2 rounded"
  />
</div>

  )
};

export default memo(Navbar);