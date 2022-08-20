import React from 'react'
import './cta_button.scss'
import {Link}from 'react-router-dom'


function Cta_button(props){
  return (
    <>
        <div className="container_cta">
          <button class="btn_cta" >
            <h2>{props.text}</h2>
          </button>
        </div>
    </>
  )
}

export default Cta_button