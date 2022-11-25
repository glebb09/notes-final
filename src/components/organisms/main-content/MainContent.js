
import { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import CardNote from '../card-note/CardNote';
import ModalNote from '../modal/ModalNote';
import FieldContent from '../field-content/FieldContent';
import InputSearch from '../../atoms/inputs/input-search/InputSearch';

import { getAllNoteLocal } from '../../../util/noteLocal';

import { SearchIcon } from '../../../data';

import s from './MainContent.module.scss';

const MainContent = () => {

  const { status } = useSelector((state) => state.modal);
  const { notes, statusDelete } = useSelector((state) => state.notes);

  const [notesLoacal, setNotesLocal] = useState([]);
  const [ search, setSearch ] = useState('');

  console.log("note", notesLoacal);

  console.log('search', search);
  const deleteElement = useMemo(() => getAllNoteLocal(), [statusDelete]);
  console.log("deletElement", deleteElement);

  useEffect(() => {

  const noteLocalDownload = getAllNoteLocal();
  if ( noteLocalDownload ) {
     setNotesLocal(noteLocalDownload)
  }

  } ,[notes, deleteElement]);

  const hendleFilterSearch = (value) => {
    setSearch(value);
  };

  return (
    <main className={s.container}>
      <div className={s.headerMain}>
        <div className={s.searchBar}>
          <span>
            <SearchIcon className={s.iconSearch} />
          </span>
          
          <InputSearch value={search} searchFun={hendleFilterSearch} />
        </div>
      </div>

      <div className={s.fieldContainer}>
        <FieldContent
        lengthNote={notesLoacal.length} 
        >
            {notesLoacal && notesLoacal.filter((item, id) => {
              return search.toLowerCase() === '' ? item : 
                    item.tags.some((tag) => tag.toLowerCase().includes(`#${search}`.toLowerCase()));
            }).map((note, id) => (
              <CardNote 
                key={note.id}
                id={id}
                tags={note.tags}
                text={note.text}
                dateCreate={note.date}
              />
              ))}
        
        </FieldContent>
      </div>

      { status && <ModalNote showModal={status} /> }

    </main>
  )
}

export default MainContent;
