import styled from "styled-components";

export const MeStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 1rem 1rem 4rem 1rem;
  text-align: center;
  h1 {
    font-weight: 900;
    -webkit-text-stroke: 1px black;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  margin-top: 2rem;
  column-gap: 1.5rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 0.5rem;
`;

export const Value = styled.div`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.fonts.primary};
`;