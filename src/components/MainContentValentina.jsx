import AboutContainerV from "./AboutContainerValentina";
import ProjectsContainerV from "./ProjectsContainerV";
import Like from "./Like";
import Deslike from "./Deslike";

import "../styles/components/maincontent.sass";


const MainContentV = () => {
  return (
    <main id="main-content">
      <AboutContainerV />
      <ProjectsContainerV />
      <div className="likedeslike">
        <Like />
        <Deslike />
      </div>
    </main>
  );
};

export default MainContentV;
