import React, { useState } from "react";
import "../index.css";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default function Form() {
  interface signUpForm {
    username: string;
    email: string;
    password: string;
  }

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  

  const signUp = () => {
    const data = {
      username: username,
      email: email,
      password: password,
    };

    console.log(data);
  };

  return (
    <section className="signup__form__container">
      <div className="form__container">
        <form className="form">
          <input
            type="text"
            name="username"
            required
            autoComplete="false"
            placeholder="Username"
          />

          <input
            type="email"
            name="email"
            required
            autoComplete="false"
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            required
            autoComplete="false"
            placeholder="Password"
          />

          <button type="submit" onClick={signUp}>
            Sign-up
          </button>
        </form>
      </div>
    </section>
  );
}
function useForm(arg0: string): { register: any; handleSubmit: any; } {
  throw new Error("Function not implemented.");
}

