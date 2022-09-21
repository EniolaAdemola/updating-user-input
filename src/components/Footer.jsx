import React from "react";
import { footerSocials } from "../components/data";

const Footer = () => {
	return (
		<footer>
			<div className="footer__copyright">
				<small>&copy; Eniola Ademola. All right reserved</small>
			</div>
			<div>
				{footerSocials.map(({ id, link, icon }) => {
					return (
						<a href={link} key={id} className="footer__socials">
							{icon}
						</a>
					);
				})}
			</div>
		</footer>
	);
};

export default Footer;
