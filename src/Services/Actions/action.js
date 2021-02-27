import { ADD_TO_CART ,REMOVE_TO_CART} from '../constants';


const addToCart = (data) => {
    // console.log('action update',data);
    return {
        type:ADD_TO_CART,
        data:data
    }
}


export const removeToCart = (data) => {
    return {
        type:REMOVE_TO_CART,
        data:data
    }
}
export default addToCart;
