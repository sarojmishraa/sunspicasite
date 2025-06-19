import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import './resume.css'

const socialLinks = [
  {
    src: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000",
    alt: "GitHub",
    link: "https://github.com/sarojmishraa",
  },
  {
    src: "https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000",
    alt: "X (Twitter)",
    link: "https://twitter.com/sarojmishraa",
  },
  {
    src: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
    alt: "LinkedIn",
    link: "https://linkedin.com/sarojmishraa",
  },
  {
    src: "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000",
    alt: "Instagram",
    link: "https://instagram.com/mishra.yuvrajj",
  },
  {
    src: "https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000",
    alt: "Gmail",
    link: "mailto:isarojmishraa@gmail.com",
  },
];

const sections = [
  {
    title: "Education",
    color: "bg-blue-500",
    content: (
      <>
        <p>B.Tech in Information Technology - Dr. A.P.J. Abdul Kalam Technical University (Aug 2024)</p>
        <p>CGPA: 8.0/10.0</p>
        <br />
        <p>Higher Secondary Certificate, Science - UPMSP (April 2017 - May 2019)</p>
      </>
    ),
  },
  {
    title: "Technical Skills",
    color: "bg-green-500",
    content: (
      <>
        <p><strong className="text-burgundy">Programming Languages:</strong> C, Java, C++, Python, JavaScript, TypeScript, SQL, C#, Go, HTML, CSS</p> <br />
        <p><strong className="text-burgundy">Libraries & Frameworks:</strong> Django, Flask, Pandas, NumPy, Matplotlib, React.js, Node.js, Express.js</p><br />
        <p><strong className="text-burgundy">Databases:</strong> MySQL, PostgreSQL, MongoDB, PL/SQL</p><br />
        <p><strong className="text-burgundy">Data Visualization:</strong> Power BI, Looker, Seaborn, Excel</p><br />
        <p><strong className="text-burgundy">Technologies:</strong> Git, Docker, Kubernetes, Ansible</p><br />
      </>
    ),
  },
  {
    title: "Soft Skills",
    color: "bg-purple-500",
    content: (
      <>
        <p>Critical Thinking, Problem Solving, Communication, Teamwork, Leadership, Business Acumen, Storytelling with Data</p>
      </>
    ),
  },
  {
    title: "Work Experience",
    color: "bg-red-500",
    content: (
      <>
        <p><strong>Software Engineer Intern - AppSquadz</strong> (July 2023 - Dec 2023)</p>
        <ul className="list-disc ml-6">
          <li>Optimized Java applications, improving system performance by 30%.</li>
          <li>Conducted code reviews, reducing bugs by 20%.</li>
          <li>Improved project delivery speed by 25% using version control.</li>
        </ul>
        <p className="mt-4"><strong>Software Engineer Intern - PowerPlus</strong> (Jan 2022 - Dec 2022)</p>
        <ul className="list-disc ml-6">
          <li>Developed web apps using MySQL, React, PHP, and JavaScript, enhancing performance by 40%.</li>
          <li>Reduced latency by 15% and improved load times.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Certifications",
    color: "bg-yellow-500",
    content: (
      <>
        <p>Software Engineer Certificate, SQL Advanced Certificate, Power BI Certificate, Data Engineering Certificate</p>
      </>
    ),
  },
];

const Resume = () => {
  const [expanded, setExpanded] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleDownloadClick = () => {
    setIsClicked(true);
    window.open("https://drive.google.com/file/d/1OV1r4T17EDbLWvLVMOdWOGkLZ2Uif-Uf/view", "_blank");
  };

  return (
    <div id="resume" className="max-w-[1200px] mx-auto px-4">
      <motion.h1 
        className="text-5xl font-bold text-cyan justify-center text-center mt-40"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Resume
      </motion.h1>
    <div className="max-w-4xl mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-xl">
      
      <div className="text-center bg-cyan-600 p-6 rounded-lg shadow-lg mt-10">
        <h1 className="text-4xl font-bold text-white">Saroj Mishra</h1>
        <p className="text-lg mt-2 text-gray-200">Software Engineer | Data Analyst | Data Engineer</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-6 bg-gray-800 p-4 rounded-lg shadow-lg">
        {socialLinks.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
            <img src={social.src} alt={social.alt} className="w-10 h-10 hover:opacity-75 transition" />
          </a>
        ))}
      </div>

      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`mt-6 p-6 rounded-lg shadow-lg cursor-pointer text-white ${section.color}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setExpanded(expanded === index ? null : index)}
        >
          <h2 className="text-2xl font-bold">{section.title}</h2>
          {expanded === index && <div className="mt-4">{section.content}</div>}
        </motion.div>
      ))}

<div className="text-center mt-10">
<button 
            className={`inline-flex items-center px-6 py-3 rounded-lg shadow-md transition duration-300 ${isClicked ? 'bg-dark' : 'text-cyan hover:bg-cyan hover:text-purple'}`} 
            onClick={handleDownloadClick}
          >
            <FaDownload className="mr-2"  /> Download Resume
          </button>
        </div>
    </div>
    </div>
  );
};

export default Resume;