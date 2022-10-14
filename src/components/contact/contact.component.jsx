import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "./contact.css";
import { BsArrowDownCircleFill } from "react-icons/bs";

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

  //   const [userName, setUserName] = useState("");
  //   const [userEmail, setUserEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     setUserName("");
  //     setUserEmail("");
  //     setMessage("");
  //   };

  return (
    <div className="container">
      <img
        className="lessons-logo"
        src="https://images.unsplash.com/photo-1604286742257-9d211b05b0df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="lessons"
      />
      <div className="type-container">
        <div class="typewriter">
          <h1>Getting started with an instrument?</h1>
          <h2>
            Message Us! <BsArrowDownCircleFill className="arrow bounce" />
          </h2>
        </div>
      </div>

      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default ContactUs;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  margin-left: 750px;
  form {
    display: flex;
    align-items: flex-start;
    margin: auto;
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
        border: 2px solid #b71c1c;
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
        border: 2px solid #b71c1c;
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: black;
      color: white;
      border: none;
    }
  }
`;
