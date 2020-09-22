import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/Vulnerbility">Vulnerbility</NavLink>
          <NavLink to="/testdashboard">Charts</NavLink>
       </div>
    );
}
 
export default Navigation;