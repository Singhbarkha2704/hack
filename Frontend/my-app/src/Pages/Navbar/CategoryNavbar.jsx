import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/CategoryNavbar.css'

const CategoryNavbar = () => {
  return (
    <Fragment>
    <div className='nav bg-dark'> 
        <NavLink to='/product' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>All Categories</NavLink>
        <NavLink to='/Sofachairs' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>SofaChairs</NavLink>                    
        <NavLink to='/Dinning' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Dining</NavLink> 
        <NavLink to='/Lighting' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Lighting</NavLink>
        <NavLink to='/Decor' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Decoration</NavLink> 
        <NavLink to='/Garden' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Plants</NavLink>
        <NavLink to='/new-arrivals' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>New Arrivals</NavLink>
    </div>          
    </Fragment>
  )
}

export default CategoryNavbar