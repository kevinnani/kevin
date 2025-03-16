import { FaHtml5 } from "react-icons/fa6";
import { PiFileCssLight } from "react-icons/pi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { DiMaterializecss } from "react-icons/di";
import "../styles/TechStack.css"


export const TechStack = () => {
    return (
        <>
        <div className=" container mt-4 min-vh-50">
        <h3>Tech Stack</h3>

            <div className="tech_stack_container">
               
                <div className="row teck_cords_contnainer">
                    <div className="col-md-2 col-12 teck_cord">
                    <FaHtml5 className="html" />
                        <h4>HTML</h4>
                    </div>
                    <div className="col-md-2 col-12 teck_cord">
                    <PiFileCssLight className="css" />
                        <h4>CSS</h4>
                    </div>
                    <div className="col-md-2 col-12 teck_cord">
                    <TbBrandJavascript className="svgg" />
                        <h4>javascript</h4>
                    </div>
                    <div className="col-md-2 col-12 teck_cord">
                    <FaReact />
                        <h4>REACT.JS</h4>
                    </div>
                    <div className="col-md-2 col-12 teck_cord">
                    <FaNode />
                        <h4>NODE.JS</h4>
                    </div>
                    <div className="col-md-2 col-12 teck_cord">
                    <SiMysql />
                        <h4>MYSQL</h4>
                    </div>
                    <div className="col-md-2 col-12 teck_cord">
                    <RiTailwindCssLine />
                        <h4>tailwind css</h4>
                    </div>
                    <div className="col-md-2 col-12 teck_cord">
                    <FaBootstrap />
                        <h4>Bootstrap </h4>
                    </div>
                    <div className="col-md-2 col-12 teck_cord">
                    <DiMaterializecss />
                        <h4>material ui</h4>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}