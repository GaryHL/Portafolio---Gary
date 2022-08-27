import React from 'react'
import {useState} from 'react'
import './skillBar.scss'

function Skillbar  (props)  {


  
  return (
    <>
    <div className="container_skill">
      <div className="container_icon_skill">{props.iconSkill}</div>
      <div className="container_details_skill">
        <div className="name_skill">
          <h3>{props.nameSkill}</h3>
          <h4>{props.timePractice}</h4>
          <h5>{props.percentSkill}</h5>
        </div>
        <div className="bar_skill">
          {props.progressBar}
        </div>
      </div>
    </div>

    </>
  )
}

export default Skillbar