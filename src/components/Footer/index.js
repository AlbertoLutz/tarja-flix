import React from "react";
import { Link } from "react-router-dom";
import { FooterBase } from "./styled";

import Logo from "../../assets/img/logo.png";

function Footer() {
	return (
		<FooterBase>
			<Link to="/">
				<img src={Logo} width="100" alt="Logo do RangoFlix" />
			</Link>
			<p>Feito com ♥ para o Leitores Tarja Preta!</p>
		</FooterBase>
	);
}

export default Footer;
