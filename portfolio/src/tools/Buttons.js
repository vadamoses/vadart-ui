import "./Buttons.css";
import * as icons from "react-icons/fa";

export const ViewPiecesButton = () => (
	<button className="vp-btn" style={{ "--clr": "#ff9933" }}>
		<span>view the collection</span>
		<i></i>
	</button>
);
export const ContactFormSendButton = () => (
	<button className="cf-btn" style={{ "--clr": "#39FF14 " }}>
		<span>Send</span>
		<i></i>
	</button>
);
export const ReserveItemButton = () => (
	<button className="rsv-btn" style={{ "--clr": "#FF5E00" }}>
		<span>reserve item</span>
		<i></i>
	</button>
);

export const ViewCartButton = () => (
	<button className="vc-btn" style={{ "--clr": "#FF5E00" }}>
		<span><icons.FaShoppingCart /></span>
		<i></i>
	</button>
);

export const EmptyCartButton = () => (
	<button className="ec-btn" style={{ "--clr": "#AD0808" }}>
		<span>Empty Cart</span>
		<i></i>
	</button>
);

export const CheckoutButton = () => (
	<button className="co-btn" style={{ "--clr": "#10A515" }}>
		<span>Complete Order</span>
		<i></i>
	</button>
);
