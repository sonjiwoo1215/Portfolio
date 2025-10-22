import {ExperienceStyle } from "./Experience.styles";

function Experience() {
  return (
    <ExperienceStyle>
      <h1>EXPERIENCE</h1>

      <div className="experience-item">
        <h2>(주)퀄리소프트</h2>
        <span>개발팀 웹 개발자 인턴 | 2025.08 - 2025.10 (2개월)</span>

        <h3>Description</h3>
        <p>
          <strong>Microsoft Dynamics 365 CRM 공식 협력사</strong>로, 기업 맞춤형 솔루션과 IT 지원 시스템을 제공하는 회사입니다.<br />
          개발팀에서 웹 개발 직무를 담당하며 <strong>2개월간 인턴</strong>으로 근무했습니다.<br />
          CRM 주요 모듈의 기능 개선, 신규 기능 개발, 다국어(i18n) 지원 등 프론트엔드와 백엔드를 아우르는 풀스택 경험을 수행했습니다.
        </p>

        <h3>What did I do</h3>
        <ul>
          <li>
            자사 CRM 시스템에 휴가 및 반반차 기능 추가 등 신규 기능 개발 수행
          </li>
          <li>
            고객사로부터 보고된 오류에 대해 디버깅 및 직접 수정을 통해 시스템 안정성 개선
          </li>
          <li>
            <strong>대기업 CRM 프로젝트에 참여하여</strong> 기존 기능 오류 수정 및 개선, 신규 페이지 및 부족 기능 추가 개발, 
            <br/> 백엔드 쿼리 작성 및 데이터 가공을 통한 프론트엔드 연동 구현,<br /> React-i18next를 활용하여 CRM 시스템의 한국어/영어 다국어 지원(i18n) 기능 개발
          </li>
          <li>
            프론트엔드부터 백엔드까지 전 과정을 담당하며 풀스택 개발 경험 습득
          </li>
        </ul>

        <h3>Tech Stack</h3>
        <ul>
          <li><strong>Frontend:</strong> React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, jQuery, Vue.js</li>
          <li><strong>Backend:</strong> ASP.NET Core(C#), Node.js, MS SQL</li>
          <li><strong>DevOps / Cloud:</strong> Docker, Microsoft Azure</li>
        </ul>
      </div>
    </ExperienceStyle>
  );
}


export default Experience;

