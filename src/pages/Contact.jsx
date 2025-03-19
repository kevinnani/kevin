import { useState } from "react";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import "../styles/Contact.css";
import { db, collection, addDoc, doc, getDoc, setDoc } from "../fire/firebaseConfig";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails

    setIsSubmitting(true); // Disable submit button

    try {
      // Get the last used ID from Firestore (stored in /counters/contacts)
      const counterDocRef = doc(db, "counters", "contacts");
      const counterDocSnap = await getDoc(counterDocRef);
      let newId = 1; // Default ID if no counter exists

      if (counterDocSnap.exists()) {
        const data = counterDocSnap.data();
        newId = data.lastId + 1; // Increment ID
      }

      // Store new contact with incremented ID
      await setDoc(doc(db, "contacts", newId.toString()), {
        id: newId.toString(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      // Update the counter document with new lastId
      await setDoc(counterDocRef, { lastId: newId });

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Error sending message. Please try again.");
    }

    setIsSubmitting(false);
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

              <button className="w-100 submit-btn btn btn-outline-dark btn-lg" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
