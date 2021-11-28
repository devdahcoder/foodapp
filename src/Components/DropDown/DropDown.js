import React, {useState} from 'react';
import "./dropdown.css";

//imported components
import DropDownItem from "../DropDownItem/DropDownItem";

//imported packages 
import {v4 as uuid} from "uuid";


const initialState = [
    {
        value: "Eat out"
    },
    {
        value: "To go"
    },
    {
        value: "Delivery"
    },
]

const DropDown = ({paymentMeth}) => {



    const [showDropDown, setShowDropDown] = useState(false);

    const [dropdown] = useState(initialState);


    const displayDropDown = () => {
        if (showDropDown === true) {
            setShowDropDown(false)
        }
        else if (showDropDown === false) {
            setShowDropDown(true);
        }
    }



    return (
        <div>
            <div className="home-page-header-select">
                <div style={{width: paymentMeth ? "100%" : ""}} className="drop-down">
                    <ul className="default-option">
                        <li style={{padding: paymentMeth ? "0.8em 1em" : ""}}>
                            <div style={{justifyContent: paymentMeth ? "flex-start" : ""}} className="display-option">

                                <div className="display-option-icon-container">
                                    <button onClick={displayDropDown} className={showDropDown ? "transform-icon" : ""}>
                                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00001 6.33328C5.81001 6.33328 5.62084 6.26911 5.46667 6.13995L0.466672 1.97328C0.113339 1.67911 0.0650056 1.15328 0.360006 0.799946C0.654172 0.446612 1.17917 0.399112 1.53334 0.693279L6.00917 4.42328L10.4775 0.827446C10.8358 0.539112 11.3608 0.595779 11.6492 0.954113C11.9375 1.31245 11.8808 1.83661 11.5225 2.12578L6.52251 6.14911C6.37001 6.27161 6.18501 6.33328 6.00001 6.33328Z" fill="white"/>
                                        </svg>
                                    </button>
                                    
                                </div>

                                <p style={{marginLeft: paymentMeth ? "0.8em" : ""}}>Dine in</p>

                            </div>
                        </li>
                    </ul>

                    {
                        showDropDown ? 
                    
                        <ul className="main-options">
                            {
                                dropdown.map((dropdown) => (
                                    <DropDownItem key={uuid()} dropdown={dropdown} />
                                ))
                            }
                        </ul>
                        :
                        ""
                    }
                </div>
            </div>
        </div>
    )
}

export default DropDown
