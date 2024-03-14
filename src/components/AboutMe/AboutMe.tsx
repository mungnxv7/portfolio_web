const AboutMe = () => {
  const info = {
    phone: "0962013495",
    email: "mungnxhnv7@gmail.com",
    address: "Quoc Oai - Ha Noi",
    introduction: "",
  };
  return (
    <div className="py-10 sm:py-20" id="about">
      <div className="text-center mb-4 pb-2">
        <h2 className="capitalize mb-4 text-black text-3xl font-semibold">
          About Me
        </h2>
      </div>
      <div className="rounded-xl relative flex min-w-0 bg-white shadow-[0px_9px_30px_rgba(7,65,210,0.1)] px-2 sm:px-6">
        <div className="p-3">
          <div className="grid lg:grid-cols-12 sm:grid-cols-1 md:grid-cols-12 gap-6">
            <div className="lg:col-span-3 md:col-span-4 ">
              <div className="bg-light rounded-xl relative overflow-hidden p-5 shadow">
                <div className="media-body content">
                  <h6 className="title mb-2 font-semibold text-lg">
                    Personal Details
                  </h6>
                  <div className="mt-2 mb-2 p-0 border-dashed border border-[#d4dae1]" />
                  <p className="mb-2 mt-3 text-sm">Phone: {info.phone}</p>
                  <p className="mb-2 mt-3 text-sm">Email: {info.email}</p>

                  <p className="mb-0 text-sm">Address: {info.address}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-9 md:col-span-8">
              <div className="items-end md:text-start my-2">
                <p>Hello there,</p>
                <br />
                <p>
                  I'm Nguyen Xuan Mung. I'm delighted to introduce myself to
                  everyone as a Front-end Developer. I have a passion for web
                  development, researching, and building interfaces and
                  interactions with users on the web to create enjoyable
                  experiences.{" "}
                </p>
                <br />
                <p>
                  Equipped with professional knowledge and proficiency in
                  programming languages HTML/CSS, Javascript, and having a basic
                  foundation in ReactJs and Redux Toolkit throughout my studies{" "}
                </p>
                <br />
                <p>
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
