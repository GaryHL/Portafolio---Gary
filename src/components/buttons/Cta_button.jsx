import React from 'react'
import './cta_button.scss'

function Cta_button(props){
  return (
    <div className="container_cta">
      <button class="btn_cta">
      <h2>{props.text}</h2>
      </button>
    </div>
  )
}

export default Cta_button