import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Cards.module.scss";

export default function Card({ content }) {
  const { text, title, icon, rating } = content;
  return (
    <article
      className={"md:my-12  rounded-lg shadow-md m-4 " + styles.cards__item}
    >
      <a href="#">
        <img
          alt="Placeholder"
          className="block h-auto w-full lg:rounded-t-lg"
          src="https://picsum.photos/600/400/?random"
        />
      </a>

      <header className="flex items-center justify-between leading-tight p-4 sm:p-6 md:p-4">
        <h1 className="font-semibold text-3xl">
          <a className="no-underline" href="#">
            {title}
          </a>
        </h1>
        <div className="relative">
          <FontAwesomeIcon className={"fa-3x " + styles.icon} icon={icon} />
        </div>
      </header>

      <footer className="flex items-center justify-between leading-none p-4 sm:p-6 md:p-4">
        <a className="flex items-center no-underline" href="#">
          <p className="text-base">{text}</p>
        </a>
        <a
          className="no-underline text-grey-darker hover:text-red-dark"
          href="#"
        >
          <span className="hidden">{rating}</span>
          <i className="fa fa-heart"></i>
        </a>
      </footer>
    </article>
  );
}
