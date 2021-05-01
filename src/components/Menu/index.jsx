import React from "react";
import "./Menu.css";
import Logo from "../../assets/img/logo.png";
import Button from "../Button";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="" />
      </a>

      <Button as="a" className="ButtonLink" href="">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;
