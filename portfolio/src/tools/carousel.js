import { React, useRef } from "react";
import { motion } from "framer-motion";
import artImages from "../artImages";
import "./carousel.css";

const Carousel = () => {
	const boxRef = useRef(null);

	return (
		<>
			<div className="first_container">
				<div className="carousel_container" ref={boxRef}>
					<div className="carousel_top_box">
						<p>scroll through our pieces</p>
					</div>
					<motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
						<motion.div
							className="inner_carousel"
							drag="x"
							dragConstraints={boxRef}
						>
							{artImages.map((image, index) => {
								return (
									<motion.div className="item" key={index}>
										<img src={image} alt="Artpiece" />
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Carousel;
