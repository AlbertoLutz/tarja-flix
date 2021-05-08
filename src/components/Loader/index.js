import React from "react";

import { LoaderWrapper, Container } from "./styled";

import loadIcon from "../../assets/img/mascote.png";

const Loader = () => (
	<Container>
		<LoaderWrapper src={loadIcon} />
	</Container>
);

export default Loader;
