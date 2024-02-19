import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ButtonScroll from "./components/ButtonScroll/ButtonScroll";
import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/Header";
import HeroStart from "./components/HeroStart/HeroStart";
import Projects from "./components/ProjectList/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="font-roboto h-20">
      <Header />
      <div className="min-h-[640px] bg-[url(./assets/img/shapes-bg.png)] bg-cover flex items-center">
        <HeroStart />
      </div>
      <div className="container">
        {/* About me */}
        <AboutMe />
        {/* Skils */}
        <Skills />
        {/* Project list */}
        <Projects />
      </div>
      <Footer />
      <ButtonScroll />
    </div>
  );
}

export default App;
