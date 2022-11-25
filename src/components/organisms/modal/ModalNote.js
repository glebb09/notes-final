
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createNote, updateNote } from '../../../features/note/noteSlice';
import { closeModal } from '../../../features/note/modalSlice';

import Button from '../../atoms/button';
import TextareaField from '../../atoms/inputs/textarea-field';

import { CloseIcon, NoteIcon } from '../../../data';

import s from './ModalNote.module.scss';


const ModalNote = ({
  showModal,
}) => {

  const dispatch = useDispatch();
  const { viewNote, viewId } = useSelector((state) => state.notes );

  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);

  const textView = useMemo(() => {
      viewNote && viewNote.map((viewText, id) => {
        setText(viewText.all_text);
      })
  }, [viewNote]);

  const handleCreateNote = () => {
    const regExp = /#[0-9A-Za-zА-Яа-яё]+/gm;

    if (regExp.test(text)) {
      const newTags = text.match(regExp);
      newTags.forEach((item, id) => {
        item.substring(1);
      });

      dispatch(createNote(text));
      setText('');
      dispatch(closeModal());
      
    }
  };

  const handleViewNote = () => {
    dispatch(updateNote({text, viewId}));
    setText('');
    dispatch(closeModal());
  };


  return (
    <div className={s.container}>

        <div className={[
          s.dialog,
          showModal ? s.showInUp : ''
        ].join(" ")}
        >

          <form className={s.formContainer}>

            <header>
              <section className={s.iconHeadNewNote}>
                <NoteIcon />
                <h3>New Note</h3>
              </section>

              <button 
                className={s.buttonClose}
                type="button"
                onClick={() => dispatch(closeModal())}
              >
                <CloseIcon className={s.closeIcon} />
              </button>
            </header>

            <div className={s.content}>

              <TextareaField
                value={text}
                placeholder="Type somthing here..."
                onChange={(e) => setText(e.target.value)}
              />
              
            </div>

            <footer>
              <div>
                <Button
                  newClassName="reset"
                  type="button"
                  mType="reset"
                  onClick={() => setText('')}
                >
                  Reset
                </Button>
              </div>

              <div>
                <Button
                  newClassName="cancel"
                  type="button"
                  mType="cancel"
                  media-status="true"
                  onClick={() => dispatch(closeModal())}
                >
                  Cancel
                </Button>

                <Button
                  newClassName="confirm"
                  type="button"
                  mType="confirm"
                  onClick={viewNote ? handleViewNote : handleCreateNote}
                >
                  Confirm
                </Button>
              </div>
            </footer>

          </form>

        </div>  

    </div>
  )
}

export default ModalNote;
