import "../styles/BackToTop.css";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;