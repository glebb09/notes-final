
import s from './Icon.module.scss';

const Icon = ({
  newClassName
}) => {

  const container = s.container;

  if(newClassName) {
    container = `${container} ${newClassName}`.trim();
  }

  return (
    <div className={container}>
      Icon
    </div>
  )
}

export default Icon;