import Button from '../../common/button'
import Vertical from '../../common/layouts/vertical'
import style from './index.module.scss'

import useData from '../../hooks/useData'

const MainHeader = () => {
  const { sections, links } = useData('sections', 'links')
  const { role, text } = sections.home
  const { linkedin } = links

  return (
    <div className={style.mainHeaderContainer}>
      <Vertical>
        <h1>
          Hi, <br />
          I&#39;m <span>Esneider</span>
        </h1>
        <p className={style.role}>{role}</p>
        <p className={style.text}>{text}</p>
        <Button
          text="Check out my LinkedIn!"
          link={linkedin}
          buttonType="secondaryButton"
        />
      </Vertical>
    </div>
  )
}

export default MainHeader
