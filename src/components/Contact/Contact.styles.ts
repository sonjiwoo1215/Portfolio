import styled from "styled-components";

export const ContactStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  a {
    text-decoration: none;
    color: ${({theme})=>theme.fonts.muted};
    transition: color 0.2s ease;

    &:hover {
      color: #4ade80;
    }
  }
  `;