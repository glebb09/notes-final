
import { ThreeDots } from '../../../data';
import s from './DotsMenu.module.scss';

const DotsMenu = ({
  dotsShow,
  openMenu,
  idDelete,
  onClickDelete
}) => {

  return (
    <span 
      className={s.dotsBtn} 
      aria-haspopup="true" 
      aria-expanded="false"
      onClick={() => openMenu(!dotsShow)}
      >
        <ThreeDots />  

        { dotsShow && (
          
          <ul className={[
            s.content,
            dotsShow ? s.menu : '',
            idDelete % 2 ? s.even : '',
            ].join(" ")}
            >
            <li>
              <button disabled>Bookmark</button>
            </li>
            <li>
              <button 
                data-type='delete'
                onClick={() => onClickDelete(idDelete)}
              >
                Delete
              </button>
            </li>
          </ul>
        )}

  </span>
  )
}

export default DotsMenu;