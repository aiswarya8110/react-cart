import { CLEAR_CART, REMOVE, INCREASE, DECREASE, DISPLAY_ITEMS, LOADING } from './actions';

export const initialState = {
    cart: new Map(),
    loading: true
}

const reducer = (state, action)=>{
    const { type, payload } = action;

    if(type === CLEAR_CART){
        return {...state, cart: new Map()}
    }

    if(type === REMOVE){
        const newCart = new Map(state.cart);
        newCart.delete(payload.id);
        return {...state, cart: newCart}
    }

    if(type === INCREASE){
        const newCart = new Map(state.cart);
        newCart.get(payload.id).amount = newCart.get(payload.id).amount + 1;
        return {...state, cart: newCart}
    }

    if(type === DECREASE){
        const newCart = new Map(state.cart);
        if(state.cart.get(payload.id).amount < 2){
            newCart.delete(payload.id)

            return {...state, cart: newCart}
        }

        newCart.get(payload.id).amount = newCart.get(payload.id).amount - 1
        return {...state, cart: newCart}
    }

    if(type === DISPLAY_ITEMS){
        const newCart = new Map(payload.cart);
        return {...state, cart: newCart}
    }

    if(type === LOADING){
        return {...state, loading: false}
    }

    return {...state}
}

export default reducer;