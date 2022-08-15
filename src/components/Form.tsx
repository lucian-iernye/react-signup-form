import React, { useState } from "react";
import "../index.css";

export default function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
