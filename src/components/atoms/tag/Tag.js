
import s from './Tag.module.scss';

const Tag = ({
  name
}) => {

  if (name) {
    name = name.slice(1);
  }

  return (
    <div className={s.container}>
        {name}
    </div>
  )
};

export default Tag;