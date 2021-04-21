import React from 'react';
import "./orderlist.css";


//imported components
import ContinuePaymentContainer from "../../Components/ContinuePaymentContainer/ContinuePaymentContainer"
import HomeFoodListDisplay from "../../Components/HomeFoodListDisplay/HomeFoodListDisplay"
import OrderListHeader from "../../Components/OrderListHeader/OrderListHeader";


const OrderList = () => {
    return (
        <div className="home-food-order-list-container">
            <div className="home-food-order-list-display">
                <OrderListHeader />

                <div className="home-food-order-list-container-list">
                
                    <div className="main-food-order-list-container">
                        <ul className="main-food-order-list-ul">
                            <HomeFoodListDisplay />
                        </ul>
                    </div>
                    
                </div>

                

                <ContinuePaymentContainer />
                
            </div>
        </div>
    )
}

export default OrderList
