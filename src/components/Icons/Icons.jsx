import IconsSVG from './icons.svg';

function Icons({ name, className = '' }) {

  return (
    <svg className={`${className}`}>
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  )
}

export default Icons;