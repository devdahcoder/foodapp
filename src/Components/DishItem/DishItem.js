import React from 'react';
import "./dishitem.css";



const DishItem = ({dish}) => {
    
    return (
        <div className="dish-item-container">
            <div className="dish-item-display">
                <div className="dish-item-image-container">
                    <img src={dish.image} alt=""/>
                </div>

                <div className="dish-item-list-details">
                    <div className="dish-list-item-name">
                        <p>{dish.name}</p>
                    </div>
                    <div className="dish-list-item-price">
                        <p>{dish.price}</p>
                    </div>
                    <div className="dish-list-item-availability">
                        <p>{dish.availability}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DishItem
