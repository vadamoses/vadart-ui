import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import siteImages from "../siteImages";
import artImages from "../artImages";
import Carousel from "../tools/carousel";

const Home = () => {
	let navigate = useNavigate();

	const handleSubmit = () => {
		let path = `/work`;
		navigate(path);
	};
	return (
		<>
			<div className="home">
				<div className="home_container">
					<div className="intro">
						<img className="into-image" src={artImages[2]} alt="Artpiece" />
						{/* <p>
							{" "}
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
						</p>
						<button
							name="submit-btn"
							id="submit"
							type="submit"
							onClick={() => handleSubmit()}
						>
							View our Pieces
						</button> */}
					</div>
					<div className="image_container">
						<img className="image" src={artImages[1]} alt="Artpiece" />
					</div>
					<div className="text_section">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur labore nobis architecto consequatur? Sit eveniet
						iure adipisci hic temporibus ipsa obcaecati earum distinctio,
						cupiditate, incidunt neque, inventore commodi qui et modi.
						Corrupti eum ipsa voluptatum velit officia deserunt sit eveniet
						perspiciatis blanditiis eius qui, itaque aliquam eligendi
						inventore fugiat non voluptas accusantium. Natus nemo dolor
						laboriosam at illo optio in doloremque voluptatum unde est
						recusandae quidem sequi, eum sunt, iure adipisci iste
						consequuntur sapiente consequatur culpa neque sit ab! Iure odit,
						rem dolore dolor quos eveniet soluta itaque explicabo ea at non
						libero aliquam corrupti impedit sed exercitationem facere
						similique.
					</div>
					<div className="image_container_rev">
						<img className="image_rev" src={artImages[3]} alt="Artpiece" />
					</div>
					<div className="text_section_rev">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
						maxime magnam id eaque. Eligendi inventore fugit accusantium
						consequuntur velit commodi tenetur ipsam, nesciunt illo ea,
						adipisci possimus pariatur sed voluptates ex dolore non. Cum
						suscipit nesciunt, harum maiores error perspiciatis? Et facere
						alias, maiores earum quod neque ipsa nesciunt amet consequuntur
						eligendi repudiandae, minima nostrum deserunt facilis vel?
						Perferendis, porro soluta enim a, voluptatum laboriosam cumque
						cum atque nam doloremque dolores dolor possimus eius recusandae
						dolore. Maiores culpa ducimus, dignissimos asperiores cupiditate
						officia eligendi amet debitis molestiae rerum neque odio earum
						maxime exercitationem pariatur et. Magni omnis quis vero
						exercitationem.
					</div>
				</div>
			</div>
			<Carousel />
		</>
	);
};

export default Home;
