import React, { useContext } from 'react';
import CartItem from './CartItem';
import AppContext from '../utils/AppContext';
import { CLEAR_CART } from '../utils/actions';
import getTotalPrice from '../utils/getTotalPrice';

const CartContainer = ()=>{
    const { cart, dispatch } = useContext(AppContext);
    const cartArray = Array.from(cart);
    const clearCart = ()=>{
        dispatch({type: CLEAR_CART});
    }

    if(cartArray.length === 0){
        return (
            <section className="cart">
                <header>
                    <h2>Your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className="cart">
            {/* Cart header */}
            <header>
                <h2>Your Bag</h2>
            </header>
            {/* Cart items */}
            <div>
                {cartArray.map((el)=> {
                    const [id, item] = el;
                    return <CartItem  key={id} cartInfo={item} />
                })}
            </div>

            {/* Cart footer */}
            <footer>
                <hr />
                <div>
                    <h5 className="cart-total">
                        total <span>${getTotalPrice(cartArray)}
                        </span>
                    </h5>
                </div>
                <button className="btn btn-hipster" 
                onClick={clearCart}>
                    Clear cart
                </button>
            </footer>
        </section>
    )
}

export default CartContainer;