import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDHNnJl7ap2MQoyH0F6eRVQSTZKiQ3COYw',
	authDomain: 'hwitter-4d7bc.firebaseapp.com',
	databaseURL: 'https://hwitter-4d7bc.firebaseio.com',
	projectId: 'hwitter-4d7bc',
	storageBucket: 'hwitter-4d7bc.appspot.com',
	messagingSenderId: '444271188546',
	appId: '1:444271188546:web:33d08f4105b1284ba5ebdb'
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firebaseInstance = firebase;
