import resum from '../assets/NAVEEN KUMAR SARILLA.pdf';
// import '../styles/Resume.css';
import { motion } from "framer-motion";

export const Resume = () => {
    return (
       <div className="container">
                <h3 className="fw-bold display-6 mb-3">My Resume</h3>

         <div className=" ">
            <motion.div 
                className="rem_container text-center p-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >

                {/* Resume Preview */}
                <iframe 
                    src={resum} 
                    className="resume-preview"
                    width="100%" 
                    height="400px" 
                />

                {/* Download Button */}
                <motion.a 
                    className='btn btn-outline-dark btn-lg mt-3' 
                    href={resum} 
                    target="_download"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    download
                >
                    📄 Download CV
                </motion.a>
            </motion.div>
        </div>
       </div>
    );
};
