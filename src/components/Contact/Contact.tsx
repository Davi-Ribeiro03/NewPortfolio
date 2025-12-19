import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import {
  MdOutlineMail,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
  MdSend,
} from "react-icons/md";

import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const buttonDesabled =
    errors.contato ||
    errors.email ||
    errors.name ||
    errors.message ||
    isLoading;

  const onSubmit = async (data: FieldValues) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error(
        "Serviço de email não está configurado. Confira as variáveis de ambiente."
      );
      console.error("EmailJS not configured:", {
        serviceId,
        templateId,
        publicKey,
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          title: "New Contact Message",
          name: data.name,
          email: data.email,
          contato: data.contato,
          message: data.message,
        },
        publicKey
      );

      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  const iconStyle = { color: "#FDC025", size: 25 };

  const infos = [
    {
      icon: <MdOutlineMail {...iconStyle} />,
      title: "Email",
      content: "davi.75.ef@gmail.com",
    },
    {
      icon: <MdOutlineLocalPhone {...iconStyle} />,
      title: "Telefone",
      content: "+55 (85) 98172-1495",
    },
    {
      icon: <MdOutlineLocationOn {...iconStyle} />,
      title: "Localização",
      content: "Fortaleza, Ce",
    },
  ];

  return (
    <div className="containerContact" id="contact">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h2>
        Get In <strong>Touch</strong>
      </h2>
      <p className="subtitle">
        Tem um projeto em mente? Vamos trabalhar juntos para criar algo
        incrível.
      </p>
      <div className="contact-content">
        <div className="lets-connect">
          <h3>Let's Connect</h3>
          <p>
            Estou sempre aberto a discutir novas oportunidades, projetos
            criativos ou simplesmente bater um papo sobre tecnologia e design.
            Sinta-se à vontade para entrar em contato por qualquer um dos canais
            abaixo.
          </p>

          {infos.map((info, index) => (
            <div className="info" key={index}>
              <div className="icon">{info.icon}</div>
              <div className="texts">
                <p>{info.title}</p>
                <p className="content">{info.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <section>
              <label htmlFor="name">Name</label>
              <input
                className={errors?.name && "input-error"}
                type="text"
                id="name"
                {...register("name", { required: true })}
                placeholder="Seu nome"
              />
              {errors?.name?.type === "required" && (
                <span className="message-error">Name is required</span>
              )}
            </section>
            <section>
              <label htmlFor="email">Email</label>
              <input
                className={errors?.email && "input-error"}
                type="text"
                id="email"
                {...register("email", { required: true })}
                placeholder="Seu email"
              />
              {errors?.email?.type === "required" && (
                <span className="message-error">Email is required</span>
              )}
            </section>
            <section>
              <label htmlFor="contato">whatsaap</label>
              <input
                className={errors?.contato && "input-error"}
                type="text"
                id="contato"
                {...register("contato", { required: true })}
                placeholder="Seu contato"
              />
              {errors?.contato?.type === "required" && (
                <span className="message-error">Contact is required</span>
              )}
            </section>

            <section>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className={errors?.message && "input-error"}
                {...register("message", { required: true })}
                placeholder="Sua mensagem"
                rows={5}
              />
              {errors?.message?.type === "required" && (
                <span className="message-error">Message is required</span>
              )}
            </section>

            <button
              type="submit"
              className={`${buttonDesabled ? "button-disabled" : ""}`}
              disabled={!!buttonDesabled}
              aria-busy={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner" aria-hidden="true"></span>
                  Enviando...
                </>
              ) : (
                <>
                  <MdSend size={25} />
                  Enviar
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
