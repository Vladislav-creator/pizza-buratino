import React from 'react';
import { Pizza } from '../Types/Pizza';

interface PizzaItemProps {
  pizza: Pizza;
}

const PizzaItem: React.FC<PizzaItemProps> = ({ pizza }) => {
  const hasWeightAndPrice = (weight: string, price: number) => weight !== '' && price !== 0;

  return (
    <div style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: 'calc(33% - 20px)' }}>
      <img src={pizza.img} alt={pizza.name} style={{ width: '100%' }} />
      <p>{pizza.name}</p>
      <p>level:{pizza.level}</p>
      <p>id:{pizza.id}</p>
      {hasWeightAndPrice(pizza["weight-small"], pizza["price-small"]) && (
        <p>Small: {pizza["weight-small"]} - {pizza["price-small"]} грн</p>
      )}
      {hasWeightAndPrice(pizza["weight-average"], pizza["price-average"]) && (
        <p>Average: {pizza["weight-average"]} - {pizza["price-average"]} грн</p>
      )}
      {hasWeightAndPrice(pizza["weight-big"], pizza["price-big"]) && (
        <p>Big: {pizza["weight-big"]} - {pizza["price-big"]} грн</p>
      )}
      {hasWeightAndPrice(pizza["weight-mega"], pizza["price-mega"]) && (
        <p>Mega: {pizza["weight-mega"]} - {pizza["price-mega"]} грн</p>
      )}
      {!hasWeightAndPrice(pizza["weight-small"], pizza["price-small"]) &&
      !hasWeightAndPrice(pizza["weight-average"], pizza["price-average"]) &&
      !hasWeightAndPrice(pizza["weight-big"], pizza["price-big"]) &&
      !hasWeightAndPrice(pizza["weight-mega"], pizza["price-mega"]) && (
        <p>{pizza.weight} - {pizza.price} грн</p>
      )}
    </div>
  );
};

export default PizzaItem;