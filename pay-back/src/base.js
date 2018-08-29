import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmP_6wXF077PfHLXCnssqFao4vbp7uTkI",
    authDomain: "payback-c35b9.firebaseapp.com",
    databaseURL: "https://payback-c35b9.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;

