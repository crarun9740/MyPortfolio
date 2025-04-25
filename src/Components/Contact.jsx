import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_96wx9ab", "template_lng2jpo", form.current, {
        publicKey: "QzoFdfuxGuCsBXmKy",
      })

      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          alert("Failed to send message: " + error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-white">Get in </span>
          <span className="text-blue-500">Touch</span>
        </h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-blue-200 mb-8">
              Feel free to reach out through any of these channels. I'm always
              open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 bg-blue-500/10 p-3 rounded-full">
                  <HiMail className="text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-lg">Email</h3>
                  <a
                    href="mailto:crarun9740@gmail.com"
                    className="text-blue-300 hover:text-blue-400 transition-colors"
                  >
                    crarun9740@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 bg-blue-500/10 p-3 rounded-full">
                  <FaGithub className="text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-lg">GitHub</h3>
                  <a
                    href="https://github.com/crarun9740"
                    className="text-blue-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/crarun9740
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 bg-blue-500/10 p-3 rounded-full">
                  <FaLinkedin className="text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-lg">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/arun-ramesh-chavan/"
                    className="text-blue-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/arun-ramesh-chavan/
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 bg-blue-500/10 p-3 rounded-full">
                  <FaInstagram className="text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-lg">Instagram</h3>
                  <a
                    href="https://www.instagram.com/c_r_arun78"
                    className="text-blue-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    instagram.com/c_r_arun78
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-lg font-medium">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="mt-2 p-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-lg font-medium">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="mt-2 p-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="mt-2 p-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-medium">Message</label>
                <textarea
                  name="message"
                  className="mt-2 p-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 min-h-[150px]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
