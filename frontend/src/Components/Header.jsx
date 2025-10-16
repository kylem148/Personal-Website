import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 w-full transition-all duration-300 bg-neutral-900 ${
          isScrolled ? "bg-neutral-70 shadow-md py-4" : "bg-transparent py-3"
        }`}
      >
        <p className={`${isScrolled ? "text" : "text-transparent"}`}>header</p>
      </div>
    </>
  );
}

export default Header;
