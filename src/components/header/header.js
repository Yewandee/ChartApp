import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../header/header.css';
import 'bootstrap-icons/icons/toggle-off.svg';
import { createContext } from "react";
import ReactSwitch from "react-switch";
import { useDispatch } from 'react-redux';
import { setMode } from '../../redux/reducer';

export const ThemeContext = createContext(null);

const Header = () => {

    const dispatch = useDispatch()

    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                <div class="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class=";l-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href='#'><span class="navbar-toggler-icon"></span></a>

                            </li>
                        </ul>

                        <div className="switch">
                            <ReactSwitch onChange={() => dispatch(setMode())} />
                        </div>
                        <div >
                            <form class="d-flex  px-5">
                                <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                                <i class="bi bi-search"></i>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>

                </div>
            </nav>
        </div>

    )
}

export default Header;