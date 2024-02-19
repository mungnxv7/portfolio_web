const HeroStart = () => {
  return (
    <div className="px-12">
      <div className="text-sm">
        <div className="flex items-center rounded-3xl w-max bg-white shadow py-2 px-3.5 relative mb-4 text-sm">
          <span className="bg-primary w-10 h-10 flex items-center justify-center rounded-3xl py-1 px-2.5 me-1 text-xs text-white font-bold">
            <svg
              className="w-[36px] h-[36px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
              />
            </svg>
          </span>
          <span className="text-lg ml-2 font-semibold">
            Front-End Developer
          </span>
        </div>
        <h1 className="md:text-5xl/tight text-3xl text-black font-bold mb-4 ">
          Hello! I'am <br /> Nguyen Xuan Mung
        </h1>

        <div className="mt-4 pt-2">
          <a className="py-3 px-5 cursor-pointer rounded-lg text-white border-primary bg-primary  hover:-translate-y-1 mb-3">
            Download CV
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
              className="feather feather-download fea icon-sm inline-block h-4 w-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1={12} y1={15} x2={12} y2={3} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroStart;
