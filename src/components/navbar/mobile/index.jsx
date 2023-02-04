import style from './index.module.scss'
import NavItems from '../../../common/navItems'
import Branch from '../../../common/branch'

const MobileNavbar = () => {
  return (
    <div className={style.mobileNavbarContainer}>
      <Branch />
      <NavItems />
    </div>
  )
}

export default MobileNavbar