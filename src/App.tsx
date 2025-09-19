import Header from "./components/Header";
import PresentationHome from "./components/PresentationHome/PresentationHome";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Thanks from "./components/Thanks/Thanks";


const App = () => {
  return (
    <div>
      <Header />
      <PresentationHome />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Thanks />
    </div>
  );
};

export default App;
