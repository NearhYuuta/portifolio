import proj1 from "../img/proj_minhaloja.png"
import proj2 from "../img/proj_loginphp&mysql.png"
const ProjectsContainerA = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <img src={proj1} alt="" />
      <img src={proj2} alt="" />
    </section>
  );
};

export default ProjectsContainerA;
