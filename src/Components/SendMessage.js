import React, {useState} from 'react';
import SendIcon from '@material-ui/icons/Send';
import { db, auth } from '../firebase';
import firebase from 'firebase/compat/app';

function SendMessage({scroll}) {

    const [message, setMessage] = useState('');

    async function sendMessage(e){
        e.preventDefault();
        const {uid, photoURL, displayName} = auth.currentUser;

        await db.collection('messages').add({
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            photo_url: photoURL,
            name: displayName,
            uid: uid
        });

        setMessage('');
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className="box-footer">
            <form onSubmit={sendMessage}>
                <div className="input-group">
                <input
                id="text"
                placeholder="Message..."
                value={message}
                className = "form-control"
                onChange={(e)=> setMessage(e.target.value)}
                />
                <span className="input-group-btn">
                <button className="btn btn-warning btn-flat" type="submit"  endIcon={<SendIcon />}>
                    Send
                </button>
                </span>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
