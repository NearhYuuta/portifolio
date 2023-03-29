  import InformationContainer from "./InformationContainerArtur";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const SidebarArtur = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Artur" />
      <p className="title">Desenvolvedor</p>
      <InformationContainer />
    </aside>
  );
};

export default SidebarArtur;
