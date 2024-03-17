import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactForm,
  ContactHeading,
  ContactInput,
  ContactLabel,
  ContactTextarea,
} from "./contactStlyes";
import { NormalButton } from "../../components/ui/buttonStyles";

export const ViewContact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mikael Rönnberg",
          from_email: form.email,
          to_email: "ronnberg.mikael.webdev@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you ASAP.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <ContactForm ref={formRef} onSubmit={handleSubmit}>
      <ContactLabel>
        <ContactHeading>Your Name</ContactHeading>
        <ContactInput
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
        />
      </ContactLabel>
      <ContactLabel>
        <ContactHeading>Your email</ContactHeading>
        <ContactInput
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email address?"
        />
      </ContactLabel>
      <ContactLabel>
        <ContactHeading>Your Message</ContactHeading>
        <ContactTextarea
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
        />
      </ContactLabel>

      <NormalButton type="submit">
        {loading ? "Sending..." : "Send"}
      </NormalButton>
    </ContactForm>
  );
};
