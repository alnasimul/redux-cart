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
        const newItem = {
            productId: action.id,
            name: action.name,
            cartId: state.cart.length + 1
        }
        const newCart = [...state.cart,newItem];

        console.log(action);
        console.log(newCart)

        return {
            ... state,
            cart: newCart
        }

        case REMOVE_FROM_CART :
        console.log(action);
        const cartId = action.cartId;
        const remainingCart = state.cart.filter( item=> item.cartId !== cartId);

        return {
            ...state,
            cart: remainingCart
        }
        default:
        return state;
    }
} 

export default cartReducers;