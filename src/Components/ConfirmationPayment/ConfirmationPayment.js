import React from 'react'
import "./confirmationpayment.css";


//imported icons
import NavArrow from "../../Assets/images/arrownav.svg";
import Plus from "../../Assets/images/plus.svg";
import CreditCard from "../../Assets/images/creditcard.svg";
import Paypal from "../../Assets/images/paypal.svg";
import Cash from "../../Assets/images/cash.svg";
import PaymentCheck from "../../Assets/images/paymentcheck.svg";
//imported components
import ContinuePaymentContainer from "../ContinuePaymentContainer/ContinuePaymentContainer";
import DropDown from "../DropDown/DropDown"
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
                            <div className="confirm-header-text-padding"></div>
                            <div className="confirm-header-text-sub-header">
                                <p>Orders #34562</p>
                            </div>
                        </div>

                        <div className="confirm-header-add-container">
                            <button>
                                <img src={Plus} alt=""/>
                            </button>
                        </div>
                    </div>


                    <div className="main-food-order-list-container">
                        <ul className="main-food-order-list-ul">
                            <HomeFoodListDisplay />
                        </ul>
                    </div>

                    <ContinuePaymentContainer removeBtn={"removeBtn"} />

                    
                
                </div>

                <div className="payment-container">
                    <div className="payment-method-header">
                        <div className="payment-method-header-text-container">
                            <div className="payment-method-header-text-header">
                                <p>Payment</p>
                            </div>
                            <div className="payment-method-header-text-padding"></div>
                            <div className="payment-method-header-text-sub-header">
                                <p>3 Payment method available</p>
                            </div>
                        </div>
                    </div>
                    

                    <form action="" method="post">
                        <div className="form-display">
                            <div className="payment-method-form-container">
                                <div className="payment-method-form-container-header">
                                    <p>Payment Method</p>
                                </div>

                                <div className="payment-method-form-display">
                                    <div className="payment-method-select-btn-container">
                                        <button>

                                            <div className="payment-method-select-selected">
                                                <img src={PaymentCheck} alt=""/>
                                            </div>

                                            <div className="payment-method-select-icon-container">
                                                <img src={CreditCard} alt="credit card"/>
                                            </div>

                                            Credit Card
                                        </button>
                                    </div>
                                    <div className="payment-method-select-btn-container">
                                        <button>

                                            <div className="payment-method-select-selected">
                                                <img src={PaymentCheck} alt=""/>
                                            </div>

                                            <div className="payment-method-select-icon-container">
                                                <img src={Paypal} alt="credit card"/>
                                            </div>

                                            Paypal
                                        </button>
                                    </div>
                                    <div className="payment-method-select-btn-container">
                                        <button>

                                            <div className="payment-method-select-selected">
                                                <img src={PaymentCheck} alt=""/>
                                            </div>

                                            <div className="payment-method-select-icon-container">
                                                <img src={Cash} alt="credit card"/>
                                            </div>

                                            Cash
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="payment-method-form-input-container">
                                <div className="payment-method-input-container">
                                    <label htmlFor="">
                                        Cardholder Name
                                        <input type="text" name="" id=""/>
                                    </label>
                                </div>
                                <div className="payment-method-input-container">
                                    <label htmlFor="">
                                        Card Number
                                        <input type="text" name="" id=""/>
                                    </label>
                                </div>
                                
                                <div className="payment-method-input-display">
                                    <div className="payment-method-input-container">
                                        <label htmlFor="">
                                            Card Number
                                            <input type="text" name="" id=""/>
                                        </label>
                                    </div>
                                    <div className="payment-method-input-padding">

                                    </div>
                                    <div className="payment-method-input-container">
                                        <label htmlFor="">
                                            Card Number
                                            <input type="text" name="" id=""/>
                                        </label>
                                    </div>
                                </div>

                                <div className="payment-method-input-display-drop-down">
                                    <div className="payment-method-input-container">
                                        <label htmlFor="">
                                            Order Type
                                            <DropDown paymentMeth={"paymentMeth"} />
                                        </label>
                                    </div>
                                    <div className="payment-method-input-padding">

                                    </div>
                                    <div className="payment-method-input-container">
                                        <label htmlFor="">
                                            Table No.
                                            <input type="text" name="" id=""/>
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className="payment-method-confirm-btn-container">
                                <div className="payment-method-confirm-btn">
                                    <button>
                                        Cancel
                                    </button>
                                </div>
                                <div className="payment-method-confirm-btn-padding">

                                </div>
                                <div className="payment-method-confirm-btn">
                                    <button className="payment-method-confirm-pay">
                                        Confirm Payment
                                    </button>
                                </div>
                            </div>
                        
                        </div>
                    </form>
                
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPayment
