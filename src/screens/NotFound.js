import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1>Page not found 404</h1>
            <Link to="/">Back to home</Link>
        </div>
    )
}

export default NotFound
