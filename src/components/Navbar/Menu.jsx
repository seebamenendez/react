import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Widget from "./Widget";
import { Link } from "react-router-dom";
//import Cart from "../Cart/cart";
import LogoArauca from "../../multimedia/logo.png";
import { useCartContext } from "../../components/CartContext/CartContext";
import Navbar from "react-bootstrap/Navbar"


function Menu() {
  const { cantidadItem } = useCartContext();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="app">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <a href="/">
              <img
                src={LogoArauca}
                alt="logo"
                width="240"
                height="120"
                class="d-inline-block align-text-top"
              />
            </a>
            <nav class="navbar navbar-expand-lg navbar-light">
              <li className="nav-item">
                <Link className="nav-link text-success" to="/">
                  Inicio
                </Link>
              </li>
              <Navbar.Collapse id="responsive-navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-success"
                    to="/categoria/Origen"
                  >
                    Coleción Origen{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-success"
                    to="/categoria/Transitar"
                  >
                    Coleción Transitar{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-success"
                    to="/categoria/Lucida"
                  >
                    Coleción Lucida{" "}
                  </Link>
                </li>
              </Navbar.Collapse>
              <Link className="nav-link text-success" to="/cart">
                <Widget />
                {cantidadItem() !== 0 && cantidadItem()}
              </Link>
            </nav>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;
