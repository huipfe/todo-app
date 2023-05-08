// Import the functions you need from the SDKs you need

import firebase from "firebase";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "N40XKAZkEMdY6zYWkZAfMQGFbW02",
    authDomain: "todo-app-2111e.firebaseapp.com",
    projectId: "todo-app-2111e",
    storageBucket: "todo-app-2111e.appspot.com",
    messagingSenderId: "476407362265",
    appId: "1:476407362265:web:7273aca2a48aaf3e0404c8",
    measurementId: "G-0H8MRF5ML9"
};

// Initialize Firebase
export default class Fire {
    constructor(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null);
            } else {
                firebase.auth().signInAnonymously().catch(error => {
                    callback(error);
                });
            }
        })
    }

    get ref() {
        return firebase.firestore().collection("lists");
    }

    getLists(callback) {
        let ref = this.ref.orderBy("name");
        this.unsubscribe = ref.onSnapshot(snapshot => {
            let lists = [];
            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() })
            });
            callback(lists);
        }, function (error) {
            callback(error);
        });
    }

    addList(list) {
        this.ref.add(list);
    }

    deleteList(list) {
        this.ref.doc(list.id).delete();
    }

    updateList(list) {
        this.ref.doc(list.id).update(list);
    }

    detach() {
        this.unsubscribe();
    }
}
