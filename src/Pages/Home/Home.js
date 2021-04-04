import React from 'react';
import "./home.css";

//imported icons


//imported components
import HomePageHeader from "../../Components/HomePageHeader/HomepageHeader"
import HomePageDish from "../../Components/HomePageDish/HomePageDish";


const Home = () => {
    return (
        <div className="home-page-container">
            <div className="home-page-display">
                <div className="home-food-container">
                    <div className="home-food-display">
                        <HomePageHeader />
                        <HomePageDish />
                        
                    </div>
                </div>


                <div className="home-food-payment-container">
                    <div className="home-food-payment-display">
                        hello world
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
