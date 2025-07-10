import "./Contact.css";
import { themeContext } from "../../../Content";
import { useContext } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        form.current,
        {
          publicKey: import.meta.env.VITE_API_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email");
        }
      );
  };
  return (
    <>
      <div className="contact">
        <div className="contact-left">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact Me</span>
        </div>
        <div className="contact-right">
          <form className="contact-right" ref={form} onSubmit={sendEmail}>
            <span>Your Name</span>
            <textarea
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
              }}
              placeholder="Your name please?"
              className="contact-message"
              name="from_name"
            ></textarea>
            <span>Your Email</span>
            <textarea
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
              }}
              placeholder="What's your web address?"
              name="from_email"
            ></textarea>
            <span>Your Message</span>
            <textarea
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
              }}
              placeholder="What you want to say?"
              name="message"
            ></textarea>
            <button className="button contactButton" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="Footer"> </div>
    </>
  );
}
export default Contact;
