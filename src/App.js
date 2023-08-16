import React from "react";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	return (
		<div className='container--app'>
			
			<Navbar />
			<ItemListContainer greeting={"FulGames y nada más"} />
		</div>
	);
}

export default App;
