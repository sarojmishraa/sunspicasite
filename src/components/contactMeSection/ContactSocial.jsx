import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial 
        link="https://www.linkedin.com/in/sarojmishraa/" 
        Icon={FaLinkedinIn} 
        color="#0A66C2" 
        hoverEffect="rotate-180"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SingleContactSocial 
        link="https://github.com/sarojmishraa" 
        Icon={FiGithub} 
        color="#333" 
        hoverEffect="rotate-180"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SingleContactSocial 
        link="https://wa.me/qr/W6HKIYEW34WGD1" 
        Icon={FaWhatsapp} 
        color="#25D366" 
        hoverEffect="rotate-180"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SingleContactSocial 
        link="https://www.instagram.com/mishra.yuvrajj/?hl=en"  
        Icon={FaInstagram} 
        color="#E4405F" 
        hoverEffect="rotate-180"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};

export default ContactSocial;
