import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Cards.module.scss";
import animation from "../styles/Animations.module.scss";
import utils from "../styles/Utils.module.scss";

export default function Card({ content }) {
  const { text, title, icon } = content;
  return (
    <article
      className={"md:my-12  rounded-lg shadow-md m-4 " + styles.cards__item}
    >
      <a href="#">
        <img
          alt="Placeholder"
          className="block h-auto w-full rounded-t-lg"
          src="https://picsum.photos/600/400/?random"
        />
      </a>

      <header className="flex items-center justify-between leading-tight p-4 sm:p-6 md:p-4">
        <h1 className="font-semibold text-xl lg:text-3xl">
          <a className="no-underline" href="#">
            {title}
          </a>
        </h1>
        <div className="relative">
          <FontAwesomeIcon className={"fa-3x " + styles.icon} icon={icon} />
        </div>
      </header>

      <footer className="flex flex-col items-center justify-between leading-none p-4 sm:p-6 sm:pb-2 md:p-4">
        <a className="flex items-center no-underline" href="#">
          <p className="text-sm lg:text-base h-28 min-h-40">{text}</p>
        </a>
        <div className={animation.slide + " flex justify-center mt-auto"}>
          <button
            className={
              animation.slideText +
              " underline font-bold py-2 px-4 hover:shadow-lg focus:outline-none focus:bg-gray-300 focus:shadow-md"
            }
          >
            Learn More
            <span className={utils.arrow + " ml-2"}></span>
          </button>
        </div>
      </footer>
    </article>
  );
}
