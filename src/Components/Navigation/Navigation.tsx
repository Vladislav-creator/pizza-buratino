import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import mySVG from '../../Components/Images/Buratino_Layer 2.svg';
const Navigation: React.FC = () => {
    return (
        <nav className={css.headerNav}>
            <img className={css.logo} width="160px"
   height="auto" src={mySVG} alt="Description" />
            <ul className={css.header}>
                <li><NavLink className="header-link" to="/">Home</NavLink></li>
                <li><NavLink className="header-link" to="/about">About</NavLink></li>
                <li><NavLink className="header-link" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;