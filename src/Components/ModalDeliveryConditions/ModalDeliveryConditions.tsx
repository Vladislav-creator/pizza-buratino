import React, { useEffect } from 'react';
import css from './ModalDeliveryConditions.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={css.modalBackdrop} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}></button>
        <div className={css.titleModalContent}><h2>Умови доставки <span className={css.spanPizzaBuratino}>Піца Буратіно</span></h2></div>
        <div className={css.textModalContent}>
        <p>Область доставки – Весь Київ</p>
        <p>Вартість доставки – безкоштовно від 600 грн, від 200 до 599 грн доставка 40 грн.</p>
        <p>Час роботи:</p>
        <p>ПН-НД – з 10:00 до 22:00</p>
        <p>Мінімальна сума замовлення – 200 грн</p>
        <hr />
        <p>Акції та знижки між собою не сумуються!</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;