import React from 'react';
import "./homedishheader.css";


//imported components
import DropDown from "../DropDown/DropDown";


const HomeDishHeader = () => {
    return (
        <div className="home-page-dish-header">
            <div className="home-page-header-display">
                <div className="home-page-header-text">
                    <p>Choose Dishes</p>
                </div>
                

                <DropDown />
                
            </div>
        </div>
    )
}

export default HomeDishHeader
