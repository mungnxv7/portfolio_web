const AboutMe = () => {
  return (
    <div className="mt-20">
      <div className="text-center mb-4 pb-2">
        <h2 className="capitalize mb-4 text-black text-3xl font-semibold">
          About Me
        </h2>
      </div>
      <div className="rounded-xl relative flex min-w-0 bg-white shadow-[0px_9px_30px_rgba(7,65,210,0.1)] px-6">
        <div className="p-3">
          <div className="grid lg:grid-cols-12 sm:grid-cols-1 md:grid-cols-12 gap-6">
            <div className="lg:col-span-3 md:col-span-4 ">
              <div className="bg-light rounded-xl relative overflow-hidden p-5 shadow">
                <div className="media-body content">
                  <h6 className="title mb-2 font-semibold text-lg">
                    Personal Details
                  </h6>
                  <div className="mt-2 mb-2 p-0 border-dashed border border-[#d4dae1]" />
                  <p className="mb-2 mt-3 text-sm">Phone: 0962013495</p>
                  <p className="mb-2 mt-3 text-sm">
                    Email: mungnxhnv7@gmail.com
                  </p>

                  <p className="mb-0 text-sm">Address: Quoc Oai - Ha Noi</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-9 md:col-span-8">
              <div className="items-end md:text-start my-2 leading-6 text-base">
                <p>Hello there,</p>
                <p className="mt-3">
                  I'm Nguyen Xuan Mung. I'm delighted to introduce myself to
                  everyone as a Front-end Developer. I have a passion for web
                  development, researching, and building interfaces and
                  interactions with users on the web to create enjoyable
                  experiences.
                </p>
                <p className="mt-3">
                  Equipped with professional knowledge and proficiency in
                  programming languages HTML/CSS, Javascript, and having a basic
                  foundation in ReactJs and Redux Toolkit throughout my studies
                </p>
                <p className="mt-3">
                  I strive to enhance my skills and explore new technologies. I
                  am eager to develop myself in this field and go even further.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
