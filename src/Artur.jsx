import MainContentA from "./components/MainContentArtur";
import SidebarArtur from "./components/SidebarArtur";


import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Artur Santos Nogueira</h1>
      <SidebarArtur/>
      <MainContentA/>
    </div>
  );
}

export default App;
