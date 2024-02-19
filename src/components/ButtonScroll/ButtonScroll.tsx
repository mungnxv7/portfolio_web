import { useEffect, useState } from "react";

const ButtonScroll = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 500) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };
  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`${showScrollButton ? "block" : "hidden"} `}>
      <button
        onClick={topFunction}
        id="back-to-top"
        className="back-to-top fixed text-base rounded-md z-10 bottom-8 right-8 h-8 w-8 text-center bg-primary text-white leading-9 justify-center items-center"
        style={{ display: "inline-flex" }}
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
          className="feather feather-arrow-up h-4 w-4 text-white stroke-2"
        >
          <line x1={12} y1={19} x2={12} y2={5} />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </div>
  );
};

export default ButtonScroll;
