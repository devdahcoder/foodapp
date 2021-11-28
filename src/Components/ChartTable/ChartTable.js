import React, {useState} from 'react'
import "./charttable.css"

import ChartTableItem from '../ChartTableItem/ChartTableItem'

import First from "./56 11.png";
import Second from "./58 1.png";
import Third from "./58 11.png";
import Fourth from "./30 10.png";
import Fifth from "./29 17.png";

const ChartTable = () => {

    const [data] = useState([
        {
            id: 1,
            image: First,
            name: "Eren Jaegar",
            message: "Spicy seasoned seafood noodles ",
            amount: "$120",
            status: "Complete",
        },
        {
            id: 2,
            image: Second,
            name: "Reiner Braunn",
            message: "Salted Pasta with mushroom sauce",
            amount: "$140",
            status: "Pending",
        },
        {
            id: 3,
            image: Third,
            name: "Levi Ackerman",
            message: "Beef dumpling in hot and sour soup",
            amount: "$120",
            status: "Complete",
        },
        {
            id: 4,
            image: Fourth,
            name: "Historia Reiss",
            message: "Hot spicy fried rice with omelet",
            amount: "$150",
            status: "Preparing",
        },
        {
            id: 5,
            image: Fifth,
            name: "Hanji Zoe",
            message: "Hot spicy fried rice with omelet",
            amount: "$183",
            status: "Complete",
        },

    ]);

    return (
        <div>
            {
                data.map(item => (<ChartTableItem key={item.id} item={item}/>))

            }
        </div>
    )
}

export default ChartTable
