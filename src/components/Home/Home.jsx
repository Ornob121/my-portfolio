import pic from "../../assets/shadman1.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../../varients";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] md:min-h-[75vh] flex items-center mb-6 md:mb-20"
    >
      <div className="container mx-auto md:flex gap-y-5 justify-between items-center">
        <div className="flex-1 text-center lg:text-left">
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="uppercase text-5xl lg:text-[60px] font-secondary font-bold leading-[1]"
          >
            Hi, I am <span>Shadman Tahmid</span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-5 text-4xl md:text-[60px] font-secondary font-semibold uppercase leading-[1]"
          >
            <span className="mr-1 text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "MERN Stack Web Developer",
                2000,
                "Front-End Web Developer",
                2000,
                "Full-Stack Web Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="text-red-500"
            />
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-5"
          >
            Welcome to my portfolio! I'm an enthusiastic MERN stack web
            developer, specializing in HTML, CSS, JavaScript, React, Express.js,
            Node.js, and MongoDB. With a solid background in front-end
            development, my goal is to craft captivating user interfaces and
            deliver seamless user experiences. I take great pleasure in
            transforming concepts into fully functional and visually stunning
            websites and web applications. Feel free to explore my work and get
            in touch if you have any questions or exciting projects in mind!
          </motion.p>
          <motion.button
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="btn1"
          >
            <Link to="contact">Contact Me</Link>
          </motion.button>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex md:justify-start justify-center  gap-5 mt-5 text-3xl "
          >
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
          </motion.div>
        </div>

        <motion.img
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="mx-auto hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px]"
          src={pic}
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
