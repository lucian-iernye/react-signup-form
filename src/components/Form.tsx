import React from "react";
import "../index.css";

export default function Form() {

  type State = {
    firstName: string
    lastName: string
    email: string
    password: string
    isButtonDisabled: boolean
    isError: boolean
  }

  const initialState: State = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isButtonDisabled: true,
    isError: false,
  }

  type Action = { type: 'setUsername', payload: string } |
                { type: 'setEmail', payload: string } |
                { type: 'setPassword', payload: string } |
                { type: 'setIsButtonDisabled', payload: boolean } |
                { type: 'loginSuccess', payload: string } |
                { type: 'loginFailed', payload: string } |
                { type: 'setIsError', payload: boolean };
  

  return (
    <section className="signup__form__container">
      <div className="form__container">
        <div className="text__container">
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. <br />
            Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </p>
        </div>

        <div className="inputs__container">
          <div className="ad__element">
            <p>Try it free 7 days then $20/mo. thereafter</p>
          </div>
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
      </div>
    </section>
  );
}
function useForm(arg0: string): { register: any; handleSubmit: any; } {
  throw new Error("Function not implemented.");
}

