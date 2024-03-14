import { FaLaptopCode, FaAudible } from "react-icons/fa6";
import { IoLibrarySharp } from "react-icons/io5";
import { LiaFeatherSolid } from "react-icons/lia";
const Skills = () => {
  const skills = [
    {
      icon: <FaLaptopCode />,
      title: "Programing language",
      item: ["HTML/CSS", "JavaScript", "Angular"],
    },
    {
      icon: <IoLibrarySharp />,
      title: "Frameworks & libraries",
      item: [
        "ReactJs , Redux-Toolkit, Typescript",
        "NodeJs , Express, Mongodb",
        "Tailwind, Responsive design",
        "RESTful APIs",
        "Docker",
      ],
    },
    {
      icon: <LiaFeatherSolid />,
      title: "Management tools",
      item: ["Git", "Trello"],
    },
    {
      icon: <FaAudible />,
      title: "Soft skills",
      item: ["Teamwork/Collaboration", "Time management"],
    },
  ];
  return (
    <div className="py-10 sm:py-16" id="skills">
      <div className="text-center mb-4 pb-2">
        <h2 className="capitalize mb-4 text-black text-3xl font-semibold">
          Skills
        </h2>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {skills.map((sk, index) => (
          <div
            key={index}
            className="text-left rounded-xl bg-white py-8 px-5 transition-all duration-300 custom-cubic-bezier shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
          >
            <div className="text-primary mb-3 text-5xl">{sk.icon}</div>
            <div className="services-texts">
              <h3 className="font-bold mb-4 text-lg uppercase">{sk.title}</h3>
              <ul className="pl-5 text-sm">
                {sk.item.map((it, index) => (
                  <li
                    key={index}
                    className="font-normal text-base text-gray-600 list-disc"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
