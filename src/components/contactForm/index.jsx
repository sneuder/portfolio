import style from './index.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAt,
  faBook,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
        <form className={style.formContainer} >
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
              value="Send"
              placeholder="Submit"
            />
          </div>
        </form>
  )
}

export default ContactForm
