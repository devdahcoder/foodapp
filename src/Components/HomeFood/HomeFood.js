import React, {useState} from 'react';
import "./homefood.css";


//imported components
import HomePageHeader from "../../Components/HomePageHeader/HomepageHeader"
import HomePageDish from "../../Components/HomePageDish/HomePageDish";

const HomeFood = () => {

    
    const [inputValue, setInputValue] = useState("");


    const InputEnter = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <div>
            <div className="home-food-container">
                <div className="home-food-display">
                    <HomePageHeader InputEnter={InputEnter} inputValue={inputValue} />
                    <HomePageDish inputValue={inputValue} />
                </div>
            </div>
        </div>
    )
}

export default HomeFood
