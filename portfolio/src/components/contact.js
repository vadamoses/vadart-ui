import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import "./contact.css";
// import { useCart } from "react-use-cart";
import siteImages from "../siteImages";
import { ContactFormSendButton } from "../tools/Buttons";

const Contact = () => {
	// const { items } = useCart();
	const [data, setData] = useState({
		Name: "",
		Email: "",
		ItemNumber: "",
	});
	let Name, Value;
	const input = (e) => {
		Name = e.target.name;
		Value = e.target.value;
		setData({ ...data, [Name]: Value });
	};
	const senddata = async (e) => {
		const { Name, Email, ItemNumber } = data;
		e.preventDefault();
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "aplication/json",
			},
			body: JSON.stringify({
				Name,
				Email,
				ItemNumber,
			}),
		};

		const send = await fetch(
			"https://react-portfolio-c6578-default-rtdb.firebaseio.com/Message.json",
			options
		);
		console.log(send);
		// if (send) {
		// 	alert("Message Sent !");
		// } else {
		// 	alert("something went wrong");
		// }
	};
	return (
		<>
			<div className="contact">
				<div className="contact-parallax">
					<div className="contact-container">
						<div className="info-box">
							<div className="info">
								<div className="box">
									<div className="icon">
										<HiOutlineMail />
									</div>
									<div className="detail">
										<h4>mail us</h4>
										<p>info@bluebase2.com</p>
									</div>
								</div>
								<div className="box">
									<div className="icon">
										<BsTelephoneInbound />
									</div>
									<div className="detail">
										<h4>contact us</h4>
										<p>+1 504-899-8221</p>
										<p>+1 504-899-8221</p>
									</div>
								</div>
								<div className="box">
									<div className="icon">
										<FiMapPin />
									</div>
									<div className="detail">
										<h4>location</h4>
										<p>22 Baker Street, Texas United States W1U 3BW</p>
									</div>
								</div>
							</div>
						</div>
						<div className="input-box">
							<img src={siteImages[7]} alt="icon"></img>
							<h2>
								Retrieve your <span>masterpiece</span>
							</h2>
							<form method="POST" className="form" /* onSubmit={senddata} */>
								<input
									type="text"
									name="Name"
									value={data.Name}
									placeholder="Name"
									onChange={input}
									autoComplete="off"
								></input>
								<input
									type="text"
									name="Email"
									value={data.Email}
									placeholder="E-mail"
									onChange={input}
									autoComplete="off"
								></input>
								<input
									type="text"
									name="ItemNumber"
									value={data.ItemNumber}
									placeholder="Item Number"
									onChange={input}
									autoComplete="off"
								></input>
								<div className="btn-container" onClick={senddata}>
									<ContactFormSendButton />
								</div>
							</form>
							{/* <p>Items in cart:{" "}</p>
						<p className="marquee">
								{items.map((item) => (
									<h3 key={item.id}>
										<>
											{" "}
											Name: {item.name}{""}
											Price: {item.price}{""}
											Quantity: {item.quantity}{""}
										</>
									</h3>
								))}
						</p> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
