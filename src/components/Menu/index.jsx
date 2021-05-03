import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import Logo from "../../assets/img/logo.png";
import Button from "../Button";

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;
