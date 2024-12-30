// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage';
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
const db = getFirestore(app);
const storage = getStorage(app);

async function addProduct(productID, name, source, price, description, category) {
    console.log(productID, name, source, price, description, category);
    await setDoc(doc(db, 'products', String(productID)), {
	productID: productID,
	name: name,
	source: source,
	price: price,
	description: description,
	category: category,
    });
}

async function deleteProduct(productID) {
    await deleteDoc(doc(db, 'products', String(productID)));
    await deleteImages(productID)
}

async function fetchSpecificProuct(productID) {
    const mydoc = await getDoc(doc(db, 'products', String(productID)));
    if (mydoc.exists()) {
	return mydoc.data();
    } else {
	return null;
    }
}

async function fetchAllProducts() {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const AllProducts = [];
    querySnapshot.forEach((doc) => {
	AllProducts.push(doc.data());
    });
    return AllProducts;
}

async function loginFunction(username, password) {
    const mydoc = await getDoc(doc(db, 'auth', 'admin'));
    const mydata = mydoc.data();
    if (username == mydata.username && password == mydata.password) {
	return true;
    } else {
	return false;
    }
}

async function changeAdminInformation(username, password) {
    await setDoc(doc(db, 'auth', 'admin'), {
	username: username,
	password: password
    });
}

async function updateProduct(productID, updatedData) {
    const documentRef = doc(db, 'products', String(productID));
    await updateDoc(documentRef, updatedData);
}

async function addToPending(
    txnReference,
    firstName,
    lastName,
    email,
    phone,
    city,
    subCity,
    description,
    order,
    price
) {
    await setDoc(doc(db, 'pending', txnReference), {
	txnReference: txnReference,
	firstName: firstName,
	lastName: lastName,
	email: email,
	phone:phone,
	city: city,
	subCity: subCity,
	description: description,
	order: order,
	price_Before_tax:price
    });
}

async function addImage(productID, img,count) {
    console.log("name count" ,count)
    const imageRef = ref(storage, String(productID) + '/' + count);
    const res = await uploadBytes(imageRef, img);
}

async function fetchImageForProduct(productID) {
    const imageListRef = ref(storage, String(productID) + '/');
    var URLLIST = [];
    const response = await listAll(imageListRef);

    await Promise.all(
	response.items.map(async (item) => {
	    const url = await getDownloadURL(item);
	    URLLIST.push(url);
	})
    );
    return URLLIST;
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

async function deleteVerified(productID) {
    await deleteDoc(doc(db, 'verified', String(productID)));
}

async function deleteImages(productID) {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, String(productID) + '/');

    const filesList = await listAll(desertRef);

    // Delete each file in the folder
    await Promise.all(filesList.items.map(async (item) => {
	await deleteObject(item);
    }));
}

export const FireFunc = {
    addProduct, //void
    deleteProduct, //void
    fetchSpecificProuct, //object
    fetchAllProducts, //array of objects
    loginFunction, //boolean
    changeAdminInformation, //void
    addToPending, //void
    addImage, //void
    fetchImageForProduct,
    updateProduct,
    fetchAllCompletedOrders,
    fetchAllIncompletedOrders,
    completeOrder,
    deleteVerified
};
