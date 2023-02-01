import style from './index.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, } from "@fortawesome/free-solid-svg-icons";

import Input from '../../common/inputs/input';
import inputInfo from '../../constants/inputInfo'
import InputContainer from '../../common/layouts/inputContainer';

const ContactForm = () => {
  return (
        <form className={style.formContainer} >
          {
            inputInfo.map(info => <Input {...info}/>)
          }

          <InputContainer>
            <FontAwesomeIcon icon={faMessage} />
            <textarea
              type="text"
              name="message"
              placeholder="Message..."
            ></textarea>
          </InputContainer>

          <InputContainer>
            <input
              type="submit"
              value="Send"
              placeholder="Submit"
            />
          </InputContainer>
    </form>
  )
}

export default ContactForm
