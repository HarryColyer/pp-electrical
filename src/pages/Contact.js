import React, { useState, useEffect } from "react";
import "./css/contact.css";

function Contact() {
  const [state, setState] = useState({
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isCompanyValid, setCompanyValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isSubjectValid, setSubjectValid] = useState(true);
  const [isMessageValid, setMessageValid] = useState(true);
  const [isFormValid, setFormValid] = useState(false);

  const { company, email, subject, message } = state;

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateCompanyInput();
    validateEmailInput();
    validateSubjectInput();
    validateMessageInput();
    validateForm();
    if (isFormValid) {
      // then send data
    }
  };

  const validateCompanyInput = () =>
    company.length > 0 ? setCompanyValid(true) : setCompanyValid(false);

  const validateEmailInput = () =>
    email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ? setEmailValid(true)
      : setEmailValid(false);

  const validateSubjectInput = () =>
    subject.length > 0 ? setSubjectValid(true) : setSubjectValid(false);

  const validateMessageInput = () =>
    message.length > 0 ? setMessageValid(true) : setMessageValid(false);

  const validateForm = () => {
    return isCompanyValid && isEmailValid && isSubjectValid && isMessageValid
      ? setFormValid(true)
      : setFormValid(false);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="contact-comp">
      <form className="form" onSubmit={handleSubmit}>
        <h4>Contact Us</h4>
        <label htmlFor="company">Company Name</label>
        {!isCompanyValid && (
          <p className="required">Please enter your company name</p>
        )}
        <input
          className={isCompanyValid ? "" : "wrong"}
          name="company"
          type="text"
          value={company}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        {!isEmailValid && (
          <p className="required">Please enter a valid email address</p>
        )}
        <input
          className={isEmailValid ? "" : "wrong"}
          name="email"
          type="text"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="subjecct">Subject</label>
        {!isSubjectValid && <p className="required">Please enter a subject</p>}
        <input
          className={isSubjectValid ? "": "wrong"}
          name="subject"
          type="text"
          value={subject}
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
        {!isMessageValid && (
          <p className="required">Please enter your message</p>
        )}
        <textarea
          className={isMessageValid ? "": "wrong"}
          onChange={handleChange}
          name="message"
          id=""
          cols="30"
          rows="10"
          value={message}
        ></textarea>
        <button type="submit" className="form-btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
