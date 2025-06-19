import { motion } from "framer-motion";
const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl font-extrabold text-cyan mb-10 drop-shadow-lg animate-pulse">About Me</h2>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 p-8">
        <motion.div
          className="max-w-3xl p-10 bg-gray-800 shadow-2xl rounded-3xl transform transition duration-500 hover:scale-110 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-cyan-400 text-center animate-pulse">
            Saroj <span className="text-cyan-400">Mishra</span>
          </h1>
          <motion.h2 
            className="text-2xl font-semibold text-white text-center mt-3 tracking-wide" 
            whileHover={{ scale: 1.05 }}>
            🚀 Data Engineer | 📊 Business Analyst | 💻 Software Developer
          </motion.h2>

          <motion.p 
            className="text-lg text-white mt-6 leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}>
            Passionate about leveraging <span className="text-orange-400 font-semibold">Big Data</span> and 
            <span className="text-cyan-400 font-semibold">advanced analytics</span> to drive business innovation. 
            Expertise in <span className="text-green-400 font-semibold">data modeling</span>, 
            <span className="text-yellow-400 font-semibold">ETL pipelines</span>, and 
            <span className="text-blue-400 font-semibold">cloud technologies</span> for efficient data-driven decision-making.
          </motion.p>

          <div className="mt-6 space-y-6">
            <motion.div className="p-6 bg-yellow-500 rounded-xl shadow-lg" whileHover={{ scale: 1.1 }}>
              <p className="text-lg font-semibold text-white">💡 Core Business & Corporate Skills:</p>
              <p className="text-lg text-gray-100">Business Strategy, Financial Literacy, Data-Driven Decision Making, Project Management</p>
            </motion.div>

            <motion.div className="p-6 bg-blue-500 rounded-xl shadow-lg" whileHover={{ scale: 1.1 }}>
              <p className="text-lg font-semibold text-white">💻 Technical & Analytical Skills:</p>
              <p className="text-lg text-gray-100">SQL & Data Manipulation, Power BI, Tableau, AWS & Cloud Computing, Python Libraries</p>
            </motion.div>
          </div>
          
          <motion.div className="p-6 bg-purple-500 rounded-xl shadow-lg" whileHover={{ scale: 1.1 }}>
            <p className="text-lg text-white mt-6">
              🎓 <span className="text-cyan-400">B.Tech in Information Technology (Distinction)</span>  
              from  <span className="text-orange-400">Dr. APJ Abdul Kalam Technical University</span>
            </p>
          </motion.div>
          
          <motion.div className="p-6 bg-gray-700 rounded-xl shadow-lg text-center" whileHover={{ scale: 1.05 }}>
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="saroj-mishra-504423256" data-version="v1">
              <a className="badge-base__link LI-simple-link text-blue-400 hover:text-blue-300" href="https://in.linkedin.com/in/saroj-mishra-504423256?trk=profile-badge" target="_blank">Saroj Mishra</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeText;