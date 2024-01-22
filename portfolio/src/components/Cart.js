import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
	const {
		isEmpty,
		cartTotal,
		totalUniqueItems,
		items,
		updateItemQuantity,
		removeItem,
		emptyCart,
		metadata,
	} = useCart();

	if (isEmpty) return <p>Your cart is empty</p>;

	return (
		<>
			<h1>
				Cart: ({'unique items: ' + totalUniqueItems} - {'total sum: '+cartTotal})
			</h1>

			<pre>{JSON.stringify(metadata, null, 2)}</pre>

			{!isEmpty && <button onClick={emptyCart}>Empty cart</button>}

			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<p>{""}# Name - {item.name}: #Quantity - {item.quantity}: #Item ID - {item.id}{""}
						<button
							onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
						>
							-
						</button>
						<button
							onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
						>
							+
						</button>
						<button onClick={() => removeItem(item.id)}>Remove &times;</button></p>
					</li>
				))}
			</ul>
		</>
	);
};

export default Cart;
