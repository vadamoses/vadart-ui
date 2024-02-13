import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { CheckoutButton } from "../tools/Buttons";
import "./Cart.css";

const Cart = () => {
	let navigate = useNavigate();
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
		let path = `/contact`;
		navigate(path);
	};

	if (isEmpty) return <p className="cart-empty">Your cart is empty</p>;

	return (
		<>
			<div className="cart">
				<div className="cart-container">
					<h1>
						Cart: ({"unique items: " + totalUniqueItems} -{" "}
						{"total sum: " + cartTotal})
					</h1>

					{!isEmpty && (
						<button className="empty-cart" onClick={emptyCart}>
							Empty cart
						</button>
					)}

					<ul>
						{items.map((item) => (
							<li key={item.id}>
								<p>
									{" "}
									Name: {item.name} <br /> Price: {item.price} <br /> Quantity:{" "}
									{item.quantity} <br /> Item ID: {item.id} <br /> Item
									reservation date: {item.reservationDate}
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
							</li>
						))}
					</ul>
					<div
						className="co-btn-container"
						onClick={() => completeOrder(items)}
					>
						<CheckoutButton />
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
