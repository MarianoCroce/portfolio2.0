import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import reduxImage from "../assets/redux.png";
import nodeImage from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Services = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: reduxImage,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: nodeImage,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  ];

  return (
    <div className="section w-full h-screen" id="services">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <motion.p 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="h2 leading-tight text-accent">
            Knoledges
          </motion.p>
          <motion.p 
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-sm mb-16">These are the technologies I've worked with</motion.p>
        </div>

        <motion.div 
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">

          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-28 h-28 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default Services;
