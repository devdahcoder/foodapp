import React from 'react'
import "./confirmationpayment.css";


//imported icons
import NavArrow from "../../Assets/images/arrownav.svg";
import Plus from "../../Assets/images/plus.svg";

//imported components

import HomeFoodListDisplay from "../../Components/HomeFoodListDisplay/HomeFoodListDisplay"

const ConfirmationPayment = () => {
    return (
        <div className="confirmation-payment-container">
            <div className="confirmation-payment-display">
                <div className="confirm-container">
                    <div className="confirm-navigation-container">
                        <div>
                            <button>
                                <img src={NavArrow} alt="nav-arrow"/>
                            </button>
                        </div>
                    </div>
                
                    <div className="confirm-header-container">
                        <div className="confirm-header-text-container">
                            <div className="confirm-header-text-header">
                                <p>Confirmation</p>
                            </div>
                            <div className="confirm-header-text-header">
                                <p>Orders #34562</p>
                            </div>
                        </div>

                        <div className="confirm-header-add-container">
                            <button>
                                <img src={Plus} alt=""/>
                            </button>
                        </div>
                    </div>


                    <HomeFoodListDisplay />

                    
                
                </div>

                <div className="payment-container">

                </div>
            </div>
        </div>
    )
}

export default ConfirmationPayment
