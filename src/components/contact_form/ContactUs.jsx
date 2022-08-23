import React, { useRef } from "react";
import {useState} from 'react'
import emailjs from "emailjs-com";
import "./contactUs.scss";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // .sendForm("gmail", "template_0622wsv", form.current, "3VVe97XYo_PofC1Gw")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

  };
  const  [formActive, setFormActive] = useState(false)

  return (
    <>
    <button></button>
    <div className={`container_contact ${formActive ? 'close' : "open"}`}>
        <form ref={form} onSubmit={sendEmail} className="container_form">
          <h1>Contactame</h1>
          
          <input type="text" name="user_name" className="input_date" placeholder="Tu nombre"/>
         
          <input type="email" name="user_email" className="input_date" placeholder="Tu email" />
          
          <textarea name="message" placeholder="Tu mensaje" />
          <input type="submit" value="Send" className="send" onClick={()=> setFormActive(!formActive)} />
        </form>
    </div>
    </>
  );
};
