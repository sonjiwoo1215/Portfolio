import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Speakiz",
    description: "아동의 언어 훈련을 위한 게임 기반 웹 앱",
    stack: ["Unity"],
    image: "/images/speakiz.png",
    link: "https://github.com/sonjiwoo1215/I-m20",
  },
  {
    title: "Book-store",
    description: "북스토어",
    stack: ["mariaDB"],
    image: "/images/fridge.png",
    link: "https://github.com/sonjiwoo1215/Book_store",
  },
];

const ProjectList = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
