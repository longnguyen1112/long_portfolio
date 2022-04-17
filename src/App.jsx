import About from "./components/aboutme/About";
import Contact from "./components/contact/Contact";
import Toggle from "./components/dark_mode/Toggle";
import Intro  from "./components/intro/Intro";
import ProjectList from "./components/project_list/ProjectList";
import { useContext } from "react";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
  <div style={{backgroundColor: darkMode ? "#222": "white", color: darkMode && "white"}}>
    <Toggle></Toggle>
    <Intro></Intro>
    <About></About>
    <ProjectList></ProjectList>
    <Contact></Contact>
  </div>
  );

};

export default App;