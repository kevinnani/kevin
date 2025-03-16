import cse from '../assets/cse.png'
import bcom from '../assets/bcom.png'
import mba from '../assets/mba.png'
import '../styles/About.css'
import kevin from '../assets/kevin.jpeg'

export const About = () => {
    return(
        <>
       <div className="aboutMe_BG">
       <div className="container flex_container min-vh-100">
            <div className="about_me">
                <h3>About Me</h3>
            <div className="row about__container">
                <div className="col-md-8 col-12">
                    <h1 className="fw-bold display-5"> Hi, I'm <span className="text_primary">Naveen Kumar Sarilla</span></h1>
                    <p className="lead">
                    I am a self-taught programmer with a passion for learning and exploring new technologies. I have a strong background in FrontEnd Development and improving full-stack development and am always eager to expand my skillset and take on new challenges. 
                    </p>
                </div>
                <div className="col-md-3 col-12 ab_img_c">
                    <img src={kevin} className='img-fluid' alt="" />
                </div>

            </div>

            <div className="Educational mt-4">
            <h3>My Educational Background</h3>
          
            <div className="row Educational_curd">
                <div className="sd-list col-md-3 col-12">
                <img src={cse} className='img-fluid w-25' alt="" />    
               <p className='lead ed_c'> Computer Science Engineeringr</p>
               <p className='ed_cdp'> I have completed my degree in Computer Science Engineering, gaining strong technical expertise in software development and problem-solving.</p>
               </div>
                <div className="sd-list col-md-3 col-12">
                <img src={bcom} className='img-fluid w-25' alt="" /><p className='ed_c lead'> Bachelor of Commerce</p>
                <p className='ed_cdp'>My Bachelor of Commerce degree has provided me with a solid understanding of business processes, finance, and management."</p></div>
                <div className="sd-list col-md-3 col-12"> <img src={mba} className='img-fluid w-25' alt="" />
                <p className='lead ed_c'>Master of Business Administration</p>
                <p className='ed_cdp'>With an MBA, I have honed my skills in leadership, strategy, and decision-making.</p></div>

            </div>

            </div>

            </div>
        </div>
       </div>
        
        </>
    )
}