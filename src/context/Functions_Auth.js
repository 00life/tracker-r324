import { useState, useEffect } from "react";
import auth from "./Firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,

} from "firebase/auth";

export async function func_signup(email, password){
    try{await createUserWithEmailAndPassword(auth, email, password);
    }catch(error){console.log('Functions_Auth - func_signup: '+error)}
};

export async function func_signin(email, password){
    try{return await signInWithEmailAndPassword(auth, email, password)
    }catch(error){console.log('Functions_Auth - func_signin: '+ error)}
};

export async function func_logout(){
    try{return await signOut(auth);
    }catch(error){console.log('Functions_Auth - func_logout: '+error);}
};

export function useAuthStatus(){
    const [currentUser, setCurrentUser] = useState({});
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,user=>{
            setCurrentUser(user);
        })

        return unsubscribe
    },[])
    
    return currentUser   
};

export function func_reset(email){
    return sendPasswordResetEmail(auth, email);
};

// export function updateEmail(email){
//     return currentUser.updateEmail(email);
// };

// export function updatePassword(password){
//     return currentUser.updatePassword(password);
// };

// function updateProfile(displayName, photoURL){
//     return currentUser.updateProfile({displayName, photoURL});
// };

// function emailLink(email, code){
//     return auth.signInWithEmailLink(email, code);
// };