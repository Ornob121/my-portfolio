import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="fixed bottom-2 max-w-7xl lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] px-5 flex justify-between items-center mx-auto text-2xl font-bold text-white/60">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-200}
            className="w-[60px] h-[60px] flex justify-between items-center cursor-pointer"
          >
            <BiHomeAlt className="mx-auto" />
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            className="w-[60px] h-[60px] flex justify-between items-center cursor-pointer"
            to="about"
          >
            <BiUser className="mx-auto" />
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            className="w-[60px] h-[60px] flex justify-between items-center cursor-pointer"
          >
            <BsClipboardData className="mx-auto" />
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            className="w-[60px] h-[60px] flex justify-between items-center cursor-pointer"
            to="projects"
          >
            <BsBriefcase className="mx-auto" />
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            className="w-[60px] h-[60px] flex justify-between items-center cursor-pointer"
            to="contact"
          >
            <BsChatSquare className="mx-auto" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
