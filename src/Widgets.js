import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Widgets.css'

function Widgets() {

const newsArticle=(heading,subtitle)=>(
    <div className='widgets-aricle'>
        <div className="widgets-article-left">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets-article-right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
)

    return (
        <div className='widgets'>
            <div className='widgets-header'>
                <h2>LinkedIn news</h2>
                <InfoIcon/>
            </div>
            {newsArticle('Summer is Back!!!','Top News 999')}
            {newsArticle('The man who declared victory','Top News')}
            {newsArticle('Bitcoin breaks £33k','Top News')}
        </div>
    )
}

export default Widgets
