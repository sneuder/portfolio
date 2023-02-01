import style from './index.module.scss';

import { NavHashLink as Link } from 'react-router-hash-link';
import linksInfo from '../../constants/linksInfo';

const NavItems = () => {
  // const data = require('../../assets/otherInfo.json');

  return (
    <ul className={style.navItemsContainer}>
      {
        linksInfo.map(({to, text}) => (
          <li>
            <Link smooth to={to} >
              {text}
            </Link>
          </li>
        ))
      }    
    </ul>
  );
};

export default NavItems;
