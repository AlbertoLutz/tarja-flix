import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/img/logo.png";

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="" />
      </a>
      <p>
        Orgulhosamente criado para os amigos do <b>Leitores Tarja Preta</b>
      </p>
    </FooterBase>
  );
}

export default Footer;
