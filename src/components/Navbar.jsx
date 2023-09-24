import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-logo">
          <img
            src="../public/react.svg"
            className="nav-logo logo"
            alt="logo react"
          />
          <h3>Introducción a React</h3>
        </div>
        <ul className="nav-items">
          <li><Link to={"/"}>Principal</Link> </li>
          <li><Link to={"/acercade"}> Acerca de</Link></li>
          <li><Link to={"/contacto"}> Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
