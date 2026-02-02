import "./Header.css";
import logo from "../../assets/logo-city-free.png";
import homeIcon from "../../assets/icono-inicio.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="City Tree" className="logo" />
        <h1>City Tree</h1>
        <p>Plataforma de gestion de arbolado urbano </p>
      </div>

      <button className="home-button btn-3d">
        <img src={homeIcon} alt="Inicio" />
      </button>
    </header>
  );
}
