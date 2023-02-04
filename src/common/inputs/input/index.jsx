import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputContainer from "../../layouts/inputContainer"

const Input = ({type, name, placeholder, icon}) => {
  return (
    <InputContainer>
      <FontAwesomeIcon icon={icon} />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required
        />
    </InputContainer>
  )
}

export default Input