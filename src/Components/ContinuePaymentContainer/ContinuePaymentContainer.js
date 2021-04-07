import React from 'react';
import "./continuepayment.css";


const ContinuePaymentContainer = () => {
    return (
        <div className="main-food-list-continue-payment-container">
            <div className="main-food-list-continue-payment-display">
                <div className="main-food-list-discount-display">
                    <div className="main-food-discount">
                        <p>Discount</p>
                    </div>

                    <div className="main-food-discount-price">
                        <p>$0</p>
                    </div>
                </div>

                <div className="main-food-list-discount-display">
                    <div className="main-food-discount">
                        <p>Sub total</p>
                    </div>

                    <div className="main-food-discount-price">
                        <p>$21, 238</p>
                    </div>
                </div>

                <div className="main-food-list-continue-payment-btn-container">
                    <button>
                        Continue to Payment
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ContinuePaymentContainer
