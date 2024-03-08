import "./CardContacts.css";

interface CardContactsType {
  img: string;
  text: string;
}

const CardContacts = ({ img, text }: CardContactsType) => {
  return (
    <div className="cardContacts">
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default CardContacts;
