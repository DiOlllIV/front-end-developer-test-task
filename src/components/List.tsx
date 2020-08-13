import * as React from 'react';
import { itemsData, unit, currency } from '../store';

function List(props: any) {
    return (
        <ul className="cart-list">
            {
                itemsData.map((item: any) => 
                    <li className="cart-list__item"
                        key={item.id} 
                    >
                        <label className="container">
                            <input type="radio" name="unit"
                                onClick={() => props.handleSelect(item.price)}
                            />
                            <span className="checkmark"></span>
                        </label>
                        <span className="cart-list__item-type">{item.type} {unit}</span>
                        <span className="cart-list__item-price">{item.price} {currency}</span>
                    </li>
                )
            }
        </ul>
    )
}

export default List;
