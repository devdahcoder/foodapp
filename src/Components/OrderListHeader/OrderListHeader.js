import React from 'react';
import "./orderlistheader.css";




const OrderListHeader = () => {
    return (
        <div>
            <div className="home-food-order-list-header">
                <div className="home-food-order-tag">
                    <p>Orders #34562</p>
                </div>

                <div className="home-food-order-select">
                    <div className="home-food-order-select-btn-container">
                        <button>
                            Dine in
                        </button>
                    </div>
                    <div className="home-food-order-select-btn-container">
                        <button>
                            To go
                        </button>
                    </div>
                    <div className="home-food-order-select-btn-container">
                        <button>
                            Delivery
                        </button>
                    </div>
                </div>

                <div className="food-order-list-header-main-list">
                    <div className="food-header-list-item-qty">
                        <div className="food-header-list-item">
                            <p>Item</p>
                        </div>

                        <div className="food-header-list-qty">
                            <p>Qty</p>
                        </div>
                    </div>

                    <div className="food-header-list-price">
                        <p>Price</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderListHeader
