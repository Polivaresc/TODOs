import { initializeApp } from 'firebase/app';
import {
	getFirestore, collection, addDoc, getDocs, doc,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDLuz53eO3Ph-CovL8gtoTBfCeaHVTfur4',
	authDomain: 'todos-5fefa.firebaseapp.com',
	databaseURL: 'https://todos-5fefa-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'todos-5fefa',
	storageBucket: 'todos-5fefa.appspot.com',
	messagingSenderId: '793840066870',
	appId: '1:793840066870:web:f334f506f3dbf36f331397',
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export {
	firebaseApp, firestore, collection, addDoc, getDocs, doc,
};
