const useEmail = () => {
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
}

export default useEmail