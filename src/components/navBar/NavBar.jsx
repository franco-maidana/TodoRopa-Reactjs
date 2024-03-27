import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde React Router

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TodoRopa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
              <Link className="nav-link" id="buttonProducts" to="/products">
                Productos
              </Link>
              <Link class="nav-link" id="buttonAgregar" to="/products/real">Agregar nuevo producto</Link>
              <Link class='nav-link' id="buttonOrders" to='/orders'>orders</Link>
              <Link class="nav-link" id="buttonRegister"  to="/users/register">Registro</Link>
              <Link class="nav-link" id="logeo" to="/users/login">Iniciar Session</Link>
              <Link class="nav-link" id="signOut"  to="#">Sign out</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
