import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// });

// database.ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e)
// 	});

// database.ref('user').set({
//     name: 'Gina Kui',
//     age: 26,
//     isSingle: true,
//     location: {
//         city: 'Toronto',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref('attributes').set({
//     height: 170,
//     weight: 110
// });

// database.ref('isSingle').remove()
// .then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Did not remove the data', e);
// });

