import React from 'react'
import './info_section.scss'
import Avatar from '../../assets/images/avatar.svg' 

function info_section(props) {
  return (
    <div className="container_info_section">
        <div className="container_image">
            <h2>{props.title}</h2>
            <img src={Avatar}/>
        </div>
        <div className="lines">
            <div className="line"></div>
        </div>
        <h3>{props.subtitle}</h3>
        <h3>{props.description}</h3>
    </div>
  )
}

export default info_section