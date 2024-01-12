import { React, useState } from "react";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import items from "./items";
import "./work.css";

const Work = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [divId, setDivId] = useState("");
	let navigate = useNavigate();

	const handleSubmit = (item) => {
		let path = `/contact`;
		navigate(path);
	};

	const handleClick = (event) => {
		setIsOpen(!isOpen);
		setDivId(event.currentTarget.id);
	};

	return (
		<>
			<div className="work">
				<div className="top_box">
					<p>latest works and featured</p>
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
												//onHoverStart={(e) => handleClick(e)}
												onClick={(e) => handleClick(e)}
												transition={{
													layout: { duration: 1.2, type: "spring" },
												}}
												style={{
													borderRadius: ".8rem",
													boxShadow: "0px 10px 30px rgba(249, 242, 242,0.4)",
													width: isOpen && divId.match(item.id) ? "95%" : "50%",
												}}
												layout
											>
												<motion.h2 layout="position">Item Details.</motion.h2>
												{isOpen && divId.match(item.id) && (
													<motion.div
														className="exp-card-content"
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ duration: 1 }}
														exit={{ opacity: 0 }}
													>
														<p> {item.description} </p>
														<button
															name="submit-btn"
															id="submit"
															type="submit"
															onClick={() => handleSubmit(item)}
														>
															Reserve
														</button>
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
													<img src={item.background} alt="Artpiece"></img>
												</motion.div>
												<p>{item.name}</p>
											</motion.div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Work;
