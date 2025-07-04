import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} className="w-8" alt="" />
              <h3 className="text-4xl font-bold">Suggesto</h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Your trusted platform for finding the best product alternatives.
              Get personalized recommendations from our community of experts and
              enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/cristiano7sadi"
                target="_blank"
                className="text-white hover:text-blue-500 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com/chainless_slave1.0"
                target="_blank"
                className="text-white hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/imam-hasan-jami"
                target="_blank"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/imam-hasan-jami"
                target="_blank"
                className="text-white hover:text-gray-600 transition-colors"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">
              Legal & Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-white hover:text-gray-300 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white hover:text-gray-300 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white hover:text-gray-300 transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white hover:text-gray-300 transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white hover:text-gray-300 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt
                  className="text-white flex-shrink-0"
                  size={16}
                />
                <div className="text-white text-sm">
                  <p>Bashundhara R/A, Dhaka</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-white flex-shrink-0" size={16} />
                <a
                  href="tel:+1234567890"
                  className="text-white hover:text-gray-300 transition-colors text-sm"
                >
                  +88 016 2700 3189
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white flex-shrink-0" size={16} />
                <a
                  href="mailto:imam.sadi92@gmail.com"
                  className="text-white hover:text-gray-300 transition-colors text-sm"
                >
                  info@suggesto.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2025 Suggesto. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <p>Developed by IMAM HASAN JAMI</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
