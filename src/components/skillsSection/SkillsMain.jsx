import AllSkills from "./AllSkills";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1400px] px-8  min-h-[1350px]  relative overflow-hidden mx-auto mt-[100px] mb-[40px]">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
         
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
