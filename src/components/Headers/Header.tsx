const Header = () => {
  return (
    <div className="container flex items-center justify-between h-20">
      <h1 className="font-bold text-3xl text-blue-600 uppercase ">
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
  );
};

export default Header;
