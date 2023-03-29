
import InformationContainer from "./InformationContainerValentina";

import Avatar1 from "../img/eu1.jpg";

import "../styles/components/sidebar.sass";

const SidebarValentina = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar1} alt="Valentina" />
      <p className="title">Desenvolvedor</p>
      <InformationContainer />
      
    </aside>
  );
};

export default SidebarValentina;
