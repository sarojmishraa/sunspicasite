import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaNodeJs, FaGitAlt, FaAws, FaRedhat, FaAirbnb } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiDjango, SiFlask, SiRedux, SiNextdotjs, SiMongodb, SiPostgresql, SiMysql, SiKubernetes, SiDocker, SiAnsible, SiTableau, SiNumpy, SiPandas, SiTensorflow, SiApacheairflow, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const programmingSkills = [
 

  { skill: "Python", icon: FaPython },
  { skill: "Java", icon: FaJava },
  { skill: "MySQL", icon: SiMysql },
  { skill: "PostgreSQL", icon: SiPostgresql },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "Kubernetes", icon: SiKubernetes },
  { skill: "Docker", icon: SiDocker },
  { skill: "Ansible", icon: SiAnsible },
  { skill: "Power BI", icon: FaAirbnb },
  { skill: "Tableau", icon: SiTableau },
  { skill: "Numpy", icon: SiNumpy },
  { skill: "Pandas", icon: SiPandas },
  { skill: "Apacheairflow", icon: SiApacheairflow },
  { skill: "Tensorflow", icon:SiTensorflow },
  { skill: "Machine Learning", icon: BrainCircuit },
  { skill: "Git", icon: FaGitAlt },
  { skill: "AWS", icon: FaAws },
  {skill:"Linux", icon:FaRedhat},
  { skill: "Django", icon: SiDjango },
  { skill: "Flask", icon: SiFlask },

];

const dataSkills = [

  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Node.js", icon: FaNodeJs },
  {skill:"Express",icon:SiExpress}
  
 
];

const AllSkills = () => {
  return (
    <div className="flex flex-col items-center  gap-x-10 gap-y-10  max-w-[100%] w-full px-4 sm:px-6 lg:px-8 mx-auto">
      <motion.div
        className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-5 gap-x-7 gap-y-10"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        {programmingSkills.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex justify-center"
          >
            <SingleSkill   text={item.skill} imgSvg={<item.icon />} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-x-12 gap-y-10"
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        {dataSkills.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex justify-center"
          >
            <SingleSkill text={item.skill} imgSvg={<item.icon />} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllSkills;
