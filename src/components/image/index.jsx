import style from './index.module.scss'

const Image = ({imageName}) => {
  return (
    <img
          className={style.img}
          src={require(`../../assets/${imageName}.png`)}
          alt="contact"
        />
  )
}

export default Image