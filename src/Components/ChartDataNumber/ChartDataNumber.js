import React, {useState} from 'react'
import "./chartdatanumber.css";

//imported packages 
import {v4 as uuid} from "uuid";

//imported components
import ChatDataItem from "../ChatDataItem/ChatDataItem";

//imported icons
import Dollar from "../../Assets/images/dollar.svg";
import Customer from "../../Assets/images/customer.svg";
import DishOrder from "../../Assets/images/dishorder.svg";

const rates = [
    {
        icon: Dollar,
        rate: "+34.40%",
        amount: "$10,309.43",
        description: "Total Revenue",
    },
    {
        icon: Customer,
        rate: "-12.17%",
        amount: "23,456",
        description: "Total Dish Ordered",
    },
    {
        icon: DishOrder,
        rate: "+32.87%",
        amount: "1,345",
        description: "Total Customer",
    },
]

const ChartDataNumber = () => {

    // const [rates, setRates] = useState(initialState)


    return (
        <div className="chart-data-number-container">
            {
                rates.map((rate) => (
                    <ChatDataItem key={uuid} rate={rate} />
                ))
            }
        </div>
    )
}

export default ChartDataNumber
