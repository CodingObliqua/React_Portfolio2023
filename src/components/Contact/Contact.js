// src/components/Contact/Contact.js
import React, { useState } from 'react';
// import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
        if (!formData.message.trim()) {
          newErrors.message = 'Message is required';
        }
        return newErrors;
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Form is valid, submit the data (add submission data here)
        // Reset the form and display a submission success message 
        setFormData({
            name:'',
            email:'',
            message:'',
        });
        setIsSubmitted(true);
    };

    return (
        <section className="contact-container">
            <h2>Contact</h2>
            {isSubmitted ? (
                <p>Thank you for your message! I'll get back to you soon! </p>
            ) : (
            <form on onSubmit={handleSubmit}>
                <div className="form-group">
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                />
                {errors.name && <div className="error">{errors.name}
                </div>}
                </div>
                <div className="form-group">
                <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                />
                {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="form-group">
                <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                ></textarea>
                {errors.message && <div className="error">{errors.message}</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
            )}
        </section>
    );
};

export default Contact;