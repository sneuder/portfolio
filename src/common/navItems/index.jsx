import style from './index.module.scss'
import Button from '../button'
import { NavHashLink as Link } from 'react-router-hash-link'
import linksInfo from '../../constants/linksInfo'

const NavItems = () => {
  const { links } = require('../../assets/data/index.json')
  const { cv } = links

  return (
    <ul className={style.navItemsContainer}>
      {linksInfo.map(({ to, text }) => (
        <li key={to}>
          <Link smooth to={to}>
            {text}
          </Link>
        </li>
      ))}
      <Button text="Resume" link={cv} buttonType="primaryButton" />
    </ul>
  )
}

export default NavItems
