import { invoicesRef } from '../firebase';
import { productsRef } from '../firebase';
const FETCH_INVOICES = 'FETCH_INVOICES';
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const saveInvoice = (newInvoice) => async dispatch => {
    invoicesRef.push().set(newInvoice);
};
export const deleteInvoice = (invoice) => async dispatch => {
    let query = invoicesRef.orderByChild("id").equalTo(invoice.id);
    query.once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            child.ref.remove();
        })
    })
};
export const fetchInvoices = () => async dispatch => {
    invoicesRef.on("value", snapshot => {
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
