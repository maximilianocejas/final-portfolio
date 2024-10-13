
import {Header }from "./components/Header";
import Proyects from "./components/Proyects";
import ProyectsDesktop from "./components/ProyectsDesktop";
import ProyectsMobile from "./components/ProyectsMobile";
import Stack from "./components/Stack";


function App() {

  return (
  <>
      <Header/>
      {/* <ProyectsDesktop/> */}
      <Proyects/>
      <ProyectsMobile/>

      <Stack/>
  </>
  );
}

export default App;
