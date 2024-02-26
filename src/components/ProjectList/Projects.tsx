import ActionProject from "../ActionProject/ActionProject";
import viteReactTsTailwind from "../../assets/img/vite+react+ts+tailwind.png";
const Projects = () => {
  const projects = [
    {
      title: "Iphone mockup",
      thumbnail:
        "https://www.shutterstock.com/image-vector/anime-girl-kindhearted-spirit-befriends-600nw-2323507949.jpg",
      imageLanguages: viteReactTsTailwind,
      LinkGit: "",
      linkDeploy: "",
      linkVideo: "",
    },
    {
      title: "Iphone mockup",
      thumbnail:
        "https://www.shutterstock.com/image-vector/anime-girl-kindhearted-spirit-befriends-600nw-2323507949.jpg",
      imageLanguages: viteReactTsTailwind,
      LinkGit: "",
      linkDeploy: "",
      linkVideo: "",
    },
  ];
  return (
    <div className="py-10 sm:py-20" id="projects">
      <div className="text-center mb-4 pb-2">
        <h2 className="capitalize mb-4 text-black text-3xl font-semibold">
          Projects
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((project) => (
          <div className="relative overflow-hidden rounded-lg shadow-2xl mt-4 group">
            <img
              src={project.thumbnail}
              className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full"
            />
            <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0" />
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
              <a
                className="text-white group-hover:text-white font-semibold text-lg uppercase"
                href={project.linkDeploy}
              >
                {project.title}
              </a>
              <div className="flex items-center gap-3 mt-2">
                <img className="w-32" src={project.imageLanguages} alt="" />
              </div>
            </div>
            <ActionProject
              linkGithub={project.LinkGit}
              linkDeploy={project.linkDeploy}
              linkVideo={project.linkVideo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
