import React from 'react';
import { Link } from 'react-router-dom';

function footer(props) {
    return (
        <div className="footer px-10 py-4 flex justify-between bg-white  border-b-2 border-blue-700 bg-gray-200 p-2">
            <span>copyright © 2021</span>
            <Link  to="about">About</Link>
        </div>
    );
}

export default footer;