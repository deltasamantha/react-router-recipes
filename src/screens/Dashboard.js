import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../utils';

function Dashboard() {

    const history = useHistory();

    const handleLogout = () => {
        logout();
        history.push("/signin");
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Click to logout</button>
        </div>
    )
}

export default Dashboard
