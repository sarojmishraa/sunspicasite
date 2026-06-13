import SingleSkill from "./SingleSkill";
import {
    FaPython, FaJava, FaNodeJs, FaGitAlt, FaAws,
    FaRedhat, FaAirbnb, FaDatabase, FaReact, FaLinux,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
    SiTypescript, SiMongodb, SiPostgresql, SiMysql,
    SiKubernetes, SiDocker, SiAnsible, SiGrafana,
    SiNumpy, SiPandas, SiTensorflow, SiApacheairflow,
    SiExpress, SiTerraform, SiJenkins, SiRedis, SiGo,
    SiScala,
} from "react-icons/si";
import { BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const programmingSkills = [
    { skill: "Python", icon: FaPython },
    { skill: "Java", icon: FaJava },
    { skill: "MySQL", icon: SiMysql },
    { skill: "PostgreSQL", icon: SiPostgresql },
    { skill: "MongoDB", icon: SiMongodb },
    { skill: "Redis", icon: SiRedis },
    { skill: "Apache Airflow", icon: SiApacheairflow },
    { skill: "PySpark", icon: FaDatabase },
    { skill: "ETL / ELT", icon: FaDatabase },
    { skill: "Data Modeling", icon: FaDatabase },
    { skill: "Data Warehousing", icon: FaDatabase },
    { skill: "Power BI", icon: FaAirbnb },
    { skill: "Docker", icon: SiDocker },
    { skill: "Kubernetes", icon: SiKubernetes },
    { skill: "Terraform", icon: SiTerraform },
    { skill: "Jenkins", icon: SiJenkins },
    { skill: "Ansible", icon: SiAnsible },
    { skill: "Grafana", icon: SiGrafana },
    { skill: "AWS", icon: FaAws },
    { skill: "Linux", icon: FaLinux },
    { skill: "Git", icon: FaGitAlt },
    { skill: "Numpy", icon: SiNumpy },
    { skill: "Pandas", icon: SiPandas },
    { skill: "TensorFlow", icon: SiTensorflow },
    { skill: "Machine Learning", icon: BrainCircuit },
];

const dataSkills = [
    { skill: "JavaScript", icon: IoLogoJavascript },
    { skill: "TypeScript", icon: SiTypescript },
    { skill: "Golang", icon: SiGo },
    { skill: "Scala", icon: SiScala },
    { skill: "Milvus", icon: FaDatabase }
];

const AllSkills = () => {
    return (
        <div className="flex flex-col items-center gap-x-10 gap-y-10 max-w-[100%] w-full px-4 sm:px-6 lg:px-8 mx-auto">
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
                        <SingleSkill text={item.skill} imgSvg={<item.icon />} />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-12 gap-y-10"
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