import { useState } from "react";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import "../styles/Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    if (!formData.message.trim()) newErrors.message = "Message is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully! 🚀");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.div
      className="Contact_c"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Contact
        </motion.h3>

        <div className="contact_form row">
          {/* Contact Form */}
          <motion.div
            className="contact_crd col-md-4 col-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form_ipt">
                <label htmlFor="name">Name:</label>
                <input
                  className="w-100"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>

              <div className="form_ipt">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="w-100"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="form_ipt">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="w-100"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>

              <motion.input
                className="w-100 submit-btn btn btn-outline-dark btn-lg"
                type="submit"
                value="Submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="col-md-6 col-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="row">
              <div className="col-12">
                <div className="cntf_crd ct_Phone d-flex col-12">
                  <div className="_phone">
                    <h3>Contact No:</h3>
                    <h5 style={{ display: "flex", gap: "15px" }}>
                      <i className="fas fa-mobile-alt"></i> +91 73825 9233
                    </h5>
                    <h5 style={{ display: "flex", gap: "15px" }}>
                      <i className="fas fa-mobile-alt"></i> +91 97012 9472
                    </h5>
                  </div>
                </div>

                <div className="cntf_crd ct_mail d-flex col-12">
                  <h3>Mail at</h3>
                  <h5>
                    <CiMail /> naveenksarill@gmail.com
                  </h5>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
