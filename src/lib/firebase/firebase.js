// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { updateDoc } from 'firebase/firestore';


import {
    collection,
    doc,
    setDoc,
    getFirestore,
    getDoc,
    deleteDoc,
    getDocs,
    where,
    query
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWXqU6Rfr5Lf2n5lJwjDMOzyUXolXSdjk",
    authDomain: "smart-grow-2d13e.firebaseapp.com",
    projectId: "smart-grow-2d13e",
    storageBucket: "smart-grow-2d13e.firebasestorage.app",
    messagingSenderId: "231319057191",
    appId: "1:231319057191:web:9a092214b7ffa321a8af02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

async function addToPending(
    txnReference,
    firstName,
    lastName,
    email,
    phone,
    city,
    subCity,
) {
    await setDoc(doc(db, 'verified', txnReference), {
	txnReference: txnReference,
	firstName: firstName,
	lastName: lastName,
	email: email,
	phone:phone,
	city: city,
	subCity: subCity,
	completed: false,
    });
}

async function fetchAllOrders() {
    const pr = collection(db, 'verified');
    const q = query(pr);
    const querySnapshot = await getDocs(q);
    const AllProducts = [];
    querySnapshot.forEach((doc) => {
	AllProducts.push(doc.data());
    });
    return AllProducts;
}

async function fetchAllCompletedOrders() {
    const pr = collection(db, 'verified');
    const q = query(pr, where('completed', '==', true));
    const querySnapshot = await getDocs(q);
    const AllProducts = [];
    querySnapshot.forEach((doc) => {
	AllProducts.push(doc.data());
    });
    return AllProducts;
}

async function fetchAllIncompletedOrders() {
    const pr = collection(db, 'verified');
    const q = query(pr, where('completed', '==', false));
    const querySnapshot = await getDocs(q);
    const AllProducts = [];
    querySnapshot.forEach((doc) => {
	AllProducts.push(doc.data());
    });
    return AllProducts;
}

async function completeOrder(txnReference) {
    const docref = doc(db, 'verified', String(txnReference));
    await updateDoc(docref, {
	completed: true
    });
}
async function uncompleteOrder(txnReference) {
    const docref = doc(db, 'verified', String(txnReference));
    await updateDoc(docref, {
	completed: false
    });
}

async function deleteVerified(productID) {
    await deleteDoc(doc(db, 'verified', String(productID)));
}

export const FireFunc = {
    addToPending, //void
    fetchAllOrders,
    fetchAllCompletedOrders,
    fetchAllIncompletedOrders,
    completeOrder,
    uncompleteOrder,
    deleteVerified
};
