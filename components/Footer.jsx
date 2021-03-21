import React from "react";
import animation from "../styles/Animations.module.scss";
import styles from "../styles/Footer.module.scss";
import {
  faLinkedin,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Features</h5>
            <ul className="list-none footer-links">
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Cool stuff
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Random feature
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Team feature
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Developer talk
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Another one
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            <ul className="list-none footer-links">
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Resource
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Resource name
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Another resource
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">About</h5>
            <ul className="list-none footer-links">
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Team
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Locations
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Privacy
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Help</h5>
            <ul className="list-none footer-links">
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Support
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Help Center
                </a>
              </li>
              <li
                className={animation.slideFooter + " mb-2 " + styles.footerLink}
              >
                <a href="#" className={animation.slideText}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <a
                href=""
                className="w-8 h-8 border-2 overflow-hidden border-gray-400 rounded-full text-center py-1 text-gray-600 hover:shadow-md transition-shadow  "
              >
                <FontAwesomeIcon
                  className={"fa-lg  " + styles.footerSocialLink}
                  icon={faLinkedin}
                />
              </a>
              <a
                href=""
                className="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:shadow-md transition-shadow  "
              >
                <FontAwesomeIcon
                  className={"fa-lg  " + styles.footerSocialLink}
                  icon={faInstagram}
                />
              </a>
              <a
                href=""
                className="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:shadow-md transition-shadow  "
              >
                <FontAwesomeIcon
                  className={"fa-lg  " + styles.footerSocialLink}
                  icon={faFacebookSquare}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
