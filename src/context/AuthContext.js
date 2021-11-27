import React, {useContext, useState, useEffect} from 'react'
import firebase from '@firebase/app-compat';
import { auth, database } from '../firebase'

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    function signin() {
        return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }

    function logout(){
        return auth.signOut();
    }


    // function updateName(name){
    //     return currentUser.updateName(name);
    // }

    function updateAge(Age){
        // return currentUser.updateAge(age);

        // var Age = document.getElementById('age').value;
        
        // var updates = {
        //     currentUser.uid.age = Age,
        // }

        // currentUser.child()

        // database.ref(`/profiles/${currentUser.uid}`).update(age);

        const updateRef = database.ref(`/profiles/${currentUser.uid}`);

        updateRef.update({
            age: Age,
        });

    }

    // function updateHeight(height){
    //     return currentUser.updateHeight(height);
    // }

    // function updateWeight(weight){
    //     return currentUser.updateWeight(weight);
    // }

    // function updateMobile(mobile){
    //     return currentUser.updateMobile(mobile);
    // }

    // function updateAadhar(aadhar){
    //     return currentUser.updateAadhar(aadhar);
    // }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);
    

    const value = {currentUser, signin, logout, updateAge// updateName, , updateHeight, updateWeight, updateMobile, updateAadhar
    }

    return (
        <AuthContext.Provider value={value}>
            {! loading && children}
        </AuthContext.Provider>
    )
}