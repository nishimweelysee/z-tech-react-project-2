import React from 'react';
import Button from './button';
function Header({handleClickOpen}) {

    

    return (
        <div>
            <header className="flex px-10 justify-between border border-blue-700 shadow-lg">
                <div className="my-auto font-bold text-2xl gra">ITINERARY  TRACKER</div>
                <div className="my-2"><Button handleClickOpen={handleClickOpen}/></div>
            </header>
            
        </div>
    );
}

export default Header;