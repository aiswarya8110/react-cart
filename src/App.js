import React, { useReducer, useEffect } from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import AppContext from './utils/AppContext';
import reducer from './utils/reducer';
import { initialState } from './utils/reducer';
import { DISPLAY_ITEMS, LOADING } from './utils/actions';

const App = ()=>{
    const [ state, dispatch ] = useReducer(reducer, initialState);

    const fetchData = async()=>{
        try{
            const response = await fetch("https://course-api.com/react-useReducer-cart-project");
            const data = await response.json();

            const cart = data.map((item)=> [item.id, item]);

            dispatch({type: DISPLAY_ITEMS, payload: {cart}});
            dispatch({type: LOADING});
        }
        catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(state.loading){
        return <div className="loading" style={{marginTop: '5em'}}/>
    }

    return (
        <AppContext.Provider value={{...state, dispatch}}>
            <Navbar />
            <CartContainer />
        </AppContext.Provider>
    )
}

export default App;