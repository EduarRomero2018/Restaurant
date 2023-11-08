import React from "react";
import Logo from "../Images/mi_logo.png";

// importamos navlink para enlazar las paginas con los componentes
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <header>
                    <img src={Logo} alt="Logo Restaurant" className="img-fluid" />
                </header>
                <a className="navbar-brand" href="#">Restaurant</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-white">
                        <NavLink to="/" className="nav-link">Inicio</NavLink>
                        <NavLink to="./Login" className="nav-link">Reservar</NavLink>
                        <NavLink to="./QuienesSomos" className="nav-link">Quienes Somos</NavLink>
                        <NavLink to="./MyOrders" className="nav-link">Ver Reservas</NavLink>
                        <NavLink to="./Menu" className="nav-link">Menú</NavLink>

                    </ul>
                </div>
            </div>
        </nav>

    );
};
export default Navbar