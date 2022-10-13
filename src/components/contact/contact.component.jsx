import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yj8otc5",
        "template_7195oq5",
        form.current,
        "QHGD6MhK-8k_N0GYW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName("");
    setUserEmail("");
    setMessage("");
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" value={userName} />
        <label>Email</label>
        <input type="email" name="user_email" value={userEmail} />
        <label>Message</label>
        <textarea name="message" value={message} />
        <input type="submit" value="Send" onSubmit={handleSubmit} />
      </form>
    </StyledContactForm>
  );
};

export default ContactUs;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
