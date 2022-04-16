import React from "react";
import style from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={style.background}>
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
        <form className={style.formContainer}>
          <div className={style.containerInput}>
            <input
              className={style.input}
              type="text"
              placeholder="Your name..."
            />
          </div>

          <div className={style.containerInput}>
            <input
              className={style.input}
              type="email"
              placeholder="Your email..."
            />
          </div>

          <div className={style.containerInput}>
            <input
              className={style.input}
              type="text"
              placeholder="Subject..."
            />
          </div>

          <div className={style.containerInput}>
            <textarea
              className={style.input}
              type="text"
              placeholder="Message..."
            ></textarea>
          </div>

          <div className={style.containerInput}>
            <input
              className={style.input}
              type="submit"
              placeholder="Submit"
            />
          </div>
        </form>
      </div>
      <div className={style.imageContainer}>
        <img src={require("../../assets/contact.png")} alt="contact" />
      </div>
    </div>
  );
};

export default Contact;
