const scrolling = () => {
  let prevScrollpos = window.pageYOffset

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset
    const navbar = document.querySelector('nav')

    prevScrollpos > currentScrollPos
      ? (navbar.style.top = '0')
      : (navbar.style.top = '-80px')

    prevScrollpos = currentScrollPos
  }
}

export default scrolling
