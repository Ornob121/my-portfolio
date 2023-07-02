import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
import pic from "../../assets/shadman1.png";
import { BiSolidFlag } from "react-icons/bi";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="min-h-[70vh] md:min-h-[60vh] mt-20 flex items-center mb-6 md:mb-20"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-7 items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={pic} className="mx-auto" alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="font-tertiary flex text-4xl items-center justify-center h2">
              About Me <BiSolidFlag className="text-red-500 font-bold" />
            </h2>
            <p className="text-center md:text-left">
              Hi, I'm Shadman Tahmid, a passionate and detail-oriented web
              developer with a drive to create elegant, efficient, and
              user-friendly web applications. With expertise in React.js,
              Node.js, Express.js, Firebase, and MongoDB, I am dedicated to
              delivering exceptional user experiences. Let's collaborate and
              bring your ideas to life!
            </p>
            <div className="px-4 md:px-0 ">
              <div className="mt-4 mb-6">
                <div className="text-4xl font-tertiary text-[#00abf0]">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}{" "}
                  +
                  <div className="text-sm tracking-[2px] font-primary">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>
            <button className="btn1 ml-4 md:ml-0">
              <a
                href="https://drive.google.com/file/d/11K8RCCgoZmKJO786TTPcNHtlFXy79VZB/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                My Resume
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
