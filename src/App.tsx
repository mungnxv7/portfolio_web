import "./App.css";

function App() {
  return (
    <div className="container font-roboto h-20">
      <div className="flex items-center justify-between h-20">
        <h1 className="font-bold text-3xl text-blue-600 uppercase px-12">
          NGUYEN XUAN MUNG
        </h1>
        <div>
          <ul className="flex items-center gap-5 font-medium">
            <li className="text-primary font-medium hover:text-primary px-3 py-1 rounded-lg transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="px-3 py-1 hover:text-primary cursor-pointer transition duration-300">
              About
            </li>
            <li className="px-3 py-1 hover:text-primary cursor-pointer transition duration-300">
              Skills
            </li>
            <li className="px-3 py-1 hover:text-primary cursor-pointer transition duration-300">
              Project
            </li>
            <li className="px-3 py-1 hover:text-primary cursor-pointer transition duration-300">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen bg-[url(./assets/img/home-shape.png)] flex items-center">
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
      </div>
      {/* About me */}
      <div>
        <div className="text-center mb-4 pb-2">
          <h2 className="capitalize mb-4 text-black text-3xl font-semibold">
            About Me
          </h2>
        </div>
        <div className="rounded-xl relative flex min-w-0 bg-white shadow px-6">
          <div className="p-6">
            <div className="grid lg:grid-cols-12 sm:grid-cols-1 md:grid-cols-12 gap-6">
              <div className="lg:col-span-3 md:col-span-4">
                <div className="bg-light rounded-xl relative overflow-hidden p-5 shadow">
                  <div className="media-body content">
                    <h6 className="title mb-2 font-semibold text-lg">
                      Personal Details
                    </h6>
                    <div className="mt-2 mb-2 p-0 border-dashed border border-[#d4dae1]" />
                    <p className="text-muted mb-2 mt-3 text-sm">
                      <a href="javascript:void(0)" className="text-black">
                        Email:{" "}
                      </a>{" "}
                      queue@gmail.com
                    </p>
                    <p className="text-muted mb-2 text-sm">
                      <a href="javascript:void(0)" className="text-black">
                        Languages:{" "}
                      </a>{" "}
                      English
                    </p>
                    <p className="text-muted mb-0 text-sm">
                      <a href="javascript:void(0)" className="text-black">
                        Nationality:{" "}
                      </a>{" "}
                      Australian
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-9 md:col-span-8">
                <div className="items-end md:text-start">
                  <h4 className="me-2 text-2xl">
                    I Am{" "}
                    <span
                      className="typewrite text-primary"
                      data-period={2000}
                      data-type='[ "Web Designer", "Web Developer", "Photographer"]'
                    >
                      <span className="wrap" />
                    </span>
                  </h4>
                  <p className="text-light-muted mt-2 mb-4 leading-6 text-base">
                    Obviously I'm a Web Designer. Web Developer with over 3
                    years of experience. Experienced with all stages of the
                    development cycle for dynamic web projects. The as opposed
                    to using 'Content here, content here', making it look like
                    readable English.
                  </p>
                  <img
                    src="assets/images/signature.png"
                    className="h-9 align-middle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-4 pt-2">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="text-left rounded-xl bg-white py-8 px-11 transition-all duration-300 custom-cubic-bezier shadow-2xl">
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
                <h3 className="mb-4 text-xl">Web Developmnet</h3>
                <p className="text-light-muted mb-6 text-base">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
                <a
                  href="javascript:void(0)"
                  className="text-primary font-normal hover:text-[#0b5ed7]"
                >
                  Read more
                  <i className="mdi mdi-chevron-right" />
                </a>
              </div>
            </div>
            <div className="text-left rounded-xl bg-white py-8 px-11 transition-all duration-300 custom-cubic-bezier shadow-2xl">
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
                <h3 className="mb-4 text-xl">Design &amp; Planning</h3>
                <p className="text-light-muted mb-6 text-base">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
                <a
                  href="javascript:void(0)"
                  className="text-primary font-normal hover:text-[#0b5ed7]"
                >
                  Read more
                  <i className="mdi mdi-chevron-right" />
                </a>
              </div>
            </div>
            <div className="text-left rounded-xl bg-white py-8 px-11 transition-all duration-300 custom-cubic-bezier shadow-2xl">
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
                <h3 className="mb-4 text-xl">Adobe Photoshop</h3>
                <p className="text-light-muted mb-6 text-base">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
                <a
                  href="javascript:void(0)"
                  className="text-primary font-normal hover:text-[#0b5ed7]"
                >
                  Read more
                  <i className="mdi mdi-chevron-right" />
                </a>
              </div>
            </div>
            <div className="text-left rounded-xl bg-white py-8 px-11 transition-all duration-300 custom-cubic-bezier shadow-2xl">
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
                <h3 className="mb-4 text-xl">Digital marketing</h3>
                <p className="text-light-muted mb-6 text-base">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
                <a
                  href="javascript:void(0)"
                  className="text-primary font-normal hover:text-[#0b5ed7]"
                >
                  Read more
                  <i className="mdi mdi-chevron-right" />
                </a>
              </div>
            </div>
            <div className="text-left rounded-xl bg-white py-8 px-11 transition-all duration-300 custom-cubic-bezier shadow-2xl">
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
                  className="feather feather-watch fea icon-md h-9 w-9"
                >
                  <circle cx={12} cy={12} r={7} />
                  <polyline points="12 9 12 12 13.5 13.5" />
                  <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
                </svg>
              </div>
              <div className="services-texts">
                <h3 className="mb-4 text-xl">24 / 7</h3>
                <p className="text-light-muted mb-6 text-base">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
                <a
                  href="javascript:void(0)"
                  className="text-primary font-normal hover:text-[#0b5ed7]"
                >
                  Read more
                  <i className="mdi mdi-chevron-right" />
                </a>
              </div>
            </div>
            <div className="text-left rounded-xl bg-white py-8 px-11 transition-all duration-300 custom-cubic-bezier shadow-2xl">
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
                  className="feather feather-target fea icon-md h-9 w-9"
                >
                  <circle cx={12} cy={12} r={10} />
                  <circle cx={12} cy={12} r={6} />
                  <circle cx={12} cy={12} r={2} />
                </svg>
              </div>
              <div className="services-texts">
                <h3 className="mb-4 text-xl">Graphic Designer</h3>
                <p className="text-light-muted mb-6 text-base">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
                <a
                  href="javascript:void(0)"
                  className="text-primary font-normal hover:text-[#0b5ed7]"
                >
                  Read more
                  <i className="mdi mdi-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project list */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-2xl mt-4 group">
            <img
              src="assets/images/portfolio/1.jpg"
              className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full"
            />
            <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0" />
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
              <a
                className="text-white group-hover:text-white font-semibold text-lg"
                href="/tailwind/queue/layout/page-portfolio-detail"
              >
                Iphone mockup
              </a>
              <h6 className="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">
                Branding
              </h6>
            </div>
            <div className="absolute z-10 opacity-0 group-hover:opacity-80 right-0 left-0 top-1/2 -translate-y-1/2 duration-500 text-center">
              <a
                href="assets/images/portfolio/1.jpg"
                className="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"
              >
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
                  className="feather feather-camera fea icon-sm h-4 w-4"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx={12} cy={13} r={4} />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-2xl mt-4 group">
            <img
              src="assets/images/portfolio/2.jpg"
              className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full"
            />
            <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0" />
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
              <a
                className="text-white group-hover:text-white font-semibold text-lg"
                href="/tailwind/queue/layout/page-portfolio-detail"
              >
                Mockup Collection
              </a>
              <h6 className="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">
                Mockup
              </h6>
            </div>
            <div className="absolute z-10 opacity-0 group-hover:opacity-80 right-0 left-0 top-1/2 -translate-y-1/2 duration-500 text-center">
              <a
                href="assets/images/portfolio/2.jpg"
                className="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"
              >
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
                  className="feather feather-camera fea icon-sm h-4 w-4"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx={12} cy={13} r={4} />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-2xl mt-4 group">
            <img
              src="assets/images/portfolio/3.jpg"
              className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full"
            />
            <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0" />
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
              <a
                className="text-white group-hover:text-white font-semibold text-lg"
                href="/tailwind/queue/layout/page-portfolio-detail"
              >
                Abstract images
              </a>
              <h6 className="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">
                Abstract
              </h6>
            </div>
            <div className="absolute z-10 opacity-0 group-hover:opacity-80 right-0 left-0 top-1/2 -translate-y-1/2 duration-500 text-center">
              <a
                href="assets/images/portfolio/3.jpg"
                className="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"
              >
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
                  className="feather feather-camera fea icon-sm h-4 w-4"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx={12} cy={13} r={4} />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-2xl mt-4 group">
            <img
              src="assets/images/portfolio/4.jpg"
              className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full"
            />
            <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0" />
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
              <a
                className="text-white group-hover:text-white font-semibold text-lg"
                href="/tailwind/queue/layout/page-portfolio-detail"
              >
                Yellow bg with Books
              </a>
              <h6 className="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">
                Books
              </h6>
            </div>
            <div className="absolute z-10 opacity-0 group-hover:opacity-80 right-0 left-0 top-1/2 -translate-y-1/2 duration-500 text-center">
              <a
                href="assets/images/portfolio/4.jpg"
                className="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"
              >
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
                  className="feather feather-camera fea icon-sm h-4 w-4"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx={12} cy={13} r={4} />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-2xl mt-4 group">
            <img
              src="assets/images/portfolio/5.jpg"
              className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 h-full"
            />
            <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0" />
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
              <a
                className="text-white group-hover:text-white font-semibold text-lg"
                href="/tailwind/queue/layout/page-portfolio-detail"
              >
                Company V-card
              </a>
              <h6 className="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">
                V-card
              </h6>
            </div>
            <div className="absolute z-10 opacity-0 group-hover:opacity-80 right-0 left-0 top-1/2 -translate-y-1/2 duration-500 text-center">
              <a
                href="assets/images/portfolio/5.jpg"
                className="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"
              >
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
                  className="feather feather-camera fea icon-sm h-4 w-4"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx={12} cy={13} r={4} />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-2xl mt-4 group">
            <img
              src="assets/images/portfolio/6.jpg"
              className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
            />
            <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0" />
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-5 left-5 transition-all duration-500">
              <a
                className="text-white group-hover:text-white font-semibold text-lg"
                href="/tailwind/queue/layout/page-portfolio-detail"
              >
                Mockup box with paints
              </a>
              <h6 className="text-sm tag mb-0 font-medium group-hover:text-white transition duration-500">
                Photography
              </h6>
            </div>
            <div className="absolute z-10 opacity-0 group-hover:opacity-80 right-0 left-0 top-1/2 -translate-y-1/2 duration-500 text-center">
              <a
                href="assets/images/portfolio/6.jpg"
                className="image-popup btn bg-white hover:bg-white text-primary btn-icon rounded-full"
              >
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
                  className="feather feather-camera fea icon-sm h-4 w-4"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx={12} cy={13} r={4} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
