import myImg from '../assets/Kevin.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import '../styles/Twinkling.css';
import { motion } from "framer-motion";
import resum from '../assets/NAVEEN KUMAR SARILLA.pdf';

export const Home = () => {
    return (
        <>
            <motion.section 
                className="home min-vh-100 d-flex justify-content-center align-items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="container">
                    <motion.div 
                        className="home_contant row align-items-center text-center text-md-start"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {/* Left Section - Profile Image */}
                        <motion.div 
                            className="col-md-3 col-12"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="my_img">
                                <img 
                                    className="img-fluid border-primary" 
                                    src={myImg} 
                                    alt="Naveen Kumar Sarilla"
                                />
                            </div>
                        </motion.div>

                        {/* Right Section - Text Content */}
                        <motion.div 
                            className="col-md-7 col-12 mt-4"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <h1 className="fw-bold display-5">
                                Welcome to My <span className="text_primary">Portfolio</span>
                            </h1>
                            <p className="lead">
                                I am a <strong className='text_primary'>front-end developer</strong> with <strong>three years of experience</strong> in building high-performing and interactive web applications. My expertise includes <strong className='text_primary'>React.js, Redux, JavaScript, Tailwind CSS, and Node.js</strong>, allowing me to create dynamic user interfaces and seamless user experiences.
                            </p>
                            <ul className="lead home_points">
                                <li>🔹 <strong>Passionate about crafting beautiful, responsive, and user-friendly web applications.</strong>
                                </li>
                                <li>🔹 <strong>Skilled in modern web technologies and performance optimization.</strong></li>
                                <li>🔹 <strong>Dedicated to delivering high-quality code and innovative solutions.</strong></li>
                            </ul>
                            {/* Explore my work and Feel free to get in touch!  */}
                            <p className="lead">Feel free to get in touch!</p>

                            {/* Call to Action Buttons */}
                            <div className="mt-4">
                                <motion.a 
                                    target='_blank'
                                    href={resum} 
                                    className="btn btn-outline-dark btn-lg"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    View My Work
                                </motion.a>
                                <motion.a 
                                    href="#contact" 
                                    className="btn btn-outline-dark btn-lg m-2"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Contact Me
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Background Stars */}
                        <div className="home-container">
                            <div className="stars"></div>
                            <div className="twinkling"></div>
                            <div className="circles"></div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};
