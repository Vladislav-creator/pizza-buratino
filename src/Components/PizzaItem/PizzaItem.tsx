import React from 'react';
import { Pizza } from '../Types/Pizza';
import css from './PizzaItem.module.css'
interface PizzaItemProps {
  pizza: Pizza;
}

const PizzaItem: React.FC<PizzaItemProps> = ({ pizza }) => {
  const hasWeightAndPrice = (weight: string, price: number) => weight !== '' && price !== 0;
  
  
  return (
      <div className={css.item} >
        <div className={css.containerImg}>
      <img src={pizza.img} alt={pizza.name} className={css.image} />
        <div className={css.overlay}>
          <p className={css.pizzaComposition} > {pizza.composition}</p>
        </div>
        </div>
      <h3 className={css.nameDishes}>{pizza.name}</h3>
      {/* <p>level:{pizza.level}</p>
      <p>id:{pizza.id}</p> */}
      <div className={css.weightAndPrice}>
      {hasWeightAndPrice(pizza["weight-small"], pizza["price-small"]) && (<div className={css.weightAndPriceButton}>
        <button><p>Маленька:</p> <p>{pizza["weight-small"]}</p></button> <p className={css.priceFromWeight}>{pizza["price-small"]} грн</p></div>
      )}
      {hasWeightAndPrice(pizza["weight-average"], pizza["price-average"]) && (<div className={css.weightAndPriceButton}>
        <button><p>Середня:</p> <p></p>{pizza["weight-average"]}<p></p></button>  <p className={css.priceFromWeight}>{pizza["price-average"]} грн</p></div>
      )}
      {hasWeightAndPrice(pizza["weight-big"], pizza["price-big"]) && (<div className={css.weightAndPriceButton}>
        <button><p>Велика:</p> <p>{pizza["weight-big"]} </p></button> <p className={css.priceFromWeight}>{pizza["price-big"]} грн</p></div>
      )}
      {hasWeightAndPrice(pizza["weight-mega"], pizza["price-mega"]) && (<div className={css.weightAndPriceButton}>
        <button><p>Meгa: </p> <p>{pizza["weight-mega"]} </p></button><p className={css.priceFromWeight}>{pizza["price-mega"]} грн</p></div>
      )}
      
      {!hasWeightAndPrice(pizza["weight-small"], pizza["price-small"]) &&
      !hasWeightAndPrice(pizza["weight-average"], pizza["price-average"]) &&
      !hasWeightAndPrice(pizza["weight-big"], pizza["price-big"]) &&
      !hasWeightAndPrice(pizza["weight-mega"], pizza["price-mega"]) && (
        <p>{pizza.weight} - {pizza.price} грн</p>
      )}
      </div>
      <div className={css.containerForButtonToOrder}>
      <button className={css.toOrder}>Замовити</button>
      </div>
    </div>
  );
};

export default PizzaItem;