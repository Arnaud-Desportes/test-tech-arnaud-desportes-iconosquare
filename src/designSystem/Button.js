const Button = (props) => {

  const {
    theme,
    children,
    href,
    className

  } = props;

  let button, color;

  switch (theme) {
    case 'primary':
      color = 'bg-primary text-white hover:bg-secondary hover:text-white'
      break;

    default:
      color = ''
  }
  const buttonClass = `uppercase text-xs py-2 px-5 shadow-lg rounded-sm flex items-center ${color}`;

  if (href) {
    button =
    <a href={href} target='_blank' rel='noreferrer' className={`${buttonClass} ${className ? className : ''}`}>
      {children}
    </a>
  }
  else {
    button = 'hello world'
  }

  return (
    button
  );
}

export default Button;
