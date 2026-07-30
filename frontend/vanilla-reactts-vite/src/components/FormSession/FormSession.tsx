import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

export const FormSession = () => {
  const navigate = useNavigate();
  const LOGIN = "SIGNIN";
  const REGISTER = "SIGNUP";
  const [sign, setSing] = useState(LOGIN);
  const { formState, onChangeInput } = useForm({ email: "", password: "" });
  const { login, register } = useAuth();

  const handlerSubmitLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email = "", password = "" } = formState as {
      email: string;
      password: string;
    };
    login(email, password)
      .then((u) => {
        console.log(u);
        navigate("/", { replace: true });
      })
      .catch(console.log);
  };
  const handlerSubmitRegister = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email = "", password = "" } = formState as {
      email: string;
      password: string;
    };
    register(email, password, "user")
      .then((u) => {
        console.log(u);
        navigate("/", { replace: true });
      })
      .catch(console.log);
  };

  return (
    <>
      <form
        onSubmit={sign == LOGIN ? handlerSubmitLogin : handlerSubmitRegister}
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={formState.email ? String(formState.email) : ""}
          onChange={onChangeInput}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={formState.password ? String(formState.password) : ""}
          onChange={onChangeInput}
        />
        <button type="submit">Iniciar sesion</button>
      </form>
      {sign === LOGIN && (
        <p>
          No tines una cuenta?{" "}
          <span style={{ cursor: "pointer" }} onClick={() => setSing(REGISTER)}>
            {" "}
            Crear cuenta
          </span>
        </p>
      )}
      {sign === REGISTER && (
        <p>
          Tines una cuenta?{" "}
          <span style={{ cursor: "pointer" }} onClick={() => setSing(LOGIN)}>
            {" "}
            Login
          </span>
        </p>
      )}
    </>
  );
};
