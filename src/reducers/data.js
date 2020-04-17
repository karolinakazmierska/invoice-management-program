import { FETCH_INVOICES } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_INVOICES:
            console.log('REDUCER', action.payload)
            return action.payload;
        default:
            return state;
  }
};
