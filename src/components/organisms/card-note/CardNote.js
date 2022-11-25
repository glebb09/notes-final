
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tag from '../../atoms/tag/Tag';
import Button from '../../atoms/button';
import DotsMenu from '../../atoms/dots-menu/DotsMenu';

import { removeNoteIdLocal } from '../../../util/noteLocal';
import { openModal } from '../../../features/note/modalSlice';
import { deleteNoteStatus, updateNote, viewIdNote } from '../../../features/note/noteSlice';

import s from './CardNote.module.scss';

import { ThreeDots } from '../../../data';

const CardNote = ({
  id,
  tags,
  text,
  dateCreate,
}) => {

  const dispatch = useDispatch();

  const [dotsShow, setDotsShow] = useState(false);

  const handleRemoveIdNotes = (id) => {
    removeNoteIdLocal(id);
    dispatch(deleteNoteStatus());
  };

  const handleViewIdNotes = (id) => {
    dispatch(viewIdNote(id));
    dispatch(openModal());
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <header className={s.header}>
          <DotsMenu
            dotsShow={dotsShow}
            openMenu={setDotsShow} 
            idDelete={id}
            onClickDelete={handleRemoveIdNotes}
          />
        </header>

        <main>
          <div className={s.tagContent}>

            {tags.map((tag, id) => (
              <Tag
                key={id}
                name={tag}
              />
            ))}
            
          </div>
          <div className={s.textCard}>
            {text}
          </div>

        </main>

        <footer>
          <div className={s.timeCard}>
              {dateCreate}
          </div>

          <Button
            newClassName="cancel"
            type="button"
            mType="cancel"
            size="small"
            onClick={() => handleViewIdNotes(id)}
          >
            View
          </Button>

        </footer>
      </div>
    </div>
  )
}

export default CardNote;


