import * as React from 'react';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase';



function Login() {

    function loginWithGoogle(){
         const provider = new firebase.auth.GoogleAuthProvider();
         auth.signInWithPopup(provider);
    }
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <button className="btn btn-warning btn-flat" style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={loginWithGoogle}>Login Using Google</button>
        </div>
    )
}

export default Login
