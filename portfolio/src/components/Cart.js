import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { CheckoutButton, EmptyCartButton } from "../tools/Buttons";
import "./Cart.css";
import * as icons from "react-icons/fa";

const Cart = () => {
	const navigate = useNavigate();
	const {
		isEmpty,
		cartTotal,
		totalUniqueItems,
		items,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	const completeOrder = () => {
		navigate("/contact");
	};

	return (
		<div className="cart">
			<div className="cart-parallax">
				<div className="cart-container">
					<h1>
						Cart: (unique items: {totalUniqueItems} - total sum: {cartTotal})
					</h1>
					{isEmpty ? (
						<p className="cart-empty">Your cart is empty</p>
					) : (
						<>
							<ul className="cart-card-container">
								{items.map((item) => (
									<li key={item.id}>
										<div className="cart-card">
											<img
												className="cart-item-img"
												src={item.background}
												alt={item.name}
											/>
											<h1>{item.name}</h1>
											<p>
												<span className="price"> Price: {item.price} </span>{" "}
												<br />
												Quantity: {item.quantity} <br />
												Item ID: {item.id} <br />
												Item reservation date: {item.reservationDate}
											</p>
											<p>
												<button
													onClick={() =>
														updateItemQuantity(item.id, item.quantity - 1)
													}
												>
													-
												</button>
												<button
													onClick={() =>
														updateItemQuantity(item.id, item.quantity + 1)
													}
												>
													+
												</button>
												<button onClick={() => removeItem(item.id)}>
													Remove item &times;
												</button>
											</p>
										</div>
									</li>
								))}
							</ul>
							<div className="buttons-container">
								{!isEmpty && (
									<div
										// className="ec-btn-container"
										onClick={emptyCart}
									>
										<EmptyCartButton />
									</div>
								)}
								<div
									// className="co-btn-container"
									onClick={() => completeOrder(items)}
								>
									<CheckoutButton />
								</div>
							</div>
						</>
					)}
				</div>
				<div className="back-to-top-container">
					<a href="#top" className="back-to-top">
						<icons.FaArrowAltCircleUp />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Cart;
