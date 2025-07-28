import { DescriptionStyle, List, Section, Title } from "./Description.styles";

function Description() {
  return (
    <DescriptionStyle>
      <div>
        <Section>
          <Title>저는 이런 개발자가 되고 싶습니다.</Title>
          <List>
            <li>
              중복을 최소화하고, 의미 없는 코드와 의도를 알기 어려운 코드를
              지양합니다.
            </li>
            <li>
              AI에 의존하기보다는 현명하게 활용하여 반복적인 작업을 줄이고, 효율적인 개발을 추구합니다.
            </li>
            <li>
              저는 화려한 시각효과보다는 사용자 중심의 직관적인 인터페이스를
              중요하게 생각합니다.
            </li>
            <li>
              다양한 디바이스 환경 속에서도 일관되고
              유연한 사용자 경험을 위해 노력합니다.
            </li>
          </List>
        </Section>

        <Section>
          <Title>저는 이렇게 협업합니다.</Title>
          <List>
            <li>
              Git과 GitHub를 활용해 효율적으로 버전을 관리하고 기록을 남깁니다.
            </li>
            <li>Figma를 활용해 UI를 설계하고 시각적으로 소통합니다.</li>
            <li>
              소통이 잘 되는 협업을 중요하게 생각하며, 궁금하거나 원하는 바를
              명확히 표현합니다.
            </li>
            <li>
              기록하는 습관을 통해 함께 일하는 팀에게 도움이 되는 개발자가
              되고자 합니다.
            </li>
          </List>
        </Section>
      </div>
    </DescriptionStyle>
  );
}


export default Description;
