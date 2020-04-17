import {invoicesRef} from '../firebase'
const FETCH_INVOICES = 'FETCH_INVOICES';

// export const addInvoice = newInvoice => async dispatch => {
//     invoicesRef.push().set(newInvoice);
// };
export const fetchInvoices = () => async dispatch => {
    invoicesRef.on("value", snapshot => {
        console.log('ACTIONS INDEX:', snapshot.val())
        dispatch({
            type: FETCH_INVOICES,
            payload: snapshot.val()
        });
    });
};
