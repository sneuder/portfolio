import style from './index.module.scss'

const Image = () => {
  return (
    <img
          className={style.img}
          src={require("../../assets/contact.png")}
          alt="contact"
        />
  )
}

export default Image