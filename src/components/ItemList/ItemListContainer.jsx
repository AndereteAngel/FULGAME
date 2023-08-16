import React from "react";
import Button from "react-bootstrap/Button";
import "./itemListContainer.css";
import Cardspartido from "../cards/CardPartido";


export const ItemListContainer = ({ greeting }) => {
	return (
		<div className="container--ItemListContainer">
			<div className="container--ItemListContainer--text">
				<div style={{ display: "flex" }}>
					<Cardspartido />
					<Cardspartido />
					<Cardspartido />
					<Cardspartido />
				</div>
				<div className="botonesInf">
				<Button variant="outline-success">Ranking</Button>{" "}
				<Button variant="outline-success">Mano a Mano</Button>{" "}
				<Button variant="outline-success">Desafios</Button>{" "}
				<Button variant="outline-success">FulboMixto</Button>{" "}
				</div>
			</div>
			<div className="container--ItemListContainer--text">
				<a className="conocenos" href="https://www.instagram.com/">Conocenos</a>
			</div>
			<div className="itemListcontainer--prop"> {greeting} </div>
		</div>
	);
};
