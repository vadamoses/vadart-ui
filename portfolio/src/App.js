import React from "react";
import Nav from "./navigation/nav";
import Footer from "./navigation/footer";
import Rout from "./navigation/rout";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
const App = () => {
	return (
		<>
			<CartProvider>
				<BrowserRouter>
					<Nav />
					<Rout />
					<Footer />
				</BrowserRouter>
			</CartProvider>
		</>
	);
};

export default App;
