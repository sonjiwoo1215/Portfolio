import { ContactStyle } from "./Contact.styles";

function Contact() {
  return (
    <ContactStyle>
      <a
        href="mailto:jiwoo211500@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
      </a>
      <a
        href="https://github.com/sonjiwoo1215"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        Blog
      </a>
    </ContactStyle>
  );
}

export default Contact;