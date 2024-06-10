// import React, { useState } from 'react';
// import BurgerMenu from '../Images/burgerMenu';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItemToCart, selectCartTotal, incrementQuantity, decrementQuantity } from '../Redux/cartSlice';
// import { Pizza } from '../Types/Pizza';
// import css from './PizzaItem.module.css';
// import GrnIcon from '../../Components/Images/grn';
// import { RootState } from '../Redux/store';



// interface PizzaItemProps {
//   pizza: Pizza;
// }

// const PizzaItem: React.FC<PizzaItemProps> = ({ pizza }) => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: RootState) => state.cart.items);
  
//   const initialSelectedWeight = pizza["weight-small"] !== '' ? 'weight-small' : 'weight';
//   const [selectedWeight, setSelectedWeight] = useState(initialSelectedWeight);
//   const filteredItems = cartItems.filter(item => item.name === pizza.name);
  
  
  
//   const totalQuantity = filteredItems.reduce((total, item) => total + item.quantity, 0);

//   const [showMessage, setShowMessage] = useState(false);
//   const [itemMessage, setItemMessage] = useState<JSX.Element | null>(null);
//   const [showOrderDetails, setShowOrderDetails] = useState(false);
  
  
//   const totalAmount = useSelector((state: RootState) => selectCartTotal(state));

//   const hasWeightAndPrice = (weight: string, price: number) => weight !== '' && price !== 0;

//   const handleOrderClick = () => {
//     const itemPrice = pizza[selectedWeight.replace('weight', 'price') as keyof Pizza] as number;

//     dispatch(addItemToCart({
//       id: pizza.id + selectedWeight,
//       name: pizza.name,
//       weight: selectedWeight,
//       price: itemPrice,
//       weight-number: pizza.selectedWeight
//     }));

//     const weightText = getWeightText(selectedWeight);
//     const message = (
//       <div>
//         <p>Ви додали:</p>
//         <p> {weightText} '{pizza.name}' - {itemPrice} <GrnIcon width={11} height={11} /></p>
//         <p>Сума вашого замовлення: {totalAmount + itemPrice} <GrnIcon width={11} height={11} /></p>
//       </div>
//     );

//     setItemMessage(message);
//     setShowMessage(true);
//     setTimeout(() => setShowMessage(false), 8000);
//   };

//   const getWeightText = (weight: string) => {
//     switch(weight) {
//       case 'weight-small': return 'маленьку';
//       case 'weight-average': return 'середню';
//       case 'weight-big': return 'велику';
//       case 'weight-mega': return 'мега';
//       case 'weight': return '';
//       default: return '';
//     }
//   };

//   const toggleOrderDetails = () => {
//     setShowOrderDetails(!showOrderDetails);
//   };
  
//   return (
//     <div className={css.item}>
//       <div className={css.containerImg}>
//         <img src={pizza.img} alt={pizza.name} className={css.image} />
//         <div className={css.overlay}>
//           <p className={css.pizzaComposition}>{pizza.composition}</p>
//         </div>
//       </div>
//       <h3 className={css.nameDishes}>{pizza.name}</h3>
//       <div className={css.weightAndPrice}>
//         {hasWeightAndPrice(pizza["weight-small"], pizza["price-small"]) && (
//           <div className={css.weightAndPriceButton}>
//             <button className={selectedWeight === 'weight-small' ? css.active : ''} onClick={() => setSelectedWeight('weight-small')}>
//               <p>маленька:</p> <p>{pizza["weight-small"]}</p>
//             </button>
//             <p className={css.priceFromWeight}>{pizza["price-small"]} <GrnIcon width={11} height={11} /></p>
//           </div>
//         )}
//          {hasWeightAndPrice(pizza["weight-average"], pizza["price-average"]) && (
//           <div className={css.weightAndPriceButton}>
//             <button className={selectedWeight === 'weight-average' ? css.active : ''} onClick={() => setSelectedWeight('weight-average')}>
//               <p>середня:</p> <p>{pizza["weight-average"]}</p>
//             </button>
//             <p className={css.priceFromWeight}>{pizza["price-average"]} <GrnIcon width={11} height={11} /></p>
//           </div>
//         )}
//         {hasWeightAndPrice(pizza["weight-big"], pizza["price-big"]) && (
//           <div className={css.weightAndPriceButton}>
//             <button className={selectedWeight === 'weight-big' ? css.active : ''} onClick={() => setSelectedWeight('weight-big')}>
//               <p>велика:</p> <p>{pizza["weight-big"]}</p>
//             </button>
//             <p className={css.priceFromWeight}>{pizza["price-big"]} <GrnIcon width={11} height={11} /></p>
//           </div>
//         )}
//         {hasWeightAndPrice(pizza["weight-mega"], pizza["price-mega"]) && (
//           <div className={css.weightAndPriceButton}>
//             <button className={selectedWeight === 'weight-mega' ? css.active : ''} onClick={() => setSelectedWeight('weight-mega')}>
//               <p>мeгa:</p> <p>{pizza["weight-mega"]}</p>
//             </button>
//             <p className={css.priceFromWeight}>{pizza["price-mega"]} <GrnIcon width={11} height={11} /></p>
//           </div>
//         )}
//         {hasWeightAndPrice(pizza["weight"], pizza["price"]) && (
//           <div className={css.weightAndPriceButton}>
//             <button className={selectedWeight === 'weight' ? css.active : ''} onClick={() => setSelectedWeight('weight')}>
//               <p>вага:</p> <p>{pizza["weight"]}</p>
//             </button>
//             <p className={css.priceFromWeight}>{pizza["price"]} <GrnIcon width={11} height={11} /></p>
//           </div>
//         )}

//       </div>
//       <div className={css.containerForButtonToOrder}>
//         <button className={css.toOrder} onClick={handleOrderClick}>Замовити</button>
//         {filteredItems.length > 0 && (
//           <button className={css.burgerButton} onClick={toggleOrderDetails}><BurgerMenu width={18} height={18}/></button>
//         )}
//       </div>
//       {showMessage && (
//         <div className={css.message}>
//           {itemMessage}
//         </div>
//       )}
//       {showOrderDetails && filteredItems.length > 0 && (
//         <div className={css.showOrderDetails}>
//           <p>Ви додали:</p>
//           <div className={css.imageGrid}>
//             {filteredItems.map((item) => (
//               <div key={item.id} className={css.cartItem}>
//                 <p>{item.name} - {getWeightText(item.weight)}</p>
//                 <div className={css.quantityControl}>
//                   <button className={css.quantityButton} onClick={() => dispatch(decrementQuantity(item))}>-</button>
//                   <p>{item.quantity}</p>
//                   <button className={css.quantityButton} onClick={() => dispatch(incrementQuantity(item))}>+</button>
//                 </div>
//                 <p>{item.price} <GrnIcon width={11} height={11}/></p>
//                 <p>Всього: {item.totalPrice} <GrnIcon width={11} height={11}/></p>
//               </div>
//             ))}
//           </div>
//           <div className={css.totalAmount}>
//             <p>Сума до сплати: {totalAmount} <GrnIcon width={11} height={11}/></p>
//           </div>
//         </div>
//       )}
//       {totalQuantity > 0 && (
//         <div className={css.totalQuantity}>
//           <p>Загальна кількість: {totalQuantity}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PizzaItem;

import React, { useState } from 'react';
import BurgerMenu from '../Images/burgerMenu';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, selectCartTotal, incrementQuantity, decrementQuantity } from '../Redux/cartSlice';
import { Pizza } from '../Types/Pizza';
import css from './PizzaItem.module.css';
import GrnIcon from '../../Components/Images/grn';
import { RootState } from '../Redux/store';



interface PizzaItemProps {
  pizza: Pizza;
}
type WeightKey = 'weight-small' | 'weight-average' | 'weight-big' | 'weight-mega' | 'weight';
type PriceKey = 'price-small' | 'price-average' | 'price-big' | 'price-mega' | 'price';

const PizzaItem: React.FC<PizzaItemProps> = ({ pizza }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const initialSelectedWeight: WeightKey = pizza['weight-small'] !== '' ? 'weight-small' : 'weight';
  const [selectedWeight, setSelectedWeight] = useState<WeightKey>(initialSelectedWeight);

  const filteredItems = cartItems.filter(item => item.name === pizza.name);
  const totalQuantity = filteredItems.reduce((total, item) => total + item.quantity, 0);
  const [showMessage, setShowMessage] = useState(false);
  const [itemMessage, setItemMessage] = useState<JSX.Element | null>(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const totalAmount = useSelector((state: RootState) => selectCartTotal(state));

  const hasWeightAndPrice = (weight: string, price: number) => weight !== '' && price !== 0;

  const handleOrderClick = () => {
    const priceKey: PriceKey = selectedWeight.replace('weight', 'price') as PriceKey;
    const itemPrice = pizza[priceKey];
    const weightNumber = pizza[selectedWeight];

    dispatch(addItemToCart({
      id: pizza.id + selectedWeight,
      name: pizza.name,
      weight: selectedWeight,
      weightNumber: weightNumber,
      price: itemPrice,
    }));

    const weightText = getWeightText(selectedWeight);
    const message = (
      <div>
        <p>Ви додали:</p>
        <p>{weightText} '{pizza.name}' - {itemPrice} <GrnIcon width={11} height={11} /></p>
        <p>Сума вашого замовлення: {totalAmount + itemPrice} <GrnIcon width={11} height={11} /></p>
      </div>
    );

    setItemMessage(message);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 8000);
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

  const toggleOrderDetails = () => {
    setShowOrderDetails(!showOrderDetails);
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
        {filteredItems.length > 0 && (
          <button className={css.burgerButton} onClick={toggleOrderDetails}><BurgerMenu width={18} height={18}/></button>
        )}
      </div>
      {showMessage && (
        <div className={css.message}>
          {itemMessage}
        </div>
      )}
      {showOrderDetails && filteredItems.length > 0 && (
        <div className={css.showOrderDetails}>
          <p>Ви додали:</p>
          <div className={css.imageGrid}>
            {filteredItems.map((item) => (
              <div key={item.id} className={css.cartItem}>
                <p>{item.name} - {getWeightText(item.weight)} - {item.weightNumber}</p>
                <div className={css.quantityControl}>
                  <button className={css.quantityButton} onClick={() => dispatch(decrementQuantity(item))}>-</button>
                  <p>{item.quantity}</p>
                  <button className={css.quantityButton} onClick={() => dispatch(incrementQuantity(item))}>+</button>
                </div>
                <p>{item.price} <GrnIcon width={11} height={11}/></p>
                <p>Всього: {item.totalPrice} <GrnIcon width={11} height={11}/></p>
              </div>
            ))}
          </div>
          <div className={css.totalAmount}>
            <p>Сума до сплати: {totalAmount} <GrnIcon width={11} height={11}/></p>
          </div>
        </div>
      )}
      {totalQuantity > 0 && (
        <div className={css.totalQuantity}>
          <p>Загальна кількість: {totalQuantity}</p>
        </div>
      )}
    </div>
  );
};

export default PizzaItem;