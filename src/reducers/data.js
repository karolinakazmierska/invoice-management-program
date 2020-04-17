import { FETCH_INVOICES, FETCH_PRODUCTS } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_INVOICES:
            return Object.assign({}, state, {
                invoices: action.payload
            })
        case FETCH_PRODUCTS:
            return Object.assign({}, state, {
                products: action.payload
            })
        default:
            return state;
    }
};
