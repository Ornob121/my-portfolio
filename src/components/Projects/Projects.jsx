import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isSliced, setIsSliced] = useState(false);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="min-h-[80vh] md:min-h-[75vh] mb-6 md:mb-20" id="projects">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className=" flex-1 flex flex-col gap-y-12 mb-10 lg:mb-10"
          >
            <h2 className="h2 leading-tight text-accent">My Projects</h2>
            <p className="max-w-sm mb-6">
              Over the past six months, I have built a collection of projects
              that highlight my skills in web development. My portfolio
              showcases my ability to tackle challenges and create impactful
              solutions.
            </p>
            <button
              onClick={() => setIsSliced(!isSliced)}
              className="btn1 w-64"
            >
              {isSliced ? "See Less Project" : "View All Project"}
            </button>
          </motion.div>
          {projects.slice(0, isSliced ? 6 : 3).map((project, i) => (
            <div
              className={`group relative overflow-hidden border-2 border-white/50 rounded-xl w-[350px] mx-auto md:w-[600px] h-[800px] md:h-[650px]`}
              key={i}
            >
              <div
                style={{
                  backgroundImage: `url(${project.projectImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  transition: "ease-in-out 8s",
                }}
                className="h-[300px] bg-top hover:bg-bottom"
              ></div>
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="pl-4 pt-4 text-gradient"
              >
                {project.projectTitle}
              </motion.div>
              <div className="pl-4">
                <span>{project.projectDetails}</span>
              </div>
              <div className="text-center absolute left-0 right-0 bottom-2">
                <button className="btn2 my-4">
                  <a href={project.liveSite} target="_blank" rel="noreferrer">
                    Live Site
                  </a>
                </button>
                <br />
                <button className={`btn1 mb-2 ${project.serverCode && "mr-4"}`}>
                  <a href={project.clientCode} target="_blank" rel="noreferrer">
                    Client Code
                  </a>
                </button>
                {project.serverCode && (
                  <button className="btn2 mb-2">
                    <a
                      href={project.serverCode}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Code
                    </a>
                  </button>
                )}
                <p>Technologies : {project.technologies}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
