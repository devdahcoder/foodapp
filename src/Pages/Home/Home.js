import React, {useState} from 'react';
import "./home.css";

//imported icons
// import Spicy from "../../Assets/images/spicy.png";

//imported components
import HomePageHeader from "../../Components/HomePageHeader/HomepageHeader"
import HomePageDish from "../../Components/HomePageDish/HomePageDish";
import ContinuePaymentContainer from "../../Components/ContinuePaymentContainer/ContinuePaymentContainer"
import HomeFoodListDisplay from "../../Components/HomeFoodListDisplay/HomeFoodListDisplay"


const Home = () => {


    const [inputValue, setInputValue] = useState("");


    const InputEnter = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }




    return (
        <div className="home-page-container">
            <div className="home-page-display">
                <div className="home-food-container">
                    <div className="home-food-display">
                        <HomePageHeader InputEnter={InputEnter} inputValue={inputValue} />
                        <HomePageDish inputValue={inputValue} />
                    </div>
                </div>






                <div className="home-food-order-list-container">
                    <div className="home-food-order-list-display">
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

                            <div className="home-food-order-list-container-list">
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
                            
                                <div className="main-food-order-list-container">
                                    <ul className="main-food-order-list-ul">
                                        <HomeFoodListDisplay />
                                    </ul>
                                </div>


                                <ContinuePaymentContainer />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
