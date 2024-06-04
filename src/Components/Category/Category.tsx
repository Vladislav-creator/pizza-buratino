import React from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import { Pizza } from '../Types/Pizza';
import css from './Category.module.css'
interface CategoryProps {
  category: string;
  pizzas: Pizza[];
  
}

const Category: React.FC<CategoryProps> = ({ category, pizzas }) => {
  return (
    <div>
      <h2 className={css.subTitle}>{category}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Category;