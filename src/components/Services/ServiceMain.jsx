import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../framerMotion/variants";
import Serviceoffers from "./Serviceoffers";
import ServiceText from "./ServiceText";

const whyChooseUs = {
  img:"/images/serviceImage/s-top.png",
  title: "We believe in empowering your success",
  points: [
    {
      icon: "/images/serviceImage/rocket.gif",
      title: "Fast working process",
      description:
        "With our streamlined and efficient working process, we ensure quick and effective implementation of IT solutions.",
    },
    {
      icon: "/images/serviceImage/group.gif",
      title: "Dedicated team",
      description:
        "You gain a dedicated team of technology experts committed to your success.",
    },
    {
      icon: "/images/serviceImage/24-7.gif",
      title: "24/7 hours support",
      description:
        "Your Technology Partner, Around the Clock Technology issues can arise at any time, and we are here to support you 24/7.",
    },
  ],
  image: "images/why-choose-us.png",
};

const services = [
  {
    title: "App Development Services",
    description:
    "Utilizing a tech stack consisting of React Native and Ionic for frontend development, Node.js, PHP Laravel, and Java Spring Boot for backend development, and AWS for deployment.",
    image: "/images/serviceImage/app-services.png",
  },
  {
    title: "Advertising Services",
    description:"Enagaging Nextgen Ads & Content formats built for the Newage Audience & Focused Communities of Advertisers Publishers. Maximize your brand's online visibility with our comprehensive digital advertising solutions, tailored to reach your target audience and drive measurable result",
    image: "/images/serviceImage/ads-service.png",
  },
  {
    title: "Content Management System (CMS)",
    description:
"A user-friendly platform for creating, managing, and publishing digital content. Empowers businesses to update and maintain their online presence, enabling them to deliver engaging and dynamic content to their audience.",
    image: "/images/serviceImage/cms-service.png",
  },
  {
    title: "Digital Marketing)",
    description:
"The tech stack includes a CMS,CRM system, Social Media Management Tools, SEO Tools, Analytics and Reporting Tools, Email Marketing Platforms, PPC Advertising Tools, Marketing Automation Platforms, and Data Analytics and Visualization Tools.",
  image: "/images/serviceImage/digital-service.png",
  },

  {
    title: "Integration Project",
    description:
    "The tech stack for Integration Projects includes APIs for data exchange, ETL (Extract, Transform, Load) tools for data integration, and monitoring tools for tracking system performance and data flow",
    image: "/images/serviceImage/Integ-services.png",
  },
  
  {
    title: "IOT Services",
    description:
"The tech stack for IoT includes embedded systems and microcontrollers for device connectivity, communication protocols like MQTT or HTTP for data transmission, cloud platforms for data storage and analysis, edge computing for local data processing, and data visualization tools for real-time monitoring and insights",
    image: "/images/serviceImage//iot-service.png",
  },
  {
    title: "Cloud Services",
    description:"The tech stack for Cloud Computing includes virtualization technologies for resource allocation, hypervisors for managing virtual machines, containerization platforms like Docker for application deployment, orchestration tools like for container management, and cloud service providers for infrastructure and platform provisioning",
    image: "/images/serviceImage/cloud-service.png",
  },
  
  {
    title: "AI/ML",
    description:
"The tech stack for AI and ML includes programming languages like Python or R for building models, frameworks like TensorFlow or PyTorch for developing neural networks, cloud platforms for scalable computing power, data preprocessing tools for cleaning and transforming data, and libraries for statistical analysis and algorithm implementation",
   image: "/images/serviceImage/ml-services.png",
  },
];

const ServicesMain = () => {
  const [clickedCard, setClickedCard] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12" id="services">
  <ServiceText/>
      <motion.div
         variants={fadeIn("down", 0)}
         initial="show"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }}
         className="flex gap-14" >
           <div>
           <img
          src={whyChooseUs.img}
          alt="Why Choose Us"
          className="w-full max-w-2xl mx-auto "
        />
           </div>
        <div>
          <span className="text-silver text-2xl font-medium">Why Choose Us</span>
          <h2 className="text-3xl  font-bold mt-2 mb-6">{whyChooseUs.title}</h2>
          <div className="space-y-6">
            {whyChooseUs.points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <img src={point.icon} alt={point.title} className="w-16 h-16" />
                <div>
                  <h3 className="font-semibold text-lg">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
<Serviceoffers/>
      {/* Services*/}
      <motion.div
        variants={fadeIn("top", 0)}
        initial=""
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="grid md:grid-cols-2 gap-6 mt-12"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="shadow-lg rounded-xl p-6 flex flex-col items-center text-center border border-gray hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setClickedCard(index)}
            animate={{
              rotate: clickedCard === index ? [0, 20, 0] : 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            <img src={service.image} alt={service.title} className="w-32 h-32 mb-4" />
            <h3 className="text-xl text-darkpurple font-semibold mb-2">{service.title}</h3>
            <p className="text-whitesmoke">{service.description}</p>
            <a
              href="#"
              className="mt-4 text-red font-semibold flex items-center gap-1 hover:underline"
            >
              → Learn More
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesMain;
