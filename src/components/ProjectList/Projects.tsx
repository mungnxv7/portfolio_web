import ActionProject from "../ActionProject/ActionProject";
import ReactLogo from "../../assets/img/React-icon.svg.png";
import Tailwind from "../../assets/img/Tailwind_CSS_Logo.svg.png";
import ViteJs from "../../assets/img/Vitejs-logo.svg.png";
const Projects = () => {
  return (
    <div className="mt-24">
      <div className="text-center mb-4 pb-2">
        <h2 className="capitalize mb-4 text-black text-3xl font-semibold">
          Projects
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="relative overflow-hidden rounded-lg shadow-2xl mt-4 group">
          <img
            src="https://www.shutterstock.com/image-vector/anime-girl-kindhearted-spirit-befriends-600nw-2323507949.jpg"
            className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full"
          />
          <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0" />
          <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
            <a
              className="text-white group-hover:text-white font-semibold text-lg uppercase"
              href="/tailwind/queue/layout/page-portfolio-detail"
            >
              Iphone mockup
            </a>
            <div className="flex items-center gap-3 mt-2">
              <img className="w-5" src={ViteJs} alt="" />
              <img className="w-5" src={ReactLogo} alt="" />
              <img className="w-5" src={Tailwind} alt="" />
            </div>
          </div>
          <ActionProject />
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-2xl mt-4 group">
          <img
            src="https://t4.ftcdn.net/jpg/06/20/18/63/360_F_620186329_8mjJMsPcZQm5dSgVlMoZM0qQocHL7AZC.jpg"
            className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full"
          />
          <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0" />
          <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
            <a
              className="text-white font-semibold text-lg uppercase"
              href="/tailwind/queue/layout/page-portfolio-detail"
            >
              Mockup Collection
            </a>
            <div className="flex items-center gap-3 mt-2">
              <img className="w-5" src={ViteJs} alt="" />
              <img className="w-5" src={ReactLogo} alt="" />
              <img className="w-5" src={Tailwind} alt="" />
            </div>
          </div>
          <ActionProject />
        </div>
      </div>
    </div>
  );
};

export default Projects;
