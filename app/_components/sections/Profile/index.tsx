"use client";
import { profiles } from "../../constants";
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import "./Profile.scss";
import { Image } from "@nextui-org/image";

const Profile = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Profile Section
        </h2>
      </motion.div>
      <div className="my-skills">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="skill"
            data-aos="fade-up"
            data-aos-delay={`${200 + index * 100}`}
          >
            <div className="icon-container">
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                <Image src={profile.icon} alt={""} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
