import emailjs from 'emailjs-com'

const useEmail = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm("service_fib3fdv", "template_yhvx24m", e.target,"NwUhDkym5i8dnYX7u")
      .then(() => {
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