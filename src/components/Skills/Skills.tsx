const Skills = () => {
  return (
    <div className="mt-20 pt-2">
      <div className="text-center mb-4 pb-2">
        <h2 className="capitalize mb-4 text-black text-3xl font-semibold">
          Skills
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="text-left rounded-xl bg-white py-8 px-5 transition-all duration-300 custom-cubic-bezier shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
          <div className="text-primary mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-monitor fea icon-md h-9 w-9"
            >
              <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
              <line x1={8} y1={21} x2={16} y2={21} />
              <line x1={12} y1={17} x2={12} y2={21} />
            </svg>
          </div>
          <div className="services-texts">
            <h3 className="font-bold mb-4 text-lg uppercase">
              Programing language
            </h3>
            <ul className="pl-5 text-sm">
              <li className="font-normal text-base text-gray-600 list-disc">
                HTML/CSS
              </li>
              <li className="font-normal text-base text-gray-600 list-disc">
                JavaScript
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left rounded-xl bg-white py-8 px-5 transition-all duration-300 custom-cubic-bezier shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
          <div className="text-primary mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-feather fea icon-md h-9 w-9"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
              <line x1={16} y1={8} x2={2} y2={22} />
              <line x1="17.5" y1={15} x2={9} y2={15} />
            </svg>
          </div>
          <div className="services-texts">
            <h3 className="mb-4 font-bold text-lg uppercase">
              Frameworks & libraries
            </h3>
            <ul className="pl-5 text-sm">
              <li className="font-normal text-base text-gray-600 list-disc">
                ReactJs , Redux-Toolkit
              </li>
              <li className="font-normal text-base text-gray-600 list-disc">
                Node.js , Express
              </li>
              <li className="font-normal text-base text-gray-600 list-disc">
                Tailwind, Responsive design
              </li>
              <li className="font-normal text-base text-gray-600 list-disc">
                RESTful APIs
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left rounded-xl bg-white py-8 px-5 transition-all duration-300 custom-cubic-bezier shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
          <div className="text-primary mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-disc fea icon-md h-9 w-9"
            >
              <circle cx={12} cy={12} r={10} />
              <circle cx={12} cy={12} r={3} />
            </svg>
          </div>
          <div className="services-texts">
            <h3 className="mb-4 font-bold text-lg uppercase">
              Management tools
            </h3>
            <ul className="pl-5 text-sm">
              <li className="font-normal text-base text-gray-600 list-disc">
                Git
              </li>
              <li className="font-normal text-base text-gray-600 list-disc">
                Trello
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left rounded-xl bg-white py-8 px-5 transition-all duration-300 custom-cubic-bezier shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
          <div className="text-primary mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-layout fea icon-md h-9 w-9"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={3} y1={9} x2={21} y2={9} />
              <line x1={9} y1={21} x2={9} y2={9} />
            </svg>
          </div>
          <div className="services-texts">
            <h3 className="mb-4 font-bold text-lg uppercase">Soft skills</h3>
            <ul className="pl-5 text-sm">
              <li className="font-normal text-base text-gray-600 list-disc">
                Teamwork/Collaboration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
