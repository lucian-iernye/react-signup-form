import React, { useState } from "react";
import "../index.css";

export default function Form() {

  type State = {
    username: string
    email: string
    password: string
    isButtonDisabled: boolean
    isError: boolean
  }

  const initialState: State = {
    username: '',
    email: '',
    password: '',
    isButtonDisabled: true,
    isError: false,
  }
  

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

          <button type="submit">
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

