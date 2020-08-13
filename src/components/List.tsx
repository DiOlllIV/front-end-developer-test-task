import * as React from 'react';
import { itemsData, unit, currency } from '../store';

function List(props: any) {
  return (
    <ul className="cart-list">
      {
        itemsData.map((item: any) => {
          const itemClass = (props.id === item.id) ?
          "cart-list__item selected" : "cart-list__item";   

          return ( 
           <li className={itemClass}
               key={item.id} 
           >
             <label className="container">
               <input type="radio" name="unit"
                   onClick={() => props.handleSelect(item.price, item.type, item.id)}
               />
               <span className="checkmark"></span>
             </label>
             <span className="cart-list__item-type">
                 {item.type} {unit}
                 </span>
             <span className="cart-list__item-price">
                 {item.price} {currency}
                 </span>
           </li>
          );
        })
      }
    </ul>
  )
}

export default List;
