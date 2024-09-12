import "../index.css";
import Enlace from "./Enlace";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header-title">Header</h2>
      <div className="header-enlace">
        <Enlace />
        <Enlace />
      </div>
    </div>
  );
};

export default Header;
