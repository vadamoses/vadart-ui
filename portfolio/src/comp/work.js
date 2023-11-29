import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import images from '../images';
import "./work.css";

const Work = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [divId, setDivId] = useState("");
	let navigate = useNavigate();

	const routeChange = () => {
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
				<div className="container">
					<div className="left">
						<div className="exp-card-container">
							<motion.div
								className="exp-card"
								id="card1"
								//onHoverStart={(e) => handleClick(e)}
								onClick={(e) => handleClick(e)}
								transition={{ layout: { duration: 1.2, type: "spring" } }}
								style={{
									borderRadius: ".8rem",
									boxShadow: "0px 10px 30px rgba(249, 242, 242,0.4)",
								}}
								layout
							>
								<motion.h2 layout="position">Item Details.</motion.h2>
								{isOpen && divId.match("card1") && (
									<motion.div
										className="exp-card-content"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1 }}
										exit={{ opacity: 0 }}
									>
										<p>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Error dolorum praesentium vero rem. Voluptates, quibusdam
											architecto explicabo provident cumque dicta.
										</p>
										<p>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
											Consectetur, sunt.
										</p>
										<button type="submit" onClick={routeChange}>
											Buy Now
										</button>
									</motion.div>
								)}
							</motion.div>
						</div>
					</div>
					<div className="right">
						<div className="content">
							<motion.div
								className="box"
								transition={{ layout: { duration: 1.2, type: "spring" } }}
								layout
							>
								<motion.div className="img_box">
									<img src={images[5]} alt="Artpiece"></img>
								</motion.div>
								<p>mobile designing</p>
							</motion.div>
						</div>
					</div>
				</div>
				<div className="container">
                <div className="right">
						<div className="content">
							<motion.div
								className="box"
								transition={{ layout: { duration: 1.2, type: "spring" } }}
								layout
							>
								<motion.div className="img_box">
									<img src={images[4]} alt="project"></img>
								</motion.div>
								<p>mobile designing</p>
							</motion.div>
						</div>
					</div>
					<div className="left">
						<div className="exp-card-container">
							<motion.div
								className="exp-card"
								id="card2"
								//onHoverStart={(e) => handleClick(e)}
								onClick={(e) => handleClick(e)}
								transition={{ layout: { duration: 1.2, type: "spring" } }}
								style={{
									borderRadius: ".8rem",
									boxShadow: "0px 10px 30px rgba(249, 242, 242,0.4)",
								}}
								layout
							>
								<motion.h2 layout="position">Item Details.</motion.h2>
								{isOpen && divId.match("card2") && (
									<motion.div
										className="exp-card-content"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1 }}
										exit={{ opacity: 0 }}
									>
										<p>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Error dolorum praesentium vero rem. Voluptates, quibusdam
											architecto explicabo provident cumque dicta.
										</p>
										<p>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
											Consectetur, sunt.
										</p>
										<button type="submit" onClick={routeChange}>
											Buy Now
										</button>
									</motion.div>
								)}
							</motion.div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="left">
						<div className="exp-card-container">
							<motion.div
								className="exp-card"
								id="card3"
								//onHoverStart={(e) => handleClick(e)}
								onClick={(e) => handleClick(e)}
								transition={{ layout: { duration: 1.2, type: "spring" } }}
								style={{
									borderRadius: ".8rem",
									boxShadow: "0px 10px 30px rgba(249, 242, 242,0.4)",
								}}
								layout
							>
								<motion.h2 layout="position">Item Details.</motion.h2>
								{isOpen && divId.match("card3") && (
									<motion.div
										className="exp-card-content"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1 }}
										exit={{ opacity: 0 }}
									>
										<p>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Error dolorum praesentium vero rem. Voluptates, quibusdam
											architecto explicabo provident cumque dicta.
										</p>
										<p>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
											Consectetur, sunt.
										</p>
										<button type="submit" onClick={routeChange}>
											Buy Now
										</button>
									</motion.div>
								)}
							</motion.div>
						</div>
					</div>
					<div className="right">
						<div className="content">
							<motion.div
								className="box"
								transition={{ layout: { duration: 1.2, type: "spring" } }}
								layout
							>
								<motion.div className="img_box">
									<img src={images[6]} alt="project"></img>
								</motion.div>
								<p>mobile designing</p>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Work;
