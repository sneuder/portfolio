import style from './navbar.module.scss';
import { NavHashLink as Link } from 'react-router-hash-link';

const NavItems = () => {
  const data = require('../../assets/otherInfo.json');

  return (
    <ul className={style.navItemsContainer}>
      <li>
        <Link
          className={style.navItems}
          smooth
          to="#aboutme"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          className={style.navItems}
          smooth
          to="#projects"
        >
          Projects
        </Link>
      </li>
      <li>
        <a
          className={style.navItems}
          href={data.cvLink}
          target="_blank"
          rel="noreferrer"
        >
          My CV
        </a>
      </li>
      <li>
        <Link
          className={style.navItems}
          smooth
          to="#skills"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          className={style.navItems}
          smooth
          to="#contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
