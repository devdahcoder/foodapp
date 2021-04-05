import React from 'react';
import "./dropdoenitem.css";


const DropDownItem = ({dropdown}) => {
    return (
        <div>
            <li className="drop-down-item-li">
                <div>
                    {dropdown.value}
                </div>
            </li>
        </div>
    )
}

export default DropDownItem
