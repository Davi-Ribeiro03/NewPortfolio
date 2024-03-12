import { ReactNode } from "react";
import "./CardContacts.css";

interface CardContactsType {
  link: string;
  text: string;
  children?: ReactNode;
}

const CardContacts = ({ link, text, children }: CardContactsType) => {
  return (
    <div className="cardContacts">
      {children}
      <a href={link}>{text}</a>
    </div>
  );
};

export default CardContacts;
