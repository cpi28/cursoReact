import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Form.modules.css";

const Form = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i6j0nt9",
        "template_t0pevej",
        form.current,
        "jkFPmkqndNKvoQH_a"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMensaje("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="field">
      <label>Nombre</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mensaje</label>
      <textarea name="message" />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Form;
