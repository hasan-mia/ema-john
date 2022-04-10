import React from 'react';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../firebase.init';

const useRegister = () => {

const provider = new GoogleAuthProvider();

const signInWithGoogle = ()=>{
	signInWithPopup(auth, provider)
		.then((result) => {
			const user = result.user;
			console.log(user);
		}).catch((error) => {
			const errorMessage = error.message;
			console.log(errorMessage);
	});
}

return {signInWithGoogle}

};

export default useRegister;