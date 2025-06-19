import { motion } from "framer-motion";

const ExperienceTopRight = () => {
  return (
    <motion.div
      className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-lg text-center text-white">
        I specialize in <span className="font-bold text-cyan">Data Engineering, Data Analysis, and Full-Stack Development</span>. 
        My expertise includes designing <span className="font-bold text-orange">scalable ETL pipelines, cloud-based data solutions</span>, and 
        implementing efficient <span className="font-bold text-silver">data visualization and analytics</span> for business intelligence.
      </p>
      <p className="text-lg text-center text-white mt-4">
        In Full-Stack Development, I focus on building <span className="font-bold text-white">robust and user-friendly web applications</span>, 
        integrating both <span className="font-bold text-pink">frontend and backend technologies</span> to deliver seamless user experiences.
      </p>
    </motion.div>
  );
};

export default ExperienceTopRight;
