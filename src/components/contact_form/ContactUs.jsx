import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./contactUs.scss";
import { useEffect } from "react";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "template_0622wsv", form.current, "3VVe97XYo_PofC1Gw")
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
  const [formActive, setFormActive] = useState(false);

  return (
    <>
      <div className={`container_contact ${formActive ? "close" : "open"}`}>
        <form ref={form} onSubmit={sendEmail} className="container_form">
          <div className="title_form">
            <h1>Contactame</h1>
            <button onClick={() => setFormActive(!formActive)}>x</button>
          </div>
          <input
            type="text"
            name="user_name"
            className="input_date"
            placeholder="Tu nombre"
          />
          <input
            type="email"
            name="user_email"
            className="input_date"
            placeholder="Tu email"
          />
          <textarea 
          name="message" 
          placeholder="Tu mensaje"
          />
          <input 
          type="submit" 
          value="Send" 
          className="send" 
          />
        </form>
      </div>
      <div className={`background_form ${formActive ? "close" : "open"}`}>
      </div>
    </>
  );
};
