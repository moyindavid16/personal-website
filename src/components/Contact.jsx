import { contacts } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

// eslint-disable-next-line react/prop-types
const ContactItem = ({name, icon, link}) => {
  return (
    <div className="flex text-taupe gap-4">
      <img src={icon} className="h-6 w-6" />
      <a href={link}>{name}</a>
    </div>
  );
};

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] flex-col 
      flex gap-4 overflow-hidden"
    >
      <p className={[styles.sectionSubText, "text-white"]}>Get in touch</p>
      {contacts.map((contact, index)=> (
        <ContactItem {...contact} key={index}/>
      ))}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
