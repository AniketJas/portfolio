import ResumeButton from "../components/ResumeButton";
import logo from "../images/logo-name.png";

export default function Navbar() {
  const handleClick = (val) => {
    document.getElementById(val).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex items-center bg-white h-18 px-12 shadow-md">
      <div className="w-1/3">
        <button onClick={() => handleClick("hero")}>
          <img src={logo} className="h-16" />
        </button>
      </div>
      <div className="flex gap-6 w-2/3 justify-end text-lg raleway-semibold">
        <button onClick={() => handleClick("about")}>About</button>
        <button onClick={() => handleClick("education")}>Education</button>
        <button onClick={() => handleClick("tech-stack")}>Tech-stack</button>
        <button onClick={() => handleClick("projects")}>Projects</button>
        <button onClick={() => handleClick("contact-me")}>Contact Me</button>

        <div className="px-4 py-2 bg-black text-white rounded-lg font-normal">
          <ResumeButton />
        </div>
      </div>
    </div>
  );
}
