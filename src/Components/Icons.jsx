import React from "react";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="flex flex-row mt-5 mb-5 text-3xl gap-5">
      <a
        href="https://www.linkedin.com/in/arun-ramesh-chavan/"
        target="_blank"
        className=" hover:text-blue-500"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        className=" hover:text-blue-500"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.hackerrank.com/profile/crarun9740"
        className=" hover:text-blue-500"
      >
        <FaHackerrank />
      </a>
    </div>
  );
};

export default Icons;
