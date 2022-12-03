import auth from "./Firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut,

} from "firebase/auth";

export function func_signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
};

export function func_signin(email, password){
    return signInWithEmailAndPassword(auth, email, password)
};

export function func_authstatus(callback){
    return onAuthStateChanged(auth,callback)
};

export function func_logout(){
    (async()=>{
        try{await signOut(auth);
        }catch(error){console.log(error)}
    })();
};

// export function reset(email){
//     return sendPasswordResetEmail(auth, email);
// };

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