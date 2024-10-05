import { useState } from "react"; 
import emailjs from "emailjs-com";
import "./signup.css";
import axios from "axios";

const SignUpPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    parent_name: "",
    parent_no: "",
    parent_email: "",
    grad: "",
    event: "",
    password: "", // Added password field
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false); // State for success popup

  // Function to toggle the signup popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the success popup
  const toggleSuccessPopup = () => {
    setIsSuccessOpen(!isSuccessOpen);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS service parameters
    const serviceId = "service_5fk7nlk"; // Replace with your EmailJS service ID
    const templateId = "template_024wsdk"; // Replace with your EmailJS template ID
    const userId = "28FG6B0v2k7ADJ2Vu"; // Replace with your EmailJS user ID
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      parent_name: formData.parent_name,
      parent_no: formData.parent_no,
      parent_email: formData.parent_email,
      grad: formData.grad,
      event: formData.event,
    };

    try {
      // Send data to your backend API
      await axios.post("http://localhost:8080/api/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password, // Send password to backend
        parent_name: formData.parent_name,
        parent_no: formData.parent_no,
        parent_email: formData.parent_email,
        grad: formData.grad,
        event: formData.event,
      });

      // Send email through EmailJS
      await emailjs.send(serviceId, templateId, templateParams, userId);

      // On success, show success message and close signup popup
      setSuccessMessage(
        "Thank You for signing up with recruitmate ! We're thrilled to have you join our community. Someone from our team will reach out to you shortly regarding the next steps"
      );
      setIsSuccessOpen(true); // Open success popup
      setIsOpen(false); // Close signup popup
      setErrorMessage(""); // Clear any previous error messages
    } catch (error) {
      console.error("Signup error:", error); // Log the error
      setErrorMessage("Failed to sign up. Please try again.");
      setSuccessMessage(""); // Clear any previous success messages
    }
  };
 
  return (
    <div className="signup-popup">
      <button className="open-popup-btn" onClick={togglePopup}>
        Sign Up
      </button>

      {isOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup-btn" onClick={togglePopup}>
              &times;
            </button>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Athlete's Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Athlete's Email"
                required
              />
              <input
                type="text"
                name="parent_name"
                value={formData.parent_name}
                onChange={handleChange}
                placeholder="Parent's Name"
                required
              />
              <input
                type="tel"
                name="parent_no"
                value={formData.parent_no}
                onChange={handleChange}
                placeholder="Parent's Phone Number"
                required
              />
              <input
                type="email"
                name="parent_email"
                value={formData.parent_email}
                onChange={handleChange}
                placeholder="Parent's Email"
                required
              />
              <input
                type="text"
                name="grad"
                value={formData.grad}
                onChange={handleChange}
                placeholder="Graduation Year"
                required
              />
              <input
                type="text"
                name="event"
                value={formData.event}
                onChange={handleChange}
                placeholder="Event"
                required
              />
              <input
                type="password" // Password input type
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {isSuccessOpen && (
        <div className="popup-overlay" onClick={toggleSuccessPopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup-btn" onClick={toggleSuccessPopup}>
              &times;
            </button>
            <h2>Success!</h2>
            <p>{successMessage}</p>
            <button onClick={toggleSuccessPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPopup;
