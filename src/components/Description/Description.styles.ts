import styled from "styled-components";


export const DescriptionStyle = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-color: ${({theme})=> theme.colors.dark};

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Section = styled.div`
  max-width: 1000px;
  margin: 0 auto 3rem auto;
  padding: 2rem;
  background-color: ${({theme})=> theme.colors.lightDark};
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const Title = styled.h3`
  display: inline-block;
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${({theme})=> theme.colors.border};
  padding-left: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding-left: 0.5rem;
  }
`;

export const List = styled.ul`
  list-style: disc;
  padding-left: 12rem;
  color: ${({theme})=>theme.fonts.inverse};
  line-height: 1.8;
  font-size: 1.05rem;
  text-align: start;

  li + li {
    margin-top: 0.75rem;
  }

  @media (max-width: 768px) {
    padding-left: 2rem;
    font-size: 1rem;
  }

`;