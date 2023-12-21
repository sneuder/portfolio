const scrolling = () => {
  let prevScrollpos = window.pageYOffset

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset
    const navbar = document.querySelector('nav')

    if (!navbar) return

    prevScrollpos > currentScrollPos
      ? (navbar.style.transform = 'translateY(0)')
      : (navbar.style.transform = 'translateY(-80px)')

    prevScrollpos = currentScrollPos
  }
}

export default scrolling
