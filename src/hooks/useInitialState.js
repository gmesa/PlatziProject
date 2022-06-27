import { useState } from "react";
import InitialState from "../InitialState"


const useInitialState = ()=>{

    const [state, setState] = useState(InitialState);

    const addToCar = (payLoad) => {

        setState({
            ...state,
            cart: [...state.cart, payLoad]
        })
    }

    const removeFromCar = (payLoad) => {

        setState({
            ...state,
            cart: state.cart.filter(items=> items.id !== payLoad.id)
        })
    }

    const addToBuyer = (payLoad) => {
        setState({
            ...state,
            buyer: [...state.buyer, payLoad]
        })
    }

    const addNewOrder = (payLoad) => {
        setState({
            ...state,
            orders: [...state.orders, payLoad]
        })
    }

    return {

        addToCar, removeFromCar, state, addToBuyer, addNewOrder
    }

};

export default useInitialState;

