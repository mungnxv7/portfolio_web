import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ButtonScroll from "./components/ButtonScroll/ButtonScroll";
import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/Header";
import HeroStart from "./components/HeroStart/HeroStart";
import Projects from "./components/ProjectList/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  const info = {
    title: "Nguyen Xuan Mung",
    major: "Front-End Development",
    linkCV: "",
  };
  return (
    <div className="font-roboto relative" id="home">
      <Header title={info.title} />
      <HeroStart major={info.major} linkCV={info.linkCV} title={info.title} />
      <div className="px-3 sm:container">
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
