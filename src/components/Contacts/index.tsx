import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import contactImage from "../../assets/contactImage.png";
import { Infos } from "../Infos";
import { SocialMedia } from "../SocialMedia";
import "./styles.css";

export function Contacts() {
    return <section className="contactsSection">
        <div className="contactsDiv">
            <div>
                <Infos title="Endereço" description="Recife, Pernambuco" />
                <Infos title="Email" description="cauagnp13@gmail.com" />
            </div>
            <h1 className="socialMediaContatsTitle">Redes Sociais</h1>
            <div className="socialMediaContact">
                <SocialMedia title="GitHub" link="https://github.com/CauaGNP">
                    <FaGithub />
                </SocialMedia>
                <SocialMedia title="Linkedin" link="https://www.linkedin.com/in/caua--gabriel">
                    <FaLinkedin />
                </SocialMedia>
                <SocialMedia title="Instagram" link="https://www.instagram.com/cauagnpofc_/">
                    <FaInstagram />
                </SocialMedia>
            </div>
        </div>
        <img src={contactImage} alt="Contact Image" className="contactImage" />
    </section>
}