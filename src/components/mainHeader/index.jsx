import Vertical from '../../common/layouts/vertical'
import style from './index.module.scss'

const MainHeader = () => {
  return (
    <div className={style.mainHeaderContainer}>
      <Vertical>
        <h1>
          Hi, <br />
          I'm <span>Esneider</span>
        </h1>
        <p className={style.role}>Full Stack Web Developer</p>
        <p className={style.text}>
          Hey, are looking for a web developer to build your Brand and grow your business?
          Let's shake hands with me.
        </p>
      </Vertical>
    </div>
  )
}

export default MainHeader