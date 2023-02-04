import useGetStates from '../../../hooks/useGetStates'
import style from './index.module.scss'
import NavItems from '../../../common/navItems'
import Branch from '../../../common/branch'

const MobileNavbar = () => {
  const { modal } = useGetStates()

  return (
    <div className={`${style.backgroundMobileNavbar} ${!modal ? style.hideNavbarMobile : style.showNavbarMobile}`}>
      <div className={style.mobileNavbarContainer}>
        <Branch />
        <NavItems />
      </div>
    </div>
  )
}

export default MobileNavbar