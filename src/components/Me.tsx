import styled from "styled-components";

function Me() {
  return (
    <MeStyle>
      <h1>ABOUT ME</h1>
      <InfoGrid>
        <InfoItem>
          <Label>👤 이름</Label>
          <Value>손지우</Value>
        </InfoItem>
        <InfoItem>
          <Label>🎂 생년월일</Label>
          <Value>2001.12.15</Value>
        </InfoItem>
        <InfoItem>
          <Label>📍 위치</Label>
          <Value>서울 구로구</Value>
        </InfoItem>
        <InfoItem>
          <Label>📞 연락처</Label>
          <Value>010-4499-2170</Value>
        </InfoItem>
        <InfoItem>
          <Label>🏫 학력</Label>
          <Value>덕성여자대학교 IT미디어공학과</Value>
        </InfoItem>
        <InfoItem>
          <Label>🎓 부트캠프</Label>
          <Value>프로그래머스 웹 풀스택 과정 6기</Value>
        </InfoItem>
      </InfoGrid>
    </MeStyle>
  );
}

export default Me;

const MeStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 1rem 1rem 4rem 1rem;
  text-align: center;
  h1 {
    font-weight: 900;
    -webkit-text-stroke: 1px black;
  }
`;

const InfoGrid = styled.div`
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

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 0.5rem;
`;

const Value = styled.div`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.fonts.primary};
`;
