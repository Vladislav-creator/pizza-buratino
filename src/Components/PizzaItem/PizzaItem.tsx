import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, selectCartTotal } from '../Redux/cartSlice';
import { Pizza } from '../Types/Pizza';
import css from './PizzaItem.module.css';
import GrnIcon from '../../Components/Images/grn';
import { RootState } from '../Redux/store';

interface PizzaItemProps {
  pizza: Pizza;
}

const PizzaItem: React.FC<PizzaItemProps> = ({ pizza }) => {
  const initialSelectedWeight = pizza["weight-small"] !== '' ? 'weight-small' : 'weight';
  const [selectedWeight, setSelectedWeight] = useState(initialSelectedWeight);
  const [showMessage, setShowMessage] = useState(false);
  const [itemMessage, setItemMessage] = useState<JSX.Element | null>(null);
  const dispatch = useDispatch();
  const totalAmount = useSelector((state: RootState) => selectCartTotal(state));

  const hasWeightAndPrice = (weight: string, price: number) => weight !== '' && price !== 0;

  const handleOrderClick = () => {
    const itemPrice = pizza[selectedWeight.replace('weight', 'price') as keyof Pizza] as number;

    dispatch(addItemToCart({
      id: pizza.id,
      name: pizza.name,
      weight: selectedWeight,
      price: itemPrice,
    }));

    const weightText = getWeightText(selectedWeight);
    const message = (
      <div>
        <p>Ви добавили:</p>
        <p> {weightText} '{pizza.name}' - {itemPrice} <GrnIcon width={11} height={11} /></p>
        <p>Сума вашого замовлення: {totalAmount + itemPrice} <GrnIcon width={11} height={11} /></p>
      </div>
    );
    setItemMessage(message);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 10000);
  };

  const getWeightText = (weight: string) => {
    switch(weight) {
      case 'weight-small': return 'маленьку';
      case 'weight-average': return 'середню';
      case 'weight-big': return 'велику';
      case 'weight-mega': return 'мега';
      case 'weight': return '';
      default: return '';
    }
  };

  return (
    <div className={css.item}>
      <div className={css.containerImg}>
        <img src={pizza.img} alt={pizza.name} className={css.image} />
        <div className={css.overlay}>
          <p className={css.pizzaComposition}>{pizza.composition}</p>
        </div>
      </div>
      <h3 className={css.nameDishes}>{pizza.name}</h3>
      <div className={css.weightAndPrice}>
        {hasWeightAndPrice(pizza["weight-small"], pizza["price-small"]) && (
          <div className={css.weightAndPriceButton}>
            <button className={selectedWeight === 'weight-small' ? css.active : ''} onClick={() => setSelectedWeight('weight-small')}>
              <p>маленька:</p> <p>{pizza["weight-small"]}</p>
            </button>
            <p className={css.priceFromWeight}>{pizza["price-small"]} <GrnIcon width={11} height={11} /></p>
          </div>
        )}
        {hasWeightAndPrice(pizza["weight-average"], pizza["price-average"]) && (
          <div className={css.weightAndPriceButton}>
            <button className={selectedWeight === 'weight-average' ? css.active : ''} onClick={() => setSelectedWeight('weight-average')}>
              <p>середня:</p> <p>{pizza["weight-average"]}</p>
            </button>
            <p className={css.priceFromWeight}>{pizza["price-average"]} <GrnIcon width={11} height={11} /></p>
          </div>
        )}
        {hasWeightAndPrice(pizza["weight-big"], pizza["price-big"]) && (
          <div className={css.weightAndPriceButton}>
            <button className={selectedWeight === 'weight-big' ? css.active : ''} onClick={() => setSelectedWeight('weight-big')}>
              <p>велика:</p> <p>{pizza["weight-big"]}</p>
            </button>
            <p className={css.priceFromWeight}>{pizza["price-big"]} <GrnIcon width={11} height={11} /></p>
          </div>
        )}
        {hasWeightAndPrice(pizza["weight-mega"], pizza["price-mega"]) && (
          <div className={css.weightAndPriceButton}>
            <button className={selectedWeight === 'weight-mega' ? css.active : ''} onClick={() => setSelectedWeight('weight-mega')}>
              <p>мeгa:</p> <p>{pizza["weight-mega"]}</p>
            </button>
            <p className={css.priceFromWeight}>{pizza["price-mega"]} <GrnIcon width={11} height={11} /></p>
          </div>
        )}
        {hasWeightAndPrice(pizza["weight"], pizza["price"]) && (
          <div className={css.weightAndPriceButton}>
            <button className={selectedWeight === 'weight' ? css.active : ''} onClick={() => setSelectedWeight('weight')}>
              <p>вага:</p> <p>{pizza["weight"]}</p>
            </button>
            <p className={css.priceFromWeight}>{pizza["price"]} <GrnIcon width={11} height={11} /></p>
          </div>
        )}

      </div>
      <div className={css.containerForButtonToOrder}>
        <button className={css.toOrder} onClick={handleOrderClick}>Замовити</button>
      </div>
      {showMessage && (
        <div className={css.message}>
          {itemMessage}
        </div>
      )}
    </div>
  );
};

export default PizzaItem;