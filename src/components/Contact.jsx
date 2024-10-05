import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { toast } from 'react-toastify';

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const rseetForm = () => setFormData({ name: '', email: '', message: '' })

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.sendForm('service_oa9ohen', 'template_398n3gi', e.target, 'user_mVjaxwbe0g7r65vGy3BSY')
      .then((result) => {
          setLoading(false)
          rseetForm()
          toast.success('Email sent successfully!')
      }, (error) => {
          setLoading(false)
          toast.error('Failed to send email, please try again.');
      });
  };

  const text = "Contact"
  const [header, setHeader] = useState(text);
  const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  function animate() {
    let iteration = 0;
    let interval = setInterval(() => {
      setHeader("");
      let newStr = "";
      text.split("").forEach((element, index) => {
        let char = ALPHABETS[Math.round(Math.random() * 26)] ?? "M";
        if (index < iteration) {
          char = text[index];
        }
        newStr += char;
      });
      setHeader(newStr);
      iteration += 1;
      if (iteration > text.length) {
        clearInterval(interval);
      }
    }, 60);
  }

  useEffect(() => {
    controls.start("show");
    animate()
  }, [controls]);

  return (
    <div
      className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
      >
        <h3 className={styles.sectionText} onMouseEnter={animate}>{header}</h3>

        <form
          onSubmit={sendEmail}
          className="mt-12 gap-4 flex flex-col"
        >
          <span className='text-white font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            value={formData.name} 
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="bg-primary p-4 text-white border font-medium"
          />
          <span className='text-white font-medium mt-3'>Email Address</span>
          <input
            type="text"
            name="email"
            value={formData.email} 
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            className="bg-primary p-4 text-white border font-medium"
          />
          <span className='text-white font-medium mt-3'>Message</span>
          <textarea
            name="message"
            value={formData.message} 
            onChange={handleChange}
            required
            placeholder="Enter your message"
            rows="10"
            className="bg-primary p-4 text-white border font-medium"
          />

          <div className="flex justify-between items-center w-full">

            <button
              type="submit"
              className='bg-tertiary py-3 px-8 text-white font-bold shadow-md shadow-primary transition-all duration-500 transform hover:scale-110 hover:bg-indigo-500 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400 hover:animate-pulse'
            >
              {loading ? "Sending..." : "Send Mail"}
            </button>

            <a 
              className='bg-secondary py-3 px-8 text-tertiary font-bold shadow-md shadow-primary transition-all duration-500 transform hover:scale-110 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-500 hover:animate-pulse'
              href="https://www.linkedin.com/in/manish-pathak-83996a211/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Reach on LinkedIn
            </a>

          </div>

        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");