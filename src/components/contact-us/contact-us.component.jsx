import React, { useState, useReducer } from "react";
import emailjs from "emailjs-com";

//Components
import HeaderTwo from "../title-header/title-header.component";
import Button from "../button/button.component";

//Styles
import { Form, FormContent, Input, TextArea } from "./contact-us.styles";

const ContactUs = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: "", email: "", subject: "", message: "" }
  );

  const handleSubmit = e => {
    e.preventDefault();

    let templateParams = {
      name: userInput.name,
      email: userInput.email,
      subject: userInput.subject,
      message: userInput.message
    };

    emailjs
      .send(
        "gmail",
        "portfolio_email_template",
        templateParams,
        "user_aOad334448DOEpC6NExRW"
      )
      .then(response => {
        if (response.status === 200) setSuccess(true);
      })
      .catch(err => {
        // console.log("FAILED...", err.text);
        setError(
          "Something happened, please try later again :( - \nThis page will reload automatically. "
        );
      });
    resetForm();
  };

  const resetForm = () => {
    setUserInput({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput({ [name]: value });
  };

  const alertPrompt = () => {
    if (error) {
      alert(error);
      window.location.reload(false);
    } else if (success) {
      alert("Your message has been submitted!");
      window.location.reload(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <HeaderTwo title="Contact" />

        {success ? alertPrompt() : alertPrompt()}

        <span>
          Do you have a question or just simply want to propose something?
        </span>

        <FormContent>
          <Input
            placeholder="Full Name"
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Email address"
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Subject"
            type="text"
            name="subject"
            value={userInput.subject}
            onChange={handleChange}
            required
          />
          <TextArea
            type="text"
            placeholder="Your Message"
            name="message"
            value={userInput.message}
            onChange={handleChange}
            required
          >
            {userInput.message}
          </TextArea>
        </FormContent>

        <div className="submitButton">
          <Button
            text="Submit"
            // color="#2998ff"
            // bgColorHover="#2998ff"
            // border="#2998ff"
            color="#5643fa"
            bgColor="transparent"
            colorHover="white"
            type="submit"
            bgColorHover="#5643fa"
            borderColorHover="#5643fa"
            border="#5643fa"
          />
        </div>
      </Form>
    </>
  );
};

export default ContactUs;
