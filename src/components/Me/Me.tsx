import { InfoGrid, InfoItem, Label, MeStyle, Value } from "./Me.styles";

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
          <Value>서울 금천구</Value>
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

