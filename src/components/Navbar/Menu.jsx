import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Widget from "./Widget";
import { Link } from "react-router-dom";
//import Cart from "../Cart/cart";

function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light capaArriba">
        <div className="app">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-success" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-success" to="/categoria/Origen">
                Origen{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-success" to="/categoria/Transitar">
                Transitar{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-success" to="/categoria/Lucida">
                Lucida{" "}
              </Link>
            </li>
            <Link className="nav-link text-success" to='/cart'>
              <Widget />
            </Link>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;