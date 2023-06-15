import Button from "../Buttons/Button";
import Logo from "./Logo/Logo";
import { FaBars } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

const Header = () => {
  return (
    <header className="py-5 fixed top-0 w-full z-100">
      <div className="container">
        <div className="header-background blur-sm"></div>
        <nav className="flex justify-between items-center relative">
          <span>
            <FaBars size={25} className="cursor-pointer" color="#fff" />
          </span>
          <Logo src="https://assets.website-files.com/632b356cbea6db8b490879b2/636e61a6e880a28a49265c86_Asset%203.svg" />
          <span className="flex gap-4">
            <Button className="btn btn-primary" type="button">
              Shop Now
            </Button>
            <Button className="btn btn-secondary" type="button">
              <BsBag size={20} />
            </Button>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
