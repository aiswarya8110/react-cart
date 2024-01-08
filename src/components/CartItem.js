import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';
import { REMOVE, INCREASE, DECREASE } from '../utils/actions';

const CartItem = ({ cartInfo })=>{
    const { dispatch } = useContext(AppContext);
    const { price, img, amount, title, id } = cartInfo;

    const decreaseCart = ()=>{
        dispatch({type: DECREASE, payload: {id}})
    }

    const increaseCart = ()=>{
        dispatch({type: INCREASE, payload: {id}});
    }

    const remove = ()=>{
        dispatch({type: REMOVE, payload: {id}});
    }

    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h5>{title}</h5>
                <span className="item-price">${price}</span>
                <button className="remove-btn" onClick={remove}>
                    remove
                </button>
            </div>

            <div>
                <button className="amount-btn" onClick={increaseCart}>
                <svg stroke='#645cff' fill="#645cff" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                </svg>
                </button>
                <span className="amount">
                    {amount}
                </span>
                <button className="amount-btn" onClick={decreaseCart}>
                <svg stroke='#645cff' fill="#645cff" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
                </button>
            </div>
        </article>
    )
}

export default CartItem;