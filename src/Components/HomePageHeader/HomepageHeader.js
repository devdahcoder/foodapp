import React from 'react';
import "./homepageheader.css";

//imported components
import DishMenuNav from "../../Components/DishMenuNav/DishMenuNav";
import HeaderDetail from "../../Components/HeaderDetail/HeaderDetail";

const HomepageHeader = ({InputEnter, inputValue}) => {

    return (
        <header >
            <HeaderDetail InputEnter={InputEnter} inputValue={inputValue} />

            <DishMenuNav />
        </header>
    )
}

export default HomepageHeader
