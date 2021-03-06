import React,{useEffect} from 'react';
import { useSelector} from 'react-redux'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login'
import Widgets from './Widgets'
import { login, logout,  selectUser} from './features/counter/userSlice'
import {useDispatch} from 'react-redux'
import  Header from './Header';
import './App.css';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }))
      }else{
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className="app">
      <Header/>
      {!user ? (
        <Login/>
      ):(
      <div className="app-body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>      
      )}
    </div>
  );
}

export default App;
