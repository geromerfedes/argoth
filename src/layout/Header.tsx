import { motion } from "framer-motion";
import logoArgoth from "../assets/images/domain/logo.png";

const Header = () => {
  return (
    <aside id="aside_argoth" className="aside">
      <nav className="navbar">
        <ul className="menu">
          <li className="item">
            <a href="#home">Inicio</a>
          </li>
          <li className="item">
            <a href="#project">Proyecto</a>
          </li>
          <li className="item">
            <a href="#gallery">Galería</a>
          </li>
          <li className="logo">
            <img src={logoArgoth} alt="Logo Argoth" />
          </li>
          <li className="item">
            <a href="#units">Unidades</a>
          </li>
          <li className="item">
            <a href="#press">Prensa</a>
          </li>
          <li className="item">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Header