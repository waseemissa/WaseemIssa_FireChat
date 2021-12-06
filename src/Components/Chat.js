import React, {useState, useEffect, useRef} from 'react'
import Logout from './Logout'
import { db, auth } from '../firebase';
import SendMessage from './SendMessage';
import moment from 'moment';

function Chat() {

    const scroll = useRef();
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map(doc => doc.data()));
        });
    },[]);
    return (
        <div className="box-body">
            <div className="box-header with-border">
                        <h3 className="box-title">Chat Messages</h3>
                        <div className="box-tools float-left"><Logout /> </div>
            </div>
            
                <div class="direct-chat-messages">
                    {messages.map(({id, name, text, photo_url, uid, createdAt}) => (
                        <div key={id} className={`direct-chat-msg ${uid === auth.currentUser.uid ? 'right float-right' : 'float-left'}`}>
                            <div className="direct-chat-info clearfix"> <span className={`direct-chat-name ${uid === auth.currentUser.uid ? 'float-right' : 'float-left'}`}>{name}</span> <span className={`direct-chat-timestamp ${uid === auth.currentUser.uid ? 'float-right' : 'float-left'}`}>{moment({createdAt}).format('MMM Do YY')}</span> </div> <img className="direct-chat-img" src={photo_url} alt="" />
                            <div className="direct-chat-text">{text}</div>
                        </div>
                    ))}
                </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
