import React from 'react';
import "./homefoodlistdisplay.css";


//imported libraries
import {v4 as uuid} from "uuid";

//imported icons
import Sea from "../../Assets/images/sea.png";
import Pasta from "../../Assets/images/pasta.png";
import Beef from "../../Assets/images/beef.png";
import Noodle from "../../Assets/images/noodle.png";
import Rice from "../../Assets/images/rice.png";
import Spicy from "../../Assets/images/spicy.png";


//imported components
import HomeFoodListItem from "../HomeFoodListItem/HomeFoodListItem";


const dishes = [
    {
        image: Sea,
        name: "Spicy seasoned seafood noodles",
        price: "$ 2.29",
        availability: "20 Bowls available"
    },
    {
        image: Pasta,
        name: "Salted Pasta with mushroom sauce",
        price: "$ 2.29",
        availability: "11 Bowls available"
    },
    {
        image: Beef,
        name: "Beef dumpling in hot and sour soup",
        price: "$ 2.29",
        availability: "16 Bowls available"
    },
    {
        image: Noodle,
        name: "Healthy noodle with spinach leaf",
        price: "$ 2.29",
        availability: "22 Bowls available"
    },
    {
        image: Rice,
        name: "Hot spicy fried rice with omelet",
        price: "$ 2.29",
        availability: "13 Bowls available"
    },
    {
        image: Spicy,
        name: "Spicy instant noodle with special omelette",
        price: "$ 2.29",
        availability: "17 Bowls available"
    },
    {
        image: Sea,
        name: "Spicy seasoned seafood noodles",
        price: "$ 2.29",
        availability: "20 Bowls available"
    },
    {
        image: Pasta,
        name: "Salted Pasta with mushroom sauce",
        price: "$ 2.29",
        availability: "11 Bowls available"
    },
    {
        image: Beef,
        name: "Beef dumpling in hot and sour soup",
        price: "$ 2.29",
        availability: "16 Bowls available"
    },
    {
        image: Noodle,
        name: "Healthy noodle with spinach leaf",
        price: "$ 2.29",
        availability: "22 Bowls available"
    },
    {
        image: Rice,
        name: "Hot spicy fried rice with omelet",
        price: "$ 2.29",
        availability: "13 Bowls available"
    },
    {
        image: Spicy,
        name: "Spicy instant noodle with special omelette",
        price: "$ 2.29",
        availability: "17 Bowls available"
    },
    {
        image: Sea,
        name: "Spicy seasoned seafood noodles",
        price: "$ 2.29",
        availability: "20 Bowls available"
    },
    {
        image: Pasta,
        name: "Salted Pasta with mushroom sauce",
        price: "$ 2.29",
        availability: "11 Bowls available"
    },
    {
        image: Beef,
        name: "Beef dumpling in hot and sour soup",
        price: "$ 2.29",
        availability: "16 Bowls available"
    },
    {
        image: Noodle,
        name: "Healthy noodle with spinach leaf",
        price: "$ 2.29",
        availability: "22 Bowls available"
    },
    {
        image: Rice,
        name: "Hot spicy fried rice with omelet",
        price: "$ 2.29",
        availability: "13 Bowls available"
    },
    {
        image: Spicy,
        name: "Spicy instant noodle with special omelette",
        price: "$ 2.29",
        availability: "17 Bowls available"
    },

]





const HomeFoodListDisplay = () => {
    return (
        <div className="home-food-list-item-container">
            {
                dishes.map((dish) => (<HomeFoodListItem key={uuid()} dish={dish} />))
            }
        </div>
    )
}

export default HomeFoodListDisplay
