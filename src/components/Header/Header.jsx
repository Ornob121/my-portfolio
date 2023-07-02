import logo from "../../assets/logo3.png";
import { FaDownload } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-8 md:px-0 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="home">
            <img src={logo} className="w-32" alt="" />
          </a>
          <button className="btn2">
            <a
              download={"Shadman Tahmid Resume"}
              href="/Full-Stack Web Developer Resume Of Shadman Tahmid.pdf"
              className=" flex items-center gap-x-3"
            >
              <span>
                <FaDownload />
              </span>
              <span>Resume</span>
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
