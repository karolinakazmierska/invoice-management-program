import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyASOdTO6t_AKbbKvcCl2tUHiNYu5wW446I",
    authDomain: "invoice-program.firebaseapp.com",
    databaseURL: "https://invoice-program.firebaseio.com",
    projectId: "invoice-program",
    storageBucket: "invoice-program.appspot.com",
    messagingSenderId: "738097600326"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const invoicesRef = databaseRef.child("invoices")
