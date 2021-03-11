import React from 'react'
import InputOption from './InputOption'
import Post from './Post'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import './Feed.css'

function Feed() {
    return (
        <div className='feed'>
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="feed-input-options">
                    <InputOption Icon={ImageIcon} title='photo' color='#70b5f9'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd'/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7fc15e'/>
                </div>
            </div>
            <Post name='gabi' description='test' message='we almost there'/>
        </div>
    )
}

export default Feed
