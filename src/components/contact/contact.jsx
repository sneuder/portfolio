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
      <div className={style.contactContainer}>
        <div className={style.headerContainer}>
          <h2 className={style.header}>
            Contact <span className={style.headerDecoration}>me</span>
          </h2>
          <p className={style.text}>
            If you would like to type me a message, fill the form below, I will
            type you back
          </p>
        </div>
        <form className={style.formContainer} onSubmit={(e) => sendEmail(e)}>
          <div className={style.containerInput}>
            <FontAwesomeIcon className={style.icon} icon={faUser} />
            <input
              className={style.input}
              type="text"
              name="name"
              placeholder="Your name..."
            />
          </div>

          <div className={style.containerInput}>
            <FontAwesomeIcon className={style.icon} icon={faAt} />
            <input
              className={style.input}
              type="email"
              name="fromEmail"
              placeholder="Your email..."
            />
          </div>

          <div className={style.containerInput}>
            <FontAwesomeIcon className={style.icon} icon={faBook} />
            <input
              className={style.input}
              type="text"
              name="subject"
              placeholder="Subject..."
            />
          </div>

          <div className={style.containerInput}>
            <FontAwesomeIcon className={style.icon} icon={faMessage} />
            <textarea
              className={style.inputArea}
              type="text"
              name="message"
              placeholder="Message..."
            ></textarea>
          </div>

          <div className={style.containerInput}>
            <input
              className={style.inputSubmit}
              type="submit"
              value="send"
              placeholder="Submit"
            />
          </div>
        </form>
      </div>
      <div className={style.imageContainer}>
        <img
          className={style.img}
          src={require("../../assets/contact.png")}
          alt="contact"
        />
      </div>
    </div>
  );
};

export default Contact;
