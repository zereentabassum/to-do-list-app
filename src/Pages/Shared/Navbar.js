import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
    
        <li><Link className='text-xl font-semibold px-6 text-accent' to='/todo'>To do</Link></li>
        <li><Link className='text-xl font-semibold px-6 text-accent' to='/completed'>Completed Tasks</Link></li>
        <li><Link className='text-xl font-semibold px-6 text-accent' to='/pending-task'>Pending Tasks</Link></li>
        </>

    return (
        <div className='mb-4'>
             
        <div className="navbar  bg-neutral">
 <div className="navbar-start"> 
   <div className="dropdown">
     <label tabIndex="0" className="btn btn-ghost lg:hidden">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     </label>
     <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-52">
         {menuItems}
     </ul>
   </div>
 </div>
 <div className="navbar-center hidden lg:flex ">
   <ul className="menu menu-horizontal  ">
   {menuItems}
   </ul>
 </div>
<div className='navbar-end'>

</div>
    
</div>
        </div>
    );
};

export default Navbar;