import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* background: linear-gradient(to bottom, white, #f3f4f6); */
  background-color: white;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

export const ProfileImage = styled(motion.img)`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.fonts.accent};
  text-align: left;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Description = styled.div`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.fonts.secondary};
  max-width: 40rem;
  font-weight: 500;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.border};
`;
