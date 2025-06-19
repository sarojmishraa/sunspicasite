import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Briefcase, BarChart3, Database, Code, Sliders, Shuffle, Cloud, Server, BrainCircuit } from "lucide-react";
import { SiAmazons3, SiMongodb } from "react-icons/si";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey hover:text-blue-500 transition-transform duration-300 hover:scale-105"
      >
        <h1 className="text-4xl font-bold text-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text hover:scale-110 transition-transform duration-300">
          <span className=" text-oklch(0.511 0.096 186.391)">Data</span><span className="text-orange"> Analyst</span>
        </h1>
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold uppercase transition-transform duration-300 hover:scale-105"
      >
        <span className="hover:animate-pulse">
          <span className="">S</span>
          <span className="">a</span>
          <span className="">r</span>
          <span className="">o</span>
          <span className="">j</span>
          &nbsp;
          <span className="">M</span>
          <span className="">i</span>
          <span className="">s</span>
          <span className="">h</span>
          <span className="">r</span>
          <span className="">a</span>
        </span>
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-oklch(0.511 0.096 186.391) mb-4 flex items-center gap-2 hover:text-blue-500 transition-transform duration-300 hover:scale-105">
          <Briefcase className="text-blue-500 transform transition-transform duration-300 hover:scale-110" />
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-opacity duration-500 hover:opacity-80">
          I am a results-driven <span className="font-semibold text-blue-600">Data Analyst</span> with a passion for transforming raw data into actionable insights. I leverage <span className="font-semibold">statistical analysis, data visualization, and machine learning</span> to drive strategic decision-making and optimize business performance.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {[
            { icon: <BarChart3 />, label: "Data Visualization", color: "text-yellow" },
            { icon: <Database />, label: "Database Management", color: "text-purple" },
            { icon: <Code />, label: "Python, Scala & SQL", color: "text-" },
            { icon: <Briefcase />, label: "Business Intelligence", color: "text-red" },
            { icon: <Shuffle />, label: "ETL", color: "text-blue" },
            { icon: <Sliders />, label: "Data Processing", color: "text-orange" },
            { icon: <Server />, label: "Data Warehouse", color: "text-green" },
            { icon: <SiMongodb />, label: "NoSQL", color: "text-lime" },
            { icon: <SiAmazons3 />, label: "Cloud: AWS", color: "text-silver" },
            { icon: <BrainCircuit />, label: "Machine Learning", color: "text-indigo" },
            { icon: <Cloud />, label: "Apache Kafka", color: "text-blue" },
            { icon: <Server />, label: "Apache Spark", color: "text-red" },
            { icon: <Shuffle />, label: "Developing Data Pipelines", color: "text-teal" },
            { icon: <Database />, label: "Amazon Redshift", color: "text-yellow" }
          ].map(({ icon, label, color }, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <span className={`${color} transform transition-transform duration-300 hover:rotate-12`}>
                {icon}
              </span>
              <span className="text-gray-800 dark:text-white font-medium hover:text-gray-500 transition-colors duration-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.p>
    </div>
  );
};

export default HeroText;
