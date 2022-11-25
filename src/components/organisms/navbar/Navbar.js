
import { useContext } from 'react';
import Icon from '../../atoms/icon/Icon';
import { MenuIcon, NoteIcon } from '../../../data';

import { SidebarContext } from '../../../util/clickSidebar';

import s from './Navbar.module.scss';

const Navbar = () => {

  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <nav className={s.container}>
      <div className={s.content}>
        <div className={s.leftItems}>
          <a href='#' className={s.iconWithTitle}>
            <NoteIcon />
            Note
          </a>
        </div>

        <div 
          className={s.rightItems}
          onClick={() => toggleSidebar()}
        >
          <MenuIcon />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;