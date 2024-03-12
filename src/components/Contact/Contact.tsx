import "./Contact.css";
import CardContacts from "../CardContacts/CardContacts";
import email from "../../assets/email.png";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CardRedesSocias from "../CardRedesSociais/CardRedesSocias";

const props = {
  size: 30,
  color: "white",
};
const Contact = () => {
  return (
    <div className="containerContact" id="contact">
      <h2>Contact me</h2>

      <div className="contacts">
        <CardContacts text="davi@gmail.com" link="">
          <MdEmail {...props} />
        </CardContacts>
        <CardContacts
          text="Davi Ribeiro"
          link="https://www.linkedin.com/in/davi-ribeiro-894010232/"
        >
          <FaLinkedinIn {...props} />
        </CardContacts>
        <CardContacts
          text="(85) 98192-1495"
          link="https://wa.me/qr/6XGMCYXZXDMID1"
        >
          <FaWhatsapp {...props} />
        </CardContacts>
      </div>

      <CardRedesSocias />
    </div>
  );
};

export default Contact;
