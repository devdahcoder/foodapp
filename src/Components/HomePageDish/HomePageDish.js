import React, {useState} from 'react';
import "./homepagedish.css";

//imported components
import DishDisplay from "../DishDisplay/DishDisplay";
import HomeDishHeader from "../HomeDishHeader/HomeDishHeader";



const HomePageDish = ({inputValue}) => {
    

    return (
        <div className="home-page-dish-container">
            
            <HomeDishHeader />

            <DishDisplay inputValue={inputValue} />
        </div>
    )
}

export default HomePageDish
