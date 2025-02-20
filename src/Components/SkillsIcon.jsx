import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineJava } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const SkillsIcons = ({color}) => {
  const skills = [
    { icon: <FaHtml5 />, color: "text-amber-400", name: "HTML" },
    { icon: <FaCss3 />, color: "text-blue-600", name: "CSS" },
    { icon: <RiJavascriptFill />, color: "text-amber-500", name: "JavaScript" },
    { icon: <RiTailwindCssFill />, color: "text-blue-500", name: "Tailwind" },
    { icon: <FaReact />, color: "text-blue-500", name: "React" },
    { icon: <AiOutlineJava />, color: "text-red-500", name: "Java" },
    { icon: <VscGithub />, color: "text-black", name: "GitHub" },
  ];

  return (
    <div className="mt-14 flex text-2xl">
      {skills.map((skill, index) => (
        <div key={index} className="relative group">
            
          {/* Icon */}
          <div
            className={`h-11 ml-2 w-11 ${skill.color} flex justify-center items-center bg-[#fff] rounded-full cursor-pointer`}
            style={{ boxShadow: `0 4px 6px rgba(0,0,0,0.2), inset 0 2px 3px ${color}` }}
          >
            {skill.icon}
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            {skill.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsIcons;
