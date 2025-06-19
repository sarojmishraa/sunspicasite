import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Stock Market Real-Time Data Analysis",
    year: "April 2025",
    align: "right",
    description:"Stock markets generate vast amounts of real-time data that require efficient processing, analysis, and visualization. This project utilizes Apache Kafka, AWS cloud services, and Python to build a scalable pipeline for streaming, analyzing, and storing real-time stock market data. By leveraging distributed computing and machine learning techniques, this system enables traders, analysts, and investors to make data-driven decisions based on live market trends.",
    image: "public/images/stock.jpeg",
    link: "#",
  },
  {
    name: "Insurance Pricing Forecast",
    year: "Jan 2025",
    align: "left",
    description:"Insurance companies must determine optimal premium rates to balance profitability and competitiveness. Underpricing can lead to financial losses, while overpricing can drive customers to competitors. This project leverages regression analysis and predictive modeling to forecast optimal insurance premiums by analyzing historical claims data, risk factors, and market trends.",
    image: "public/images/insurance.jpg",
    link: "#",
  },
  {
    name: " Investigating Netflix Movies and Guest Stars in The Office",
    year: "Mar 2025",
    align: "right",
    description:" In the Investigating Netflix Movies and Guest Stars in The Office project, you will use data manipulation and visualization to solve a real-world data science problem. You will perform deep exploratory data analysis and draw conclusions from detailed graphs. ",
    image: "public/images/netflix.avif",
    link: "#",
  },
  {
    name: "HR Analysis Project",
    year: "Feb 2025",
    align: "left",
    description:"Employee Performance: Analysis of performance reviews to identify top performers and areas for improvement.Attrition Rates: Examination of attrition data to understand the reasons behind employee turnover.Employee Satisfaction: Insights from satisfaction surveys to gauge employee morale and identify factors affecting job satisfaction",
    image:"public/images/hr_ summary.png",
    link: "https://github.com/sarojmishraa/HRAnalysisProjects",
  },
  {
    name: "Weather Data Analysis",
    year: "January 2025",
    align: "right",
    description:`⛅ Weather Data Analysis – Insights from Climate Trends
🚀 This Weather Data Analysis project explores historical and real-time weather data to identify patterns, trends, and anomalies. Built using Python, Pandas, NumPy, Matplotlib, Seaborn, and Power BI, it provides deep insights into climate variations.`,
    image: "public/images/weather.webp",
    link: "#",
  },
  {
    name: "Digital Agency",
    year: "Sept 2023",
    align: "left",
    description:`🚀 Digital Agency Website – Modern & Responsive Frontend
This Digital Agency Website is a sleek, responsive, and visually appealing frontend project built using React.js, Tailwind CSS, and Framer Motion. It showcases agency services, portfolios, and client testimonials with a dynamic UI and smooth animations.

🔹 Key Features:
✅ 🎨 Stunning UI/UX – Modern and interactive design
✅ ⚡ Fast & Responsive – Optimized for all devices
✅ 📸 Portfolio Showcase – Highlight agency projects
✅ 📝 Contact Form – Easy client inquiries
✅ 🎭 Smooth Animations – Powered by Framer Motion

🚀 Perfect for digital agencies, freelancers, and startups!`,
    image: "public/images/digi.png",
    link: "https://sarojmishraa.github.io/digital-agency/",
  },
  {
    name: "House Finder",
    year: "Mar 2023",
    align: "right",
    description:`🏡 HouseFinder – Smart Real Estate Search Platform
🚀 HouseFinder is a sleek and user-friendly real estate search platform designed to help users find their perfect home effortlessly. Built with HTML, CSS, JavaScript, and React.js, it offers an intuitive interface for exploring property listings.

🔹 Key Features:
✅ 🏠 Browse Listings – View detailed property information
✅ 📍 Location-Based Search – Find homes near you
`,
    image: "public/images/housefinder.png",
    link: "https://sarojmishraa.github.io/HouseFinder/",
  },
  {
    name: "PowerPlus Learn",
    year: "march 2023",
    align: "left",
    description:" Built web applications with MySQL, React, PHP, HTML, CSS, and JavaScript, enhancing performance by 40%.  Perfected both front-end and Back-end code, reducing latency by 15% and improving load times. Conducted regular performance tests and debugging sessions, resulting in 25% fewer reported issues post-launch.",
    image: "public/images/powerplus.png",
    link: "https://powerplus.co.in/",
  },
  {
    name: "tomato delivery",
    year: "Jan 2023",
    align: "right",
    description:"This Task Management App is a full-stack project built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It enables users to create, manage, and track tasks efficiently while providing authentication, real-time updates, and a responsive UI.",
    image: "public/images/tomato-img.png",
    link: "https://github.com/sarojmishraa/tomato-delivery",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ProjectsText/>
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              description={project.description}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
