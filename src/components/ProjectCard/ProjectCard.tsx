import {
  Card,
  GitHubLink,
  Label,
  Participants,
  Period,
  Section,
  StackItem,
  StackList,
  Text,
  Thumbnail,
  Title,
} from "./ProjectCard.styles";

type Props = {
  title: string;
  period: string;
  participants: string;
  description: string;
  features: string;
  stack: string[];
  image: string;
  link: string;
};

const ProjectCard = ({
  title,
  period,
  participants,
  description,
  features,
  stack,
  image,
  link,
}: Props) => {
  return (
    <Card>
      <Thumbnail src={image} alt={title} />
      <Title>{title}</Title>
      <Period>{period}</Period>
      <Participants>{participants}</Participants>
      <Section>
        <Label>프로젝트 소개</Label>
        <Text>{description}</Text>
      </Section>
      <Section>
        <Label>구현 내용</Label>
        <Text>{features}</Text>
      </Section>
      <Section>
        <Label>기술 스택</Label>
        <StackList>
          {stack.map((tech) => (
            <StackItem key={tech}>{tech}</StackItem>
          ))}
        </StackList>
      </Section>
      <GitHubLink href={link} target="_blank" rel="noopener noreferrer">
        GitHub
      </GitHubLink>
    </Card>
  );
};

export default ProjectCard;
