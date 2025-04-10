import { BiLogoInstagramAlt } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
const Hero = () => {
  const socialLinks = [
    {
      title: "GitHub",
      tag: <VscGithubInverted size={20} />,
      url: "https://github.com/jagadish018",
    },
    {
      title: "Instagram",
      tag: <BiLogoInstagramAlt size={20} />,
      url: "https://instagram.com/yourusername",
    },
    {
      title: "X/Twitter",
      tag: <FaXTwitter size={16} />,
      url: "https://x.com/JagadishCK4056",
    },
    {
      title: "LinkedIn",
      tag: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/jagadish-c-k-93b729187/",
    },
    {
      title: "Leetcode",
      tag: <SiLeetcode size={20} />,
      url: "https://leetcode.com/u/jagadishck018/",
    },
  ];

  return (
    <div className="w-full flex flex-row items-center justify-evenly p-3 gap-5">
      <img
        src="/profile.JPG"
        alt="Jagadish"
        className="rounded-full w-32 h-32  object-cover border-2 border-gray-500"
      />
      <div className="flex flex-col px-2  w-full">
        <h1 className="text-2xl sm:text-3xl font-semibold text-amber-50">
          Jagadish C K{" "}
          <span className="block sm:inline">(Fullstack Developer)</span>
        </h1>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-2">
          <button className="text-sm text-blue-500 border-2 border-blue-600 px-3 py-1 rounded-xl">
            Developer
          </button>
          <button className="text-sm text-blue-500 border-2 border-blue-600 px-3 py-1 rounded-xl">
            Creator
          </button>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
              className="text-sm text-amber-50 hover:text-blue-400 flex items-center gap-2"
            >
              {item.tag}
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
