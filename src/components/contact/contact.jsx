import React from "react";
import emailjs from "emailjs-com";
import swal from 'sweetalert';


import style from "./contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAt,
  faBook,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const sendEmail = async (e) => {
    e.preventDefault();

    let information = Object.values(e.target);
    if(information.some(info => info.value === "")) return swal("Error", "Please fill all the fields", "error");

    swal("Thank you for your message!", "", "success");
    
    await emailjs.sendForm(
      "service_fib3fdv",
      "template_yhvx24m",
      e.target,
      "NwUhDkym5i8dnYX7u"
    );
    e.target.reset();
  };

  return (
    <div className={style.background} id="contact">
      
      <div className={style.imageContainer}>
        
      </div>
    </div>
  );
};

export default Contact;
