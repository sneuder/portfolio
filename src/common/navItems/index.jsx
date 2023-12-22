import style from './index.module.scss'
import Button from '../button'
import { NavHashLink as Link } from 'react-router-hash-link'
import linksInfo from '../../constants/linksInfo'

const NavItems = () => {
  const { links } = require('../../assets/data/index.json')
  const { cv } = links

  return (
    <div className={style.navItemsContainer}>
      {linksInfo.map(({ to, text }) => (
        <div key={to}>
          <Link smooth to={to}>
            {text}
          </Link>
        </div>
      ))}
      <Button text="Resume" link={cv} buttonType="primaryButton" />
    </div>
  )
}

export default NavItems
