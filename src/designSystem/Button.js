import { Link } from "react-router-dom";

const Button = (props) => {

  const {
    theme,
    children,
    href,
    link,
    className

  } = props;

  let button, color;

  switch (theme) {
    case 'primary':
      color = 'bg-primary text-white hover:bg-secondary hover:text-white'
      break;

    default:
      color = 'bg-white'
  }
  const buttonClass = `uppercase text-xs py-2 px-5 shadow-lg rounded flex items-center no-underline hover:no-underline inline-block ${color}`;

  if (href) {
    button =
    <a href={href} target='_blank' rel='noreferrer' className={`${buttonClass} ${className ? className : ''}`}>
      {children}
    </a>
  }
  else if (link) {
    button =
    <Link to={link} className={`${buttonClass} ${className ? className : ''}`}>
      {children}
    </Link>
  }

  return (
    button
  );
}

export default Button;
