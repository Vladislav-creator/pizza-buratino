import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/store';
import BasketIcon from '../Images/basket';
import GrnIcon from '../Images/grn';
import css from './Basket.module.css';
import { incrementQuantity, decrementQuantity } from '../Redux/cartSlice';

const BasketModal: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
    const [showModal, setShowModal] = useState(false);
  
    const toggleModal = () => {
      setShowModal(!showModal);
    };
  
    return (
      <div>
        <div className={css.basketIconDiv} onClick={toggleModal}>
          <BasketIcon className={css.basketIcon} width={35} height={35} />
          <p className={css.money}>{totalAmount}<GrnIcon width={14} height={14} /></p>
        </div>
        
        {showModal && (
          <div className={css.modal}>
            <div className={css.modalContent}>
              <button className={css.closeButton} onClick={toggleModal}>← Назад</button>
              <h2>Корзина</h2>
              {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
              ) : (
                cartItems
  .filter(item => item.quantity > 0) // Фильтруем только элементы с количеством больше 0
  .map((item) => (
    <div key={item.id} className={css.cartItem}>
      <p>{item.name} - {item.weight}</p>
      <div className={css.quantityControl}>
        <button className={css.quantityButton} onClick={() => dispatch(decrementQuantity(item))}>-</button>
        <p>{item.quantity}</p>
        <button className={css.quantityButton} onClick={() => dispatch(incrementQuantity(item))}>+</button>
      </div>
      <p>{item.price} грн</p>
      <p>Всього: {item.totalPrice} грн</p>
    </div>
  ))
              )}
              <hr />
              <div className={css.totalAmount}>
                <p>Сума до оплати: {totalAmount} грн</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default BasketModal;