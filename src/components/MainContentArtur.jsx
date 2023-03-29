import AboutContainerA from "./AboutContainerArtur";
import ProjectsContainerA from "./ProjectsContainerA";
import Like from "./Like";
import Deslike from "./Deslike";

import "../styles/components/maincontent.sass";

const MainContentA = () => {
  return (
    <main id="main-content">
      <AboutContainerA />
      <ProjectsContainerA />
      <div className="likedeslike">
        <Like />
        <Deslike />
      </div>
    </main>
  );
};

export default MainContentA;
