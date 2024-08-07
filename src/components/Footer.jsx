import React from "react";
import logo from "../assets/logo2.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className=" mb-4 mt-20">
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{opacity:1}}
          src={logo}
          width={200}
          className=" mt-20"
        />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2,delay:index*0.5 }}
          whileInView={{opacity:1}}
            href={link.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
