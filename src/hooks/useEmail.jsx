const useEmail = () => {
  const sendEmail = async (e) => {
    e.preventDefault();
    
    // await emailjs.sendForm(
    //   "service_fib3fdv",
    //   "template_yhvx24m",
    //   e.target,
    //   "NwUhDkym5i8dnYX7u"
    // );
    // e.target.reset();
  };

  return {
    sendEmail
  }
}

export default useEmail