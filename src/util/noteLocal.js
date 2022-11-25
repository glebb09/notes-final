
export const setNoteLocal = (data) => {

  return localStorage.setItem('notes', JSON.stringify(data));

}

export const getAllNoteLocal = () => {
  return JSON.parse(localStorage.getItem('notes'));
}

export const removeNoteIdLocal = (id) => {

  const items = JSON.parse(localStorage.getItem('notes'));
  
  items.map((item, index) => {
    if ( index == id ) { items.splice(index, 1); };
  });

  localStorage.setItem('notes', JSON.stringify(items));
}

export const getIdNoteLocal = (id) => {
  const items = JSON.parse(localStorage.getItem('notes'));

  items.map((item, index) => {
    if (item.id == id) { return index };
  })
}

export const removeAllNotesLocal = () => {
  localStorage.removeItem('notes');
}