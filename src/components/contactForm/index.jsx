import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

import Input from '../../common/inputs/input'
import inputInfo from '../../constants/inputInfo'
import InputContainer from '../../common/layouts/inputContainer'

import useEmail from '../../hooks/useEmail'
import useGetStates from '../../hooks/useGetStates'

const ContactForm = () => {
  const { sendEmail } = useEmail()
  const { loading } = useGetStates()

  return (
    <form className={style.formContainer} onSubmit={sendEmail}>
      {inputInfo.map((info) => (
        <Input key={info.name} {...info} />
      ))}

      <InputContainer>
        <FontAwesomeIcon icon={faMessage} />
        <textarea
          type="text"
          name="message"
          placeholder="Message..."
          required
        ></textarea>
      </InputContainer>

      <InputContainer>
        <input
          type="submit"
          value={loading ? 'Sending...' : 'Send'}
          disabled={loading}
          placeholder="Submit"
        />
      </InputContainer>
    </form>
  )
}

export default ContactForm
