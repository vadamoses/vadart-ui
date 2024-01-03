import { React, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { motion } from "framer-motion";
import siteImages from "../siteImages";
import artImages from "../artImages";

const Home = () => {
	const boxRef = useRef(null);
	let navigate = useNavigate();

	const handleSubmit = () => {
		let path = `/work`;
		navigate(path);
	};
	return (
		<>
			<div className="home">
				<div className="intro">
					<img className="image" src={artImages[2]} alt="Artpiece" /> 
					<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione saepe totam suscipit dolor sed impedit ullam at blanditiis alias corporis, similique tempora ad voluptatum perspiciatis id dolore neque facilis non quisquam dolores ut modi in. Nihil, neque. Itaque ex voluptatem et repudiandae dolorum dignissimos eum voluptas, dicta cupiditate beatae repellat. </p>
						<button
							name="submit-btn"
							id="submit"
							type="submit"
							onClick={() => handleSubmit()}
						>
							View our Pieces
						</button>
				</div>
				</div>
				<div className="main_container">
					<div className="image_container">
					<img className="image" src={artImages[1]} alt="Artpiece" />
					</div>
					<div className="text_section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur labore nobis architecto consequatur? Sit eveniet iure adipisci hic temporibus ipsa obcaecati earum distinctio, cupiditate, incidunt neque, inventore commodi qui et modi. Corrupti eum ipsa voluptatum velit officia deserunt sit eveniet perspiciatis blanditiis eius qui, itaque aliquam eligendi inventore fugiat non voluptas accusantium. Natus nemo dolor laboriosam at illo optio in doloremque voluptatum unde est recusandae quidem sequi, eum sunt, iure adipisci iste consequuntur sapiente consequatur culpa neque sit ab! Iure odit, rem dolore dolor quos eveniet soluta itaque explicabo ea at non libero aliquam corrupti impedit sed exercitationem facere similique.</div>
					<div className="image_container_rev">
					<img className="image_rev" src={artImages[0]} alt="Artpiece" />
					</div>
					<div className="text_section_rev">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime magnam id eaque. Eligendi inventore fugit accusantium consequuntur velit commodi tenetur ipsam, nesciunt illo ea, adipisci possimus pariatur sed voluptates ex dolore non. Cum suscipit nesciunt, harum maiores error perspiciatis? Et facere alias, maiores earum quod neque ipsa nesciunt amet consequuntur eligendi repudiandae, minima nostrum deserunt facilis vel? Perferendis, porro soluta enim a, voluptatum laboriosam cumque cum atque nam doloremque dolores dolor possimus eius recusandae dolore. Maiores culpa ducimus, dignissimos asperiores cupiditate officia eligendi amet debitis molestiae rerum neque odio earum maxime exercitationem pariatur et. Magni omnis quis vero exercitationem.</div>
					

					{/* <div className="carousel_container" ref={boxRef}>
					<div className="carousel_top_box">
					<p>featured pieces</p>
					</div>
					<motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
					<motion.div
					className="inner_carousel"
					drag="x"
					dragConstraints={boxRef}
					>
					{siteImages.map((image, index) => {
						return (
							<motion.div className="item" key={index}>
							<img src={image} alt="Artpiece" />
							</motion.div>
							);
						})}
						</motion.div>
						</motion.div>
					</div> */}
				</div>
		</>
	);
};

export default Home;
