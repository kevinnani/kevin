import myImg from '../assets/Kevin.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css"
import '../styles/Twinkling.css'

export const Home = () => {
    return (
       <>
        
       
        <section className="home min-vh-100 d-flex  justify-content-center align-items-center">
            <div className="container">
                <div className="home_contant row  align-items-center text-center text-md-start">
                    {/* Left Section - Profile Image */}
                    <div className="col-md-3 col-12">
                        <div className="my_img">
                            <img 
                                className="img-fluid  border-primary" 
                                src={myImg} 
                                alt="Naveen Kumar Sarilla"
                            />
                        </div>
                    </div>

                    {/* Right Section - Text Content */}
                    <div className="col-md-7 col-12">
                       
                        <h4 className="text_muted"></h4>
                        <h1 className="fw-bold display-5">
                            {/* Hi, I'm <span className="text_primary">Naveen Kumar Sarilla</span> */}
                            Welcome to my
                        Portfolio
                        </h1>
                        <p className="lead ">
                        I am a front-end developer with three years of proven experience in building interactive and high-performing web applications. Skilled in <span className="text_primary">React.js, Redux, JavaScript, Tailwind CSS, and Node.js </span> R, I specialize in creating dynamic user interfaces and seamless user experiences.  <span className="text_primary"> dashboards, data visualization using charts </span>, and backend technologies like <span className="text_primary"> MySQL </span>. Passionate about both front-end and back-end development, I strive to deliver efficient and scalable solutions
                        </p>
                        
                        {/* Call to Action Buttons */}
                        <div className="mt-4">
                            <a href="#portfolio" className="btn btn-primary btn-lg me-3">View My Work</a>
                            <a href="#contact" className="btn btn-outline-dark btn-lg">Contact Me</a>
                        </div>
                    </div>

                    <div className="home-container">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="circles"></div>
        </div>
                </div>
            </div>
        </section></>
    );
};
