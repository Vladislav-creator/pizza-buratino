import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation: React.FC = () => {
    return (
        <nav className={css.headerNav}>
            
            <ul className={css.header}>
                <li><NavLink className="header-link" to="/">Головна</NavLink></li>
                <li><NavLink className="header-link" to="/about">Про нас</NavLink></li>
                <li><NavLink className="header-link" to="/contact">Контакти</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;