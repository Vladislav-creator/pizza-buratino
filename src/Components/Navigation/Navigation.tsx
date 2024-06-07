
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Components/Redux/store';
import css from './Navigation.module.css';
import BasketIcon from '../Images/basket';
import GrnIcon from '../../Components/Images/grn';

const Navigation: React.FC = () => {
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <div className={css.headerAll}>
      <ul className={css.header}>
        <li><NavLink className="header-link" to="/">Головна</NavLink></li>
        <li><NavLink className="header-link" to="/about">Про нас</NavLink></li>
        <li><NavLink className="header-link" to="/contact">Контакти</NavLink></li>
      </ul>
      <div className={css.basketIconDiv}>
        <BasketIcon className={css.basketIcon} width={50} height={50} />
        <p className={css.money}>{totalAmount}<GrnIcon width={18} height={18} /></p>
        
      </div>
    </div>
  );
};

export default Navigation;