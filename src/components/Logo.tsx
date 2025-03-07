import logo from '../icons/SRM.png'
export const Logo = ({className}) => {
  return (
    <a href="/" className="flex items-center">
      <img
        src={logo}
        alt="Golden Tower Logo"
        className= {className}
      />
    </a>
  );
};
