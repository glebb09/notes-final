
import s from './InputSearch.module.scss';

const InputSearch = ({
  searchFun,
  ...rest
}) => {

  const container = s.input;

  return (
    <input 
      className={container} 
      type='text' 
      placeholder='Search'
      onChange={(e) => searchFun(e.target.value)}
      {...rest}
      />
  )
}

export default InputSearch;