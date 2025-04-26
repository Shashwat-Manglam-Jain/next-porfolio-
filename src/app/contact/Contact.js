import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!firstNameRef.current.value || !emailRef.current.value || !messageRef.current.value) {
      alert("Please fill in all required fields.");
      return;
    }

    emailjs
      .send(
        "service_0tuttzi",  // ✅ Replace with your EmailJS Service ID
        "template_ym54ran", // ✅ Replace with your EmailJS Template ID
        {
          user_name: firstNameRef.current.value + " " + lastNameRef.current.value,
          user_email: emailRef.current.value,
          message: messageRef.current.value,
        },
        "IfHVzxWxY0Wrl_Vdn" // ✅ Replace with your EmailJS Public Key
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email. Check console for details.");
      });

    // Clear form fields after sending
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div id="Contact">
      <form onSubmit={sendEmail}>
        <p className="us" id="xcnt">Contact Me</p>

        <div className="cd" id="lxcnt">
          <div className="cd1">
            <div className="cd2">
              <input type="text" placeholder="First Name" className="n1" ref={firstNameRef} required />
              <input type="text" placeholder="Last Name" className="n1" ref={lastNameRef} required />
            </div>

            <input type="email" placeholder="Email Address" className="eml" ref={emailRef} required />
            <textarea placeholder="Your Message" className="msg" ref={messageRef} required style={{ overflow: "hidden" }}></textarea>

            <button className="bnt" type="submit" style={{ cursor: "pointer" }}>
              <div className="c2">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: "25px", height: "25px", position: "relative", top: "3px", right: "5px" }}>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                </svg>
                Send
              </div>
            </button>
          </div>

          <div className="db1" id="rlxcnt">
            <p className="c1">Let's talk about everything!!</p>
            <p className="c12">Please share your details.</p>
            <p className="c3">Will look forward to you. ❤️</p>

            <div style={{ display: "flex" }}>
              <p className="c00">Contact No:</p>
              <p className="c10">9424422001</p>
            </div>

            <div style={{ display: "flex" }}>
              <p className="c00">Email:</p>
              <p className="c10">shashwat100K@gmail.com</p>
            </div>

            <div>
              <br />
              <div className="iccc">
                <a href="https://github.com/Shashwat-Manglam-Jain" target="_blank" rel="noopener noreferrer">
                  <img src="https://res.cloudinary.com/domiypko6/image/upload/v1734713488/Portfolio/mernProject/fops713yfxwoeybyc6ai.png" alt="GitHub" className="iko1" />
                </a>

                <a href="https://www.instagram.com/shashwat_manglam_jain_/" target="_blank" rel="noopener noreferrer">
                  <img className="iko1" src="https://res.cloudinary.com/domiypko6/image/upload/v1734714375/Portfolio/mernProject/qxscao4rtzuotuiqpdjg.png" alt="Instagram" />
                </a>

                <a href="https://www.linkedin.com/in/shashwat-manglam-jain-5930b4275/" target="_blank" rel="noopener noreferrer">
                  <img className="iko1" src="https://res.cloudinary.com/domiypko6/image/upload/v1734713734/Portfolio/mernProject/wl9npolhelzbycl4i0kl.png" alt="LinkedIn" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
