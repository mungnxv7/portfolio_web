import "./actionProject.css";
import github from "../../assets/img/github.svg";
import live from "../../assets/img/live.svg";
import play from "../../assets/img/play.svg";
type Props = {
  linkGithub: string;
  linkDeploy: string;
  linkVideo: string;
};
const ActionProject = ({ linkDeploy, linkGithub, linkVideo }: Props) => {
  return (
    <div className="absolute z-10 opacity-0 group-hover:opacity-80 right-0 left-0 top-1/3 flex items-center justify-center gap-4 duration-500">
      <div
        className={`${linkGithub ? "block" : "hidden"} flex relative action`}
      >
        <a href={linkGithub} className="bg-white rounded-full p-[2px]">
          <img className="w-6 h-6" src={github} alt="" />
        </a>
        <div className="absolute -top-full -translate-y-1/3 right-1/2 translate-x-1/2 w-max duration-300 title-action">
          <p className="bg-white text-primary px-2 py-1 rounded-lg text-xs">
            Source Code
          </p>
          <div className="absolute border-[8px] border-t-white border-x-transparent border-b-transparent left-1/2 -translate-x-1/2 top-full"></div>
        </div>
      </div>
      <div
        className={`${linkDeploy ? "block" : "hidden"} flex relative action`}
      >
        <a href={linkDeploy} className="bg-white rounded-full p-[2px]">
          <img className="w-6 h-6" src={live} alt="" />
        </a>
        <div className="absolute -top-full -translate-y-1/3 right-1/2 translate-x-1/2 w-max duration-300 title-action">
          <p className="bg-white text-primary px-2 py-1 rounded-lg text-xs">
            Live Demo
          </p>
          <div className="absolute border-[8px] border-t-white border-x-transparent border-b-transparent left-1/2 -translate-x-1/2 top-full"></div>
        </div>
      </div>
      <div className={`${linkVideo ? "block" : "hidden"} flex relative action`}>
        <a href={linkVideo} className="bg-white rounded-full p-[2px]">
          <img className="w-6 h-6" src={play} alt="" />
        </a>
        <div className="absolute -top-full -translate-y-1/3 right-1/2 translate-x-1/2 w-max duration-300 title-action">
          <p className="bg-white text-primary px-2 py-1 rounded-lg text-xs">
            Video Demo
          </p>
          <div className="absolute border-[8px] border-t-white border-x-transparent border-b-transparent left-1/2 -translate-x-1/2 top-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ActionProject;
