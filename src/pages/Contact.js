import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_ou7m5av', e.target, 'user_5Fo0q1FlMbRyGpPaIkinF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Your message was sent successfully!");
  }

return (
    <div id="entire">
    <h1 className="text-center messageHeader">Contact me</h1>
<MDBContainer id="Contact">
  <MDBRow>
    <MDBCol>
      <form id="form" onSubmit={sendEmail} action="mailto:devonbrewster31@gmail.com" method="post" encType="text">
        <div className="grey-text">
          <MDBInput name="name" label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput name="email" label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput name="subject" label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput name="message" type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn id="sendbtn" type="submit">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
);
};

export default Contact;