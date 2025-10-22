import styled from "styled-components";

export const ExperienceStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem 1rem 4rem 1rem;
  text-align: center;

  h1 {
    font-weight: 900;
    -webkit-text-stroke: 1px black;
    font-size: 2.5rem;
  }

  .experience-item {
    background-color: ivory;
    border-radius: 12px;
    padding: 2rem;
    margin: 1rem auto;
    max-width: 1000px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: left;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 0.9rem;
      color: gray;
      display: block;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }

    ul {
      list-style: disc;
      margin-left: 1.5rem;
      li {
        margin-bottom: 0.8rem;
        line-height: 1.5;
      }
    }

    p {
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: 2rem;
    }

    .experience-item {
      padding: 1.5rem;
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.7rem;
    }

    .experience-item {
      padding: 1rem;
      h2 {
        font-size: 1.3rem;
      }
      h3 {
        font-size: 1rem;
      }
      ul {
        margin-left: 1rem;
      }
    }
  }
`;
