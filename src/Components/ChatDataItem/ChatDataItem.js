import React from 'react';
import "./chartdataitem.css";

//imported icons
import Arrow from "../../Assets/images/rate-arrow.svg";

const ChatDataItem = ({rate}) => {
    return (
        <div className="chart-data-item-container">
            <div className="chart-data-item-display">
                <div className="chart-data-rate-display">
                    <div className="chart-data-image-container">
                        <div className="chart-data-image">
                            <img src={rate.icon} alt=""/>
                        </div>
                    </div>

                    <div className="chart-data-rating-container">
                        <div className="chart-data-rating-percent-container">
                            <p>{rate.rate}</p>
                        </div>

                        <div className="chart-data-rating-img-container">
                            <img src={Arrow} alt=""/>
                        </div>
                    </div>

                </div>

                <div className="chart-data-total-figure-container">
                    <p>{rate.amount}</p>
                </div>

                <div className="chart-data-description-container">
                    <p>{rate.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatDataItem
