import PulseLoader from "react-spinners/PulseLoader";

const Loader = ({ color }) => {
  let theme;
  switch (color) {
    case 'white':
      theme = '#ffffff';
      break;
    default:
      theme = '#1841c7';
      break;
  }
  return (
    <PulseLoader color={theme} size={7} />
  );
}

export default Loader;
