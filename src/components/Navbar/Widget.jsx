import React from 'react';
import './Widget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RiShoppingCartFill} from 'react-icons/ri';


function Widget() {
    return (
        <div>
            <li className="nav-item">
              <a className="nav-link texto" href="/#">
                <RiShoppingCartFill />
              </a>
            </li>
        </div>
    )
}

export default Widget