interface ProjectListProps {
  id: number;
  title: string;
  active: string | boolean;
  setSelected: (id: number) => void; // Add this prop to the interface
}

const ProjectList: React.FC<ProjectListProps> = ({
  title,
  active,
  setSelected,
  id,
}) => {
  return (
    <li
      className={active ? "portfoliolist active" : "portfoliolist"}
      id={`portfoliolist-${id}`} // Use the id prop to create a unique ID
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default ProjectList;
