import React,{useState,useEffect} from 'react'
import InputOption from './InputOption'
import Post from './Post'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import {db} from './firebase'
import firebase from 'firebase'
import './Feed.css'

function Feed() {

const[posts,setPosts]=useState([]);
const[input,setInput]=useState('')

useEffect(()=>{
    db.collection('posts')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>(
        setPosts(snapshot.docs.map((doc)=>(
            {
                id:doc.id,
                data:doc.data()
            }
        )))
    ))
},[])

const sendPost=e=>{
    e.preventDefault();
    db.collection('posts').add({
        name:'gabi',
        description:'first msg',
        message:input,
        photoUrl:'',
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
}

    return (
        <div className='feed'>
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon/>
                    <form>
                        <input 
                        value={input} 
                        onChange={e=>setInput(e.target.value)} 
                        type="text"/>
                        <button 
                        onClick={sendPost} type='submit'
                        >Submit</button>
                    </form>
                </div>
                <div className="feed-input-options">
                    <InputOption Icon={ImageIcon} title='photo' color='#70b5f9'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd'/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7fc15e'/>
                </div>
            </div>
            {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))}
            <Post name='gabi' description='test' message='we almost there'/>
        </div>
    )
}

export default Feed
