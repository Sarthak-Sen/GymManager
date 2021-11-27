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


    function updateName(name){

        const updateRef = database.ref(`/profiles/${currentUser.uid}`);

        updateRef.update({
            name: name,
        });
    }

    function updateAge(age){
        
        const updateRef = database.ref(`/profiles/${currentUser.uid}`);

        updateRef.update({
            age: age,
        });

    }

    function updateHeight(height){
        const updateRef = database.ref(`/profiles/${currentUser.uid}`);

        updateRef.update({
            height: height,
        });
    }

    function updateWeight(weight){
        const updateRef = database.ref(`/profiles/${currentUser.uid}`);

        updateRef.update({
            weight: weight,
        });
    }

    function updateMobile(mobile){
        const updateRef = database.ref(`/profiles/${currentUser.uid}`);

        updateRef.update({
            mobile: mobile,
        });
    }

    function updateAadhar(aadhar){
        const updateRef = database.ref(`/profiles/${currentUser.uid}`);

        updateRef.update({
            aadhar: aadhar,
        });
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);
    

    const value = {currentUser, signin, logout, updateAge, updateName, updateHeight, updateWeight, updateMobile, updateAadhar }

    return (
        <AuthContext.Provider value={value}>
            {! loading && children}
        </AuthContext.Provider>
    )
}