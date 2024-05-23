import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
const Navigation: React.FC = () => {
    return (
        <nav>
            <ul className={css.header}>
                <li><NavLink className="header-link" to="/">Home</NavLink></li>
                <li><NavLink className="header-link" to="/about">About</NavLink></li>
                <li><NavLink className="header-link" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;