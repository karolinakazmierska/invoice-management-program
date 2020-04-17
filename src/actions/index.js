import {invoicesRef} from '../firebase';
import {productsRef} from '../firebase';
const FETCH_INVOICES = 'FETCH_INVOICES';
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const SAVE_INVOICE = 'SAVE_INVOICE';

export const saveInvoice = (newInvoice) => async dispatch => {
    invoicesRef.push().set(newInvoice);
};
export const fetchInvoices = () => async dispatch => {
    invoicesRef.on("value", snapshot => {
        console.log('ACTIONS INDEX:', snapshot.val())
        dispatch({
            type: FETCH_INVOICES,
            payload: snapshot.val()
        });
    });
};
export const fetchProducts = () => async dispatch => {
    productsRef.on("value", snapshot => {
        dispatch({
            type: FETCH_PRODUCTS,
            payload: snapshot.val()
        });
    });
};
