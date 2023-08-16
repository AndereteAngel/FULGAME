import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-regular-svg-icons";

const IconPelota = () => {
  return (
    <FontAwesomeIcon
      icon={faFutbol} 
      size="2xs"
      style={{
        "--fa-primary-color": "#050505",
        "--fa-secondary-color": "#fc0303",
        "--fa-secondary-opacity": "0.8",
      }}
    />
  );
};

export default IconPelota;
