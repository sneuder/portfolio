import style from './index.module.scss'

const Image = ({imageName}) => {
  return (
    <img
          className={style.img}
          src={require(`../../assets/sections/${imageName}.svg`)}
          alt="contact"
        />
  )
}

export default Image