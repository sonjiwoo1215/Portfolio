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
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  h1 {
    font-weight: 900;
  }
`;

const InfoGrid = styled.div`
  /* background-color: lightgreen;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); */

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
  color: #555;
  margin-bottom: 0.5rem;
`;

const Value = styled.div`
  font-size: 1.125rem;
  color: #333;
`;
