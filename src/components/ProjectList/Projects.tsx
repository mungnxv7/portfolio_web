import ActionProject from "../ActionProject/ActionProject";
const Projects = () => {
  const projects = [
    {
      title: "Movie Fpoly",
      thumbnail:
        "https://res.cloudinary.com/drjinqspe/image/upload/v1710436179/lc1ytnpjw5idb4dulzwj.png",
      imageLanguages: ["react.png", "typescript.png", "tailwind.png"],
      LinkGit: "https://github.com/longdvph29867/movie-FE",
      linkDeploy: "http://moviefpoly.com",
      linkVideo: "",
    },
    {
      title: "Tocotoco Tea",
      thumbnail:
        "https://res.cloudinary.com/drjinqspe/image/upload/v1710436534/zmqtpiatsrxhwkl9jivu.png",
      imageLanguages: ["html.png", "css.png", "javascript.png"],
      LinkGit: " https://github.com/longdvph29867/toco_frontend",
      linkDeploy: "https://toco-frontend-tau.vercel.app",
      linkVideo: "",
    },
    {
      title: "Landing Page TOTC",
      thumbnail:
        "https://res.cloudinary.com/drjinqspe/image/upload/v1710436650/cctznrzuklfdgnkf4avt.png",
      imageLanguages: ["html.png", "tailwind.png"],
      LinkGit: "https://github.com/mungnguyen2k2/Xuong-HTML5-CSS3-nhom-6",
      linkDeploy: "https://xuong-html-5-css-3-nhom-6.vercel.app",
      linkVideo: "",
    },
  ];
  return (
    <div className="py-10 sm:py-16" id="projects">
      <div className="text-center mb-4 pb-2">
        <h2 className="capitalize mb-4 text-black text-3xl font-semibold">
          Projects
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-2xl mt-4 group"
          >
            <img
              src={project.thumbnail}
              className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full"
            />
            <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0" />
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-3 left-3 transition-all duration-500">
              <a
                className="text-white group-hover:text-white font-semibold text-lg uppercase"
                href={project.linkDeploy}
              >
                {project.title}
              </a>
              <div className="flex items-center gap-3">
                {project.imageLanguages.map((item) => (
                  <img className="w-5" src={item} />
                ))}
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
