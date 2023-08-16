import React from "react";
import { partidos } from "../productos/productos"; // Asegúrate de que la ruta sea correcta

function Partidos() {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <label>
                    <input type="checkbox" />
                    {partidos.equipo1}
                </label>
                <label>
                    <input type="checkbox" />
                    {partidos.equipo2}
                </label>
            </div>
        </div>
    );
}

export default Partidos;
