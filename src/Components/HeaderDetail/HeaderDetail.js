import React from 'react';
import "./headerdetail.css";

//imported components
import HeaderSearch from '../../Components/HeaderSearch/HeaderSearch';
import HeaderProfileDetail from "../../Components/HeaderProfileDetail/HeaderProfileDetail";

const HeaderDetail = ({InputEnter, inputValue}) => {
    return (
        <div>
            <div className="home-page-header-container">
                
                <HeaderProfileDetail />
                
                <HeaderSearch InputEnter={InputEnter} inputValue={inputValue}  />
            </div>
        </div>
    )
}

export default HeaderDetail
