import React from "react";
import Card from "../components/Card";
import {
  faDatabase,
  faBalanceScaleLeft,
  faDraftingCompass,
  faSimCard,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Cards.module.scss";

export default function CardDeck() {
  const services = [
    {
      id: 1,
      title: "Data Analysis",
      icon: faDatabase,
      text:
        "Engineering and good data drives business. Insights allow for effecient usage of resources and higher return on investment.",
      rating: 99,
    },
    {
      id: 2,
      title: "Influence:Risk",
      icon: faBalanceScaleLeft,
      text:
        "Every corporate entities that taking risks is a necessity for growth. Creating strategic risks allow for maximum improvement while curbing dynamic loss.",
      rating: 99,
    },
    {
      id: 3,
      title: "Iterative Design",
      icon: faDraftingCompass,
      text:
        "Every engineering firm knows that taking risks is a necessity for growth. Creating strategic risks allow for maximum improvement while curbing dynamic loss.",
      rating: 99,
    },
    {
      id: 4,
      title: "Corporate Espionage",
      icon: faSimCard,
      text:
        "Data is vital to the success of your company and obtaining the enemy's is vital to achieving total control of the market.",
      rating: 99,
    },
  ];

  return (
    <div className="bg-gray-100 border-opacity-50 p-2 md:px-12 md:p-8 mb-12 shadow-lg rounded-t-lg">
      <div className="">
        <h1 className="text-3xl text-center mt-4 mb-2 font-semibold">
          Services and Technologies
        </h1>
        <h3 className="text-xs text-center italic">
          Mull Solutions specializes in these four critical sectors:
        </h3>
      </div>
      <div id="services" className={"my-1 " + styles.cards}>
        {services.map((i) => {
          return <Card content={i} key={i.id}></Card>;
        })}
      </div>
    </div>
  );
}
