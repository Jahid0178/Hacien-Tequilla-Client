import Button from "../Buttons/Button";
import Logo from "./Logo/Logo";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-5 border">
      <div className="container">
        <nav className="flex justify-between items-center">
          <span>
            <FaBars size={20} className="cursor-pointer" />
          </span>
          <Logo src="https://assets.website-files.com/632b356cbea6db8b490879b2/636e61a6e880a28a49265c86_Asset%203.svg" />
          <span>
            <Button className="btn btn-primary" type="button">
              Shop Now
            </Button>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
