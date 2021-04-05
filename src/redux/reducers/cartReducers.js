import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        {
            name: "Lenovo Laptop",
            id : 1
        },
        {
            name: "Asus Laptop",
            id : 2
        },
        {
            name: "Hp Laptop",
            id : 3
        },
        {
            name: "Dell Laptop",
            id : 4
        },
        {
            name: "Toshiba Laptop",
            id : 5
        }
    ]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART :

        const newId = action.id;
        const newCart = [...state.cart,newId];

        return {
            ... state,
            cart: newCart
        }

        case REMOVE_FROM_CART :

        const id = action.id;
        const remainingCart = state.cart.filter( item => item !== id);

        return {
            ...state,
            cart: remainingCart
        }
        default:
        return state;
    }
} 

export default cartReducers;