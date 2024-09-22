import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import "./signup.css"; // Assuming you are adding styles in signup.css

const SignUpPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    parent_name: '',
    parent_no: '',
    parent_email: '',
    grad: '',
    event: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Function to toggle the popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
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
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service parameters
    const serviceId = 'service_5fk7nlk'; // Replace with your EmailJS service ID
    const templateId = 'template_024wsdk'; // Replace with your EmailJS template ID
    const userId = '28FG6B0v2k7ADJ2Vu'; // Replace with your EmailJS user ID
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      parent_name: formData.parent_name,
      parent_no: formData.parent_no,
      parent_email: formData.parent_email,
      grad: formData.grad,
      event: formData.event,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(
        () => {
          console.log('SUCCESS!');
          setIsOpen(false); // Close popup after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Failed to send email. Please try again.');
        }
      );
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
              <button type="submit" className="submit-btn">
                Submit
              </button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPopup;
