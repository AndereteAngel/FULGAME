import React from "react";
import "./cartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons"; 

export const CartWidget = () => {
    return (
        <div className="container--cartWidget">
            <div className="cart--icon">
            <FontAwesomeIcon 
            icon={faRankingStar} 
            size="sm" 
            style={{"--fa-primary-color": "#00f010", "--fa-secondary-color": "#1dfc2c",}} />
            </div>
        </div>
    );
};

