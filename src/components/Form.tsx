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
  

  return (
    <section className="signup__form__container px-32 py-32 w-screen h-screen">
      <div className="form__container w-full h-full flex justify-center items-center">
        <div className="text__container text-white w-1/2 flex flex-col justify-center items-center mr-4">
          <h1 className="text-7xl font-medium mb-6">Learn to code by watching others</h1>
          <h2 className="font-normal text-2xl">See how experienced developers solve problems in real-time. <br />
            Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </h2>
        </div>

        <div className="inputs__container flex flex-col justify-center items-end w-1/2 ml-4">
          <div className="ad__element w-full bg-blue-800 rounded-md shadow-lg shadow-gray-700">
            <p className="py-4 text-white text-center"><span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter</p>
          </div>
          <form className="form w-full h-full flex flex-col items-center justify-center mt-5 p-9 shadow-lg shadow-gray-700 bg-white rounded-md">
          <input
            type="text"
            name="firstName"
            required
            autoComplete="off"
            placeholder="First name"
          />

            <input
            type="text"
            name="lastName"
            required
            autoComplete="off"
            placeholder="Last name"
          />

          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            placeholder="Password"
          />

          <button className="w-full py-4 bg-green-500 rounded-md mb-4 text-white">CLAIM YOUR FREE TRIAL</button>
            <p className="text-xs">By clicking the button, you are agreeing to our Terms and Services</p>
        </form>
        </div>
      </div>
    </section>
  );
}
function useForm(arg0: string): { register: any; handleSubmit: any; } {
  throw new Error("Function not implemented.");
}

