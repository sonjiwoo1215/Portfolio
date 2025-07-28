import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  white-space: pre-line;

  &:hover {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.2rem;
`;

export const Title = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
`;

export const Period = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.fonts.muted};
  margin: 0.1rem;
`;

export const Participants = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.fonts.muted};
  margin: 0.1rem;
`;

export const Section = styled.div`
  margin-bottom: 1.2rem;
`;

export const Label = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors.border};
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.5;
`;

export const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-left: 0;
  margin: 0;
  list-style: none;
`;

export const StackItem = styled.li`
  background: #e8e8e8;
  color: ${({ theme }) => theme.fonts.primary};
  font-size: 0.8rem;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  list-style: none;
`;

export const GitHubLink = styled.a`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.border};
  font-weight: 600;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;