import React from 'react'
import { auth } from '../firebase';

function Logout() {
    return (
        <div>
            <button className="btn btn-warning btn-flat" onClick={()=> auth.signOut()}>Logout</button>
        </div>
    )
}

export default Logout
