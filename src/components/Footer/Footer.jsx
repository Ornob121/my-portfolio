import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "350px" }}>
      <Wave
        fill="black"
        mask="url(#mask)"
        options={{ points: 15, speed: 0.2, amplitude: 60 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div style={{ position: "relative", top: 50, zIndex: 1 }}>
        <div className="grid grid-cols-2">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold pb-4">Quick Links</h2>
            <div className="flex flex-col gap-y-4">
              <Link
                spy={true}
                smooth={true}
                to="about"
                className="hover:text-[#00abf0]"
              >
                About
              </Link>
              <Link
                className="hover:text-[#00abf0]"
                spy={true}
                smooth={true}
                to="home"
              >
                Portfolio
              </Link>
              <a
                className="hover:text-[#00abf0]"
                href="https://drive.google.com/file/d/11K8RCCgoZmKJO786TTPcNHtlFXy79VZB/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <Link className="hover:text-[#00abf0]" smooth={true} to="contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="mx-auto">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>Shariatpur District, Bangladesh</p>
            <p>+8801767367722</p>
            <p>shadmantahmid121@gmail.com</p>
            <div className="flex md:justify-start justify-center  gap-5 mt-5 text-3xl ">
              <a
                href="https://www.linkedin.com/in/shadman-tahmid/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Ornob121"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/shadmantahmid.ornob.3/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <hr className="my-5 col-span-2" />
          <div className="z-20 col-span-2 text-center pb-5">
            All Right Reserved © 2023 Shadman Tahmid
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
