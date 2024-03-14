import { useEffect, useState } from "react";
import list from "../../assets/img/list.svg";
import { Link } from "react-scroll";
type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const [activeScroll, setActiveScroll] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [activeMenu, setactiveMenu] = useState("home");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      setActiveScroll(true);
    } else {
      setActiveScroll(false);
    }
  };

  const toggerDropDown = () => {
    if (dropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  const handleSetActiveAndSetDropDownd = (to: string) => {
    setactiveMenu(to);
    setDropDown(false);
  };
  const menuLink = [
    { lable: "Home", idName: "home" },
    { lable: "About", idName: "about" },
    { lable: "Skills", idName: "skills" },
    { lable: "Projects", idName: "projects" },
  ];

  return (
    <div
      className={`-top-20 z-10 bg-white duration-500 ${
        activeScroll ? "sticky shadow-lg translate-y-full" : ""
      }`}
    >
      <header className="px-3 sm:container flex items-center justify-between h-20 ">
        <h1 className="font-bold text-2xl text-primary uppercase ">{title}</h1>
        <div className="relative">
          <div className="md:hidden cursor-pointer" onClick={toggerDropDown}>
            <img className="w-8 h-8" src={list} alt="" />
          </div>
          <ul
            className={`${
              dropDown ? "block animate-scaleIn" : "hidden"
            } absolute  shadow-[0px_9px_30px_rgba(0,0,0,0.3)] origin-top-right rounded-md  top-full items-center gap-5 font-medium  bg-white md:relative md:flex md:px-0 md:shadow-none md:bg-transparent  z-20 right-0  py-3 px-2 w-32 md:w-auto  duration-300`}
          >
            {menuLink.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu.idName}
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-70}
                  onSetActive={handleSetActiveAndSetDropDownd}
                  className={`${
                    activeMenu === menu.idName && "text-primary"
                  }  font-medium hover:text-primary px-2 py-1 rounded-lg transition duration-300 cursor-pointer`}
                >
                  {menu.lable}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
