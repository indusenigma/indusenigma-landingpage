"use client";

import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { educations } from "../../constants";
import "./Education.scss";
import { FeedbackCard } from "./FeedbackCard";

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>FreeLancer Details...</p>
          <h2 className={styles.sectionHeadText}>FreeLancing.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`}
      >
        {educations.map((education, index) => (
          <FeedbackCard key={education.name} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default Education;