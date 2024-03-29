import { React, useState } from "react";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "react-use-cart";
import { ReserveItemButton, ViewCartButton } from "../tools/Buttons";
import "../tools/toast.css";
import items from "./items";
import * as icons from "react-icons/fa";
import "./work.css";

const Work = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [divId, setDivId] = useState("");
	const { isEmpty, addItem } = useCart();
	const navigate = useNavigate();
	const today = new Date();

	const handleSubmit = (item) => {
		setIsOpen(isOpen);
		item.reservationDate = today.toUTCString();
		addItem(item);
		showSnackBar();
	};

	const showSnackBar = () => {
		const x = document.querySelector(".snackbar");
		x.className += " show";
		setTimeout(() => {
			x.className = x.className.replace("show", "");
		}, 3000);
	};

	const handleClick = (event) => {
		setIsOpen(!isOpen);
		setDivId(event.currentTarget.id);
	};

	const ViewCart = () => {
		navigate("/cart");
	};

	return (
		<div className="work">
			<div className="work-parallax">
				<div className="top_box">
					<p>latest pieces</p>
				</div>
				<div className="main_work_container">
					<div className="row">
						{items.map((item, index) => (
							<div
								className="work_container"
								key={index}
								style={
									isMobile
										? { flexDirection: "column-reverse" }
										: index % 2 === 0
										? { flexDirection: "row" }
										: { flexDirection: "row-reverse" }
								}
							>
								<div className="left">
									<div className="work_column">
										<div className="exp-card-container">
											<motion.div
												className="exp-card"
												id={item.id}
												onClick={(e) => handleClick(e)}
												transition={{
													layout: { duration: 1.2, type: "spring" },
												}}
												style={{
													borderRadius: ".8rem",
													boxShadow: "0px 10px 30px rgba(249, 242, 242,0.4)",
													width: isOpen && divId.match(item.id) ? "90%" : "60%",
												}}
												layout
											>
												<motion.h2 layout="position">
													About The Piece {!isOpen && <i className="eye-icon"><icons.FaRegEye /></i>}
												</motion.h2>
												{isOpen && divId.match(item.id) && (
													<motion.div
														className="exp-card-content"
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ duration: 1 }}
														exit={{ opacity: 0 }}
													>
														<p>{item.description}</p>
														<div
															className="button-main-container"
															style={{
																gridTemplateColumns: isEmpty && "1fr",
															}}
														>
															<div
																className="rsv-button-container"
																onClick={() => handleSubmit(item)}
															>
																<ReserveItemButton />
															</div>
															{!isEmpty && (
																<div
																	className="vc-button-container"
																	onClick={() => ViewCart()}
																>
																	<ViewCartButton />
																</div>
															)}
														</div>
													</motion.div>
												)}
											</motion.div>
										</div>
									</div>
								</div>
								<div className="right">
									<div className="work_column">
										<div className="content">
											<motion.div
												className="box"
												transition={{
													layout: { duration: 1.2, type: "spring" },
												}}
												layout
											>
												<motion.div className="img_box">
													<img src={item.background} alt="Artpiece" />
												</motion.div>
												<p>{item.name}</p>
											</motion.div>
										</div>
									</div>
								</div>
								<div id="snackbar" className="snackbar">
									<p>Item reserved in cart.</p>
								</div>
							</div>
						))}
					</div>
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

export default Work;
