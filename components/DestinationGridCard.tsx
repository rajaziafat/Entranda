import React from "react";
import DestinationCard from "./DestinationCard";

interface CardData {
  title: string;
  subtitle: string;
  img: string;
  link: string;
}

interface Props {
  data: Array<CardData>;
}

function DestinationGridCard(props: Props) {
  return (
    <div className="destination-grid">
      {props.data.map((item: CardData, index) => (
        <DestinationCard
          key={index}
          link={item.link}
          title={item.title}
          subtitle={item.subtitle}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default DestinationGridCard;
