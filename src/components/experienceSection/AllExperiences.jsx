import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Development Engineer (SDE)",
    company: "Blink CMS",
    date: "January 2025 - Present",
    responsibilities: [
      "Developing scalable web applications and APIs.",
      "Implementing CI/CD pipelines for automated deployments.",
      "Optimizing backend performance to enhance user experience."
    ],
  },
  {
    job: "Software Engineer",
    company: "HackerRank",
    date: "February 2024 - April 2024",
    responsibilities: [
      "Built and optimized coding challenge platforms.",
      "Developed automated testing solutions for code submissions.",
      "Collaborated with cross-functional teams to improve platform stability."
    ],
  },
  {
    job: "Java Developer Intern & Software Engineer Intern",
    company: "AppSquadz",
    date: "July 2023 - December 2023",
    responsibilities: [
      "Designed and developed Java-based applications.",
      "Enhanced system performance by implementing efficient algorithms.",
      "Worked on database optimization and backend development."
    ],
  },
  {
    job: "Software Developer",
    company: "Powerplus Learn",
    date: "November 2022 - June 2023",
    responsibilities: [
      "Developed educational platforms with React and MySQL.",
      "Optimized backend services to handle high traffic.",
      "Integrated APIs to enhance learning management systems."
    ],
  }
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
