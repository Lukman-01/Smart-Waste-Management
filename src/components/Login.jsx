import { useEffect } from 'react';
import { auth } from './firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";

function HardcodedLogin() {
    // Hardcoded credentials
    const email = process.env.REACT_APP_TEST_EMAIL;
    const password = process.env.REACT_APP_TEST_PASSWORD;


    useEffect(() => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Login successful.
                console.log("Logged in with hardcoded credentials", userCredential.user);
            })
            .catch((error) => {
                console.error("Error logging in with hardcoded credentials:", error.message);
            });
    }, []);

    return (
        <div>
            <h1>Login in progress...</h1>
        </div>
    );
}

export default HardcodedLogin;
