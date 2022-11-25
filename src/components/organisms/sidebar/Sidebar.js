
import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { SidebarContext } from '../../../util/clickSidebar';
import { openModal } from '../../../features/note/modalSlice';

import { PlusIcon } from '../../../data';

import s from './Sidebar.module.scss';

const Sidebar = () => {

  const dispatch = useDispatch();

  const { open } = useContext(SidebarContext);

  return (
    <aside 
      className={s.container}
      side-open={open.toString()}
    >
      <div className={s.content}>
        <div className={s.sidebarWrapper}>
          <div className={s.sidebarTitle}>Menu</div>

          <div 
            className={s.sidebarMenu}
            onClick={() => dispatch(openModal())}
          >
              <PlusIcon className={s.icon}/>
              New Note
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;