import React from 'react';
import "./home.css";

//imported icons
// import Spicy from "../../Assets/images/spicy.png";

//imported components
import HomeFood from "../../Components/HomeFood/HomeFood";
import ContinuePaymentContainer from "../../Components/ContinuePaymentContainer/ContinuePaymentContainer"
import HomeFoodListDisplay from "../../Components/HomeFoodListDisplay/HomeFoodListDisplay"
import OrderList from "../../Components/OrderList/OrderList";

const Home = () => {

    return (
        <div className="home-page-container">
            <div className="home-page-display">
                
                <HomeFood />

                <OrderList />

            </div>
        </div>
    )
}

export default Home
