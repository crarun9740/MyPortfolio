import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="text-blue-500 text-3xl flex gap-8 ml-10 mt-10">
      <a href="https://github.com/crarun9740" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/c_r_arun78?igsh=MTJkemN4bXR1bDg5dQ=="
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="www.linkedin.com/in/arun-ramesh-chavan"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Social;
