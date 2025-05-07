import styled from "styled-components";

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

const ContactStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #ffffff;
    opacity: 50%;
    transition: color 0.2s ease;

    &:hover {
      color: #4ade80;
    }
  }
`;

export default Contact;
