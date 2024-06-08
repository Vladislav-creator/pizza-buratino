
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import BasketModal from '../BasketModal/BasketModal';

const Navigation: React.FC = () => {
  
  return (
    <div className={css.headerAll}>
      <ul className={css.header}>
        <li><NavLink className="header-link" to="/">Головна</NavLink></li>
        <li><NavLink className="header-link" to="/about">Про нас</NavLink></li>
        <li><NavLink className="header-link" to="/contact">Контакти</NavLink></li>
      </ul>
      <BasketModal/>
    </div>
  );
};

export default Navigation;