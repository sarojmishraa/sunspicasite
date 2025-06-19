import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import PropTypes from "prop-types";

const SingleProject = ({ name, year, align, image, link, description }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full items-center gap-8 sm:flex-col-reverse ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div className="text-center md:text-left">
   
        <h2 className="md:text-3xl sm:text-2xl text-orange font-bold">{name}</h2>

      
        <h2
          className={`text-xl font-thin text-white font-special ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          <h1 className="text-silver">{year} </h1>
        </h2>

        {description && (
          <p className="text-gray mt-2 text-sm md:text-base">{description}</p>
        )}

     
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lg text-cyan hover:text-orange transition-all duration-500 cursor-pointer mt-2"
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>

      
      <div className=" min-h-[260px] max-h-[360px] min-w-[360px]  max-w-[600px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white single-image">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt={`${name} project`} className="w-full h-full object-cover min-h-[260px]"  />
      </div>
    </motion.div>
  );
};

SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SingleProject;
