import '../styles/Contact.css'
import { CiMail } from "react-icons/ci";
export const Contact = () =>{
    return (
        <>
        <div className="Contact_c  ">
        <div className="container">
            <h3>Contact</h3>

            <div className="contact_form row">

                <div className='contact_crd col-md-4 col-12'>
                <form action="" >
                    <div className="form_ipt">
                        <label htmlFor="">Name :</label>
                        <input className='w-100' type="text" placeholder="kevin" />
                    </div>
                    <div className="form_ipt">
                        <label htmlFor="">Email :</label>
                        <input type="email"  className='w-100' placeholder="kevin" />
                    </div>

                    <div className="form_ipt">
                        <label htmlFor="">Message :</label>
                       <textarea className='w-100' name=""  id=""></textarea>
                    </div>
                    <input className='w-100' type="submit" value="submit" />
                </form>
                </div>
               
                <div className='col-md-6 col-12'>
                    <div className="row">
                        <div className="col-12">
                        <div className="cntf_crd ct_Phone d-flex  col-12">
                    <div className="_phone">
                        <h3>Contact No: </h3>
                        <h5 style={{display:'flex',gap:'15px'}}> 
                           <i className='fas fa-mobile-alt'></i>
                            +91 73825 9233
                        </h5>
                        <h5 style={{display:'flex',gap:'15px'}}> 
                           <i className='fas fa-mobile-alt'></i>
                            +91 97012 9472
                        </h5>
                    </div>
                </div>

                <div className="cntf_crd ct_mail d-flex  col-12">
                    <h3>Mail at</h3>
                    <h5> <CiMail /> naveenksarill@gmail.com</h5>
                </div>
                        </div>
                    </div>
                </div>

       
            </div>
        </div>
        </div>
        </>
    )
}