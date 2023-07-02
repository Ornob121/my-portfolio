import {
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoFirebase,
  BiLogoFigma,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoBootstrap,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoCss3,
} from "react-icons/bi";
import {
  SiExpress,
  SiJsonwebtokens,
  SiReactquery,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
const Skills = () => {
  return (
    <section className="min-h-[80vh] md:min-h-[75vh] mb-6 md:mb-20" id="skills">
      <div className="container mx-auto">
        <div>
          <h2 className="h2 text-center mb-10 mt-32">My Skills</h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scaleX: 1.03,
              scaleY: 1.02,
              transition: "1s ease-in-out",
            }}
            className="text-center border-x border-b-2 shadow-md shadow-blue-600 border-sky-500 w-2/3 mx-auto w-2/3 mx-auto md:w-full"
          >
            <BiLogoReact className="text-[90px] text-sky-500 mx-auto" />
            <span className="text-3xl">React</span>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scaleX: 1.03,
              scaleY: 1.02,
              transition: "1s ease-in-out",
            }}
            className="text-center border-x border-b-2 shadow-md shadow-yellow-600 border-yellow-500 w-2/3 mx-auto md:w-full"
          >
            <BiLogoJavascript className="text-[90px] text-yellow-400 mx-auto" />
            <span className="text-3xl">Java Script</span>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scaleX: 1.03,
              scaleY: 1.02,
              transition: "1s ease-in-out",
            }}
            className="text-center border-x border-b-2 shadow-md shadow-red-600 border-red-500 w-2/3 mx-auto md:w-full"
          >
            <BiLogoHtml5 className="text-[90px] text-red-400 mx-auto" />
            <span className="text-3xl">HTML 5</span>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scaleX: 1.03,
              scaleY: 1.02,
              transition: "1s ease-in-out",
            }}
            className="text-center border-x border-b-2 shadow-md shadow-[#1572B6] border-[#1572B6] w-2/3 mx-auto md:w-full"
          >
            <BiLogoCss3 className="text-[90px] text-[#1572B6] mx-auto" />
            <span className="text-3xl">CSS 3</span>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scaleX: 1.03,
              scaleY: 1.02,
              transition: "1s ease-in-out",
            }}
            className="text-center border-x border-b-2 shadow-md shadow-green-600 border-green-500 w-2/3 mx-auto md:w-full"
          >
            <BiLogoMongodb className="text-[90px] text-green-500 mx-auto" />
            <span className="text-3xl">MongoDB</span>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scaleX: 1.03,
              scaleY: 1.02,
              transition: "1s ease-in-out",
            }}
            className="text-center border-x border-b-2 shadow-md shadow-[#2298BD] border-[#2298BD] w-2/3 mx-auto md:w-full"
          >
            <BiLogoTailwindCss className="text-[90px] text-[#2298BD] mx-auto" />
            <span className="text-3xl">Tailwind Css</span>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scaleX: 1.03,
              scaleY: 1.02,
              transition: "1s ease-in-out",
            }}
            className="text-center border-x border-b-2 shadow-md shadow-[#7952B3] border-[#7952B3] w-2/3 mx-auto md:w-full"
          >
            <BiLogoBootstrap className="text-[90px] text-[#7952B3] mx-auto" />
            <span className="text-3xl">Bootstrap 5</span>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scaleX: 1.03,
              scaleY: 1.02,
              transition: "1s ease-in-out",
            }}
            className="text-center border-x border-b-2 shadow-md shadow-[#86A640] border-[#86A640] w-2/3 mx-auto md:w-full"
          >
            <SiExpress className="text-[90px] text-[#86A640] mx-auto" />
            <span className="text-3xl">Express JS</span>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scaleX: 1.03,
              scaleY: 1.02,
              transition: "1s ease-in-out",
            }}
            className="text-center border-x border-b-2 shadow-md shadow-[#43853d] border-[#43853d] w-2/3 mx-auto md:w-full"
          >
            <BiLogoNodejs className="text-[90px] text-[#43853d] mx-auto" />
            <span className="text-3xl">Node JS</span>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scaleX: 1.03,
              scaleY: 1.02,
              transition: "1s ease-in-out",
            }}
            className="text-center border-x border-b-2 shadow-md shadow-[#FFCB2B] border-[#FFCB2B] w-2/3 mx-auto md:w-full"
          >
            <BiLogoFirebase className="text-[90px] text-[#FFCB2B] mx-auto" />
            <span className="text-3xl">Firebase</span>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scaleX: 1.03,
              scaleY: 1.02,
              transition: "1s ease-in-out",
            }}
            className="text-center border-x border-b-2 shadow-md shadow-[#ffffff] border-[#ffffff] w-2/3 mx-auto md:w-full"
          >
            <SiNextdotjs className="text-[90px] text-[#ffffff] mx-auto" />
            <span className="text-3xl">Next.JS</span>
          </motion.div>
        </div>
        <div className="container mx-auto">
          <div>
            <h2 className="h2 text-center mb-10 mt-20">Tools</h2>
          </div>
          <div className="w-full mb-32 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{
                scaleX: 1.03,
                scaleY: 1.02,
                transition: "1s ease-in-out",
              }}
              className="text-center border-x border-b-2 shadow-md shadow-[#ffffff] border-[#ffffff] w-2/3 mx-auto md:w-full"
            >
              <BiLogoGithub className="text-[90px] text-[#ffffff] mx-auto" />
              <span className="text-3xl">GitHub</span>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{
                scaleX: 1.03,
                scaleY: 1.02,
                transition: "1s ease-in-out",
              }}
              className="text-center border-x border-b-2 shadow-md shadow-[#F24E1E] border-[#F24E1E] w-2/3 mx-auto md:w-full"
            >
              <BiLogoFigma className="text-[90px] text-[#F24E1E] mx-auto" />
              <span className="text-3xl">Figma</span>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{
                scaleX: 1.03,
                scaleY: 1.02,
                transition: "1s ease-in-out",
              }}
              className="text-center border-x border-b-2 shadow-md shadow-[#007ACC] border-[#007ACC] w-2/3 mx-auto md:w-full"
            >
              <TbBrandVscode className="text-[90px] text-[#007ACC] mx-auto" />
              <span className="text-3xl">Vs Code</span>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{
                scaleX: 1.03,
                scaleY: 1.02,
                transition: "1s ease-in-out",
              }}
              className="text-center border-x border-b-2 shadow-md shadow-[#6E56E6] border-[#6E56E6] w-2/3 mx-auto md:w-full"
            >
              <SiReactquery className="text-[90px] text-[#6E56E6] mx-auto" />
              <span className="text-3xl">TanStack Query</span>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{
                scaleX: 1.03,
                scaleY: 1.02,
                transition: "1s ease-in-out",
              }}
              className="text-center border-x border-b-2 shadow-md shadow-[#28A745] border-[#28A745] w-2/3 mx-auto md:w-full"
            >
              <SiJsonwebtokens className="text-[90px] text-[#28A745] mx-auto" />
              <span className="text-3xl">JWT</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
