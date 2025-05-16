type Props = {
    title: string;
    description: string;
    stack: string[];
    image: string;
    link: string;
  };
  
  const ProjectCard = ({ title, description, stack, image, link }: Props) => {
    return (
      <div className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <ul className="flex flex-wrap gap-2 text-xs text-gray-500">
          {stack.map((tech) => (
            <li key={tech} className="bg-gray-100 px-2 py-1 rounded">{tech}</li>
          ))}
        </ul>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-teal-600 hover:underline"
        >
          GitHub
        </a>
      </div>
    );
  };
  
  export default ProjectCard;
  