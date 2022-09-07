import React from "react";
import { footerSocials } from "../components/data";

const Footer = () => {
	return (
		<footer>
			<a href="https://eniola-ademola.vercel.app" className="footer__logo">
				Code by 'DAVEWORLD'
			</a>
			<div className="footer__socials">
				{footerSocials.map(({ id, link, icon }) => {
					return (
						<a href={link} key={id}>
							{icon}
						</a>
					);
				})}
			</div>
			<div className="footer__copyright">
				<small>&copy; Eniola Ademola. All right reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
