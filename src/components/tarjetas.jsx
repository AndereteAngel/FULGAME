import React from "react";

function Tarjetas() {
    return (
        <div
            className="card"
            style={{
                width: "150px",
                margin: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "blue",
                color: "white",
                border: "solid black",
            }}
        >
            <button
                type="checkbox"
                style={{
                    width: "100px",
                    padding: "20px",
                    margin: "10px",
                    boxSizing: "border-box",
                }}
            />
        </div>
    );
}

export default Tarjetas;
