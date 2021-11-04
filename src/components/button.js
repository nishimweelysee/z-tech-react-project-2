import React from 'react';

function Button({handleClickOpen}) {
    return (
        <div>
            <button type="button" onClick={handleClickOpen} className="bg-green-700 px-3 py-1 text-white hover:bg-blue-700">Add</button>
        </div>
    );
}

export default Button;