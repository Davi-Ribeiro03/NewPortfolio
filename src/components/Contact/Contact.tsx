import "./Contact.css";
import CardContacts from "../CardContacts/CardContacts";
import email from "../../assets/email.png";
import CardRedesSocias from "../CardRedesSociais/CardRedesSocias";

const Contact = () => {
  return (
    <div className="containerContact" id="contact">
      <h2>Contact me</h2>

      <div className="contacts">
        <CardContacts img={email} text="davi@gmail.com" />
        <CardContacts img={email} text="davi@gmail.com" />
        <CardContacts img={email} text="davi@gmail.com" />
      </div>

      <CardRedesSocias />
    </div>
  );
};

export default Contact;
