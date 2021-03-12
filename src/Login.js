import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { auth } from './firebase'
import { login } from './features/counter/userSlice'
import './Login.css'

function Login() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [profileUrl,setProfileUrl]=useState('')
    const dispatch = useDispatch()

    const register =()=>{
        if(!name){
            return alert('please enter a full name!')
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profileUrl
            })
            .then(()=>{
                dispatch (login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:profileUrl
                }))
            })
        })
        .catch((error)=>alert(error))
    }
    const loginToApp =(e)=>{
         e.preventDefault();
         auth.signInWithEmailAndPassword(email,password)
         .then(userAuth=>{
             dispatch(login({
                 email: userAuth.user.email,
                 uid: userAuth.user.uid,
                 displayName: name,
                 photoURL: profileUrl
             }))
         }).catch(error=>alert(error))
    }

    return (
        <div className='login'>
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c528.png" alt=""/>
            <form action="">
                <input type='text' value={name} onChange={e=>setName(e.target.value)} placeholder='Full name (required if registering)'/>
                <input type="text" value={profileUrl} onChange={e=>setProfileUrl(e.target.value)} placeholder='Profile pic Url'/>
                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder='Email'/>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' />
                <button type='submit' onClick={loginToApp}>Sing In</button>
            </form>
            <p>Not a member?{" "}
                <span className='login-register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
