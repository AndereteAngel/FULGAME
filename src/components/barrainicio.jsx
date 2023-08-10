import React from "react";
import Imagen from "./img";


function Barrainicio2() {
  return (
    <>
      <div
        className="Barrasuperio"
        style={{
          display: "flex",
          gridTemplateColumns: "100%",
          margin: "15px",
          border: "solid",
          backgroundColor: "pink",
          height: "100px",
        }}
      >
        <Imagen /> 
        <h1 style={{
            textAlign:"center"
        }}>FulGame</h1>
      </div>
    </>
  );
}

export default Barrainicio2;
