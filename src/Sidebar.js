import React from 'react'
import { Avatar } from '@material-ui/core'
import './Sidebar.css'

function Sidebar() {

const recentItem =(topic)=>{
   return <div className="sidebar-recentItem">
        <span className='sidebar-hash'>#</span>
        <p>{topic}</p>
    </div>
}

    return (
        <div className='sidebar'>
            <div className="sidebar-top">
                <img src="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg" alt="avatar"/>
                <Avatar className='sidebar-avatar'/>
                <h2>name</h2>
                <h4>gpgabika@post.sk</h4>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className="sidebar-stat-number">649</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on posts</p>
                    <p className="sidebar-stat-number">649</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem("react.js")}
                {recentItem('HTML')}
                {recentItem('JavaScript')}
                {recentItem('redux')}
            </div>
        </div>
    )
}

export default Sidebar
