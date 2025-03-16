import cse from '../assets/cse.png';
import bcom from '../assets/bcom.png';
import mba from '../assets/mba.png';
import kevin from '../assets/kevin.jpeg';
import '../styles/About.css';

import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.3, delayChildren: 0.2 } 
  },
};

export const About = () => {
  return (
    <>
      <div className="aboutMe_BG">
        <div className="container flex_container min-vh-100">
          <motion.div 
            className="about_me"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 variants={fadeInVariant}>About Me</motion.h3>

            <motion.div className="row about__container">
              <motion.div className="col-md-8 col-12" variants={fadeInVariant}>
                <h1 className="fw-bold display-5">
                  Hi, I'm <span className="text_primary">Naveen Kumar Sarilla</span>
                </h1>
                <p className="lead">
                  I am a self-taught programmer with a passion for learning and exploring new technologies. 
                  I have a strong background in FrontEnd Development and am improving my full-stack skills, 
                  always eager to expand my knowledge and take on new challenges.
                </p>
              </motion.div>

              <motion.div className="col-md-3 col-12 ab_img_c" variants={fadeInVariant}>
                <img src={kevin} className="img-fluid" alt="Naveen Kumar Sarilla" />
              </motion.div>
            </motion.div>

            {/* Educational Background */}
            <motion.div 
              className="Educational mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h3 variants={fadeInVariant}>My Educational Background</motion.h3>

              <motion.div className="row Educational_curd" variants={containerVariant}>
                {/* Degree 1 */}
                <motion.div className="sd-list col-md-3 col-12" variants={fadeInVariant}>
                  <img src={cse} className="img-fluid w-25" alt="CSE" />
                  <p className="lead ed_c">Computer Science Engineering</p>
                  <p className="ed_cdp">
                    I have completed my degree in Computer Science Engineering, gaining strong technical expertise in software development and problem-solving.
                  </p>
                </motion.div>

                {/* Degree 2 */}
                <motion.div className="sd-list col-md-3 col-12" variants={fadeInVariant}>
                  <img src={bcom} className="img-fluid w-25" alt="B.Com" />
                  <p className="lead ed_c">Bachelor of Commerce</p>
                  <p className="ed_cdp">
                    My Bachelor of Commerce degree has provided me with a solid understanding of business processes, finance, and management.
                  </p>
                </motion.div>

                {/* Degree 3 */}
                <motion.div className="sd-list col-md-3 col-12" variants={fadeInVariant}>
                  <img src={mba} className="img-fluid w-25" alt="MBA" />
                  <p className="lead ed_c">Master of Business Administration</p>
                  <p className="ed_cdp">
                    With an MBA, I have honed my skills in leadership, strategy, and decision-making.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
