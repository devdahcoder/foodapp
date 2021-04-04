import React from 'react';
import "./dishmenunav.css";


const DishMenuNav = () => {
    return (
        <div className="dish-menu-container">
            <nav className="dish-menu-nav">
                <ul className="dish-menu-ul">
                    <div id="marker"></div>
                    <li className="dish-menu-li"><a href="/">Hot Dishes</a></li>
                    <li className="dish-menu-li"><a href="/">Cold Dishes</a></li>
                    <li className="dish-menu-li"><a href="/">Soup</a></li>
                    <li className="dish-menu-li"><a href="/">Grill</a></li>
                    <li className="dish-menu-li"><a href="/">Appetizer</a></li>
                    <li className="dish-menu-li"><a href="/">Dessert</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default DishMenuNav
