import React from 'react';
import { NavLink } from 'react-router-dom';

import Dashboard from './Dashboard';
import Vulnerbility from './Vulnerbility';
import MyChart from './testdashboard';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/Vulnerbility">Vulnerbility</NavLink>
                <NavLink to="/testdashboard">Charts</NavLink>
            </div>
        );
    }
}