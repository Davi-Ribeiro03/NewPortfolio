import "./Contact.css";
import CardRedesSocias from "../CardRedesSociais/CardRedesSocias";
import { toast, ToastContainer } from "react-toastify";

import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    toast.success("Salvo com sucesso!");
    console.log(data);
    reset();
  };

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
      <h2>Contact me</h2>
      <div className="form">
        <form action="">
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

          <button
            className={
              (errors.contato || errors.email || errors.name) &&
              "button-disabled"
            }
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}
          >
            Enviar
          </button>
        </form>
      </div>
      <CardRedesSocias />
    </div>
  );
};

export default Contact;
