import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDvYPJ-i8RfG2M1esQV_mZN8cGHtPn4wN8",
  authDomain: "netflix-clone-ffee4.firebaseapp.com",
  projectId: "netflix-clone-ffee4",
  storageBucket: "netflix-clone-ffee4.appspot.com",
  messagingSenderId: "758234466673",
  appId: "1:758234466673:web:7e2381bc503f1b1ba64ed0",
  measurementId: "G-74BEFFRVKV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password)=>{
    try {
       const res =  await createUserWithEmailAndPassword(auth,email,password);
       const user = res.user;
       await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email

       })
    } catch (error) {
        console.log(error)
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async()=>{
    signOut(auth);
}

export {
    auth, db,login,signup,logout
}