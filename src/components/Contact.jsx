import React from "react";
import { useState } from "react";
import "./Contact.css";
import { GithubIcon, InstaIcon, ReactIcon } from "./icon";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    fetch(
      "https://script.google.com/macros/s/AKfycbyiCNA4vQoD5W4Uh2Vm9P0DxbiJIr1qVGmfAANf6CqFMTirGfCsTPVim5g-63iiuMNApQ/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Form berhasil dikirim!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Gagal mengirim form!");
      });
  };

  return (
    <div className="Contact" id="Contact">
      <div className="cont" data-aos="fade-up">
        <h1>Get in Touch</h1>
        <p>"Communication is the key of successful relationship"</p>
        <div className="Fill-Box">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              id=""
              placeholder="your-email@mail.com"
            />
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              id=""
              placeholder="Your message..."
            ></textarea>
            <button className="submit-btn">Submit Message</button>
          </form>
        </div>
      </div>
      <div className="tact" data-aos="fade-down">
        <div className="tact-half">
          <div className="item-icons">
            <a href="https://www.linkedin.com/in/ferimmanuel7/" target="_blank">
              <img
                width="20px"
                height="20px"
                src="..\assets\proj\linkedin.png"
                className="Cont-Icons"
              />
            </a>
            <a href="https://github.com/nocturne47" target="_blank">
              <GithubIcon className="Cont-Icons" />
            </a>
            <a href="https://www.instagram.com/ferimmanuel7/" target="_blank">
              <InstaIcon className="Cont-Icons" />
            </a>
          </div>
          <p>
            Feel free to send me message to{" "}
            <a href="mailto:immanuelnaibaho1@gmail.com">
              immanuelnaibaho1@gmail.com
            </a>
          </p>
        </div>
        <div className="pic-cont"></div>
      </div>
    </div>
  );
}

export default Contact;
