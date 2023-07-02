import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const emailUserId = import.meta.env.VITE_EMAIL_USER_ID;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailServiceId, emailTemplateId, form.current, emailUserId)
      .then(
        (result) => {
          console.log(result.text);
          toast("Message Sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className="mb-[400px] px-10 md:px-0 mt-[500px] lg:my-28 section"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <h4 className="text-xl uppercase font-medium mb-2 tracking-wide text-accent">
              Get In Touch
            </h4>
            <h2 className="text-[45px] uppercase lg:text-[90px] leading-none mb-12">
              Let's Work <br /> Together!
            </h2>
            <p className="flex items-center gap-x-4 pb-2">
              <HiOutlineMail className="text-4xl" /> shadmantahmid121@gmail.com
            </p>
            <p className="flex items-center gap-x-4 pb-2">
              <FiPhoneCall className="text-4xl" /> +8801767367722
            </p>
            <p className="flex items-center gap-x-4">
              <TfiLocationPin className="text-4xl" /> Shariatpur District,
              Bangladesh
            </p>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <div className="w-full  md:w-3/4 pb-5 mx-auto">
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                name="user_name"
                id=""
                placeholder="Your Name"
              />
            </div>
            <div className="w-full md:w-3/4 pb-1 md:mx-auto">
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mx-auto"
                type="email"
                name="user_email"
                required
                id=""
                placeholder="Your Email"
              />
            </div>
            <div className="w-full md:w-3/4 pb-5  mx-auto">
              <textarea
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12 mx-auto"
                name="message"
                required
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="w-full text-center">
              <button className="btn2" type="submit">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
