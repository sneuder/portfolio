import emailjs from 'emailjs-com'
import { useContext } from 'react';
import GeneralContext from '../context';

const useEmail = () => {
  const { reduceData } = useContext(GeneralContext);

  const sendEmail = (e) => {
    e.preventDefault();
    reduceData('loading')

    emailjs.sendForm("service_fib3fdv", "template_yhvx24m", e.target,"NwUhDkym5i8dnYX7u")
      .then(() => {
        reduceData('loading')
        e.target.reset();
      })
      .catch((e) => {
        throw new Error(e)
      })
  };

  return {
    sendEmail
  }
}

export default useEmail