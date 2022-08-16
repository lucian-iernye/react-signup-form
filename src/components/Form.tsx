import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "../index.css";
import errorSvg from "../assets/icon-error.svg";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  console.log(errors);

  const validationStyle = {
    borderWidth: "2px",
    borderColor: "hsl(0, 100%, 74%)",
    backgroundImage: `url(${errorSvg})`,
    backgroundPosition: "right 20px bottom 20px",
    backgroundRepeat: "no-repeat",
  };

  const renderErrors = (error: any) => {
    if (error && error.message) {
      return error.message;
    }
  };

  return (
    <section className="signup__form__container">
      <div className="form__container">
        <div className="text__container text-white">
          <h1 className="mb-2">Learn to code by watching others</h1>
          <h2 className="mb-2">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </h2>
        </div>

        <div className="inputs__container">
          <div className="ad__element w-full rounded-md shadow-lg shadow-gray-700">
            <p className="py-4 text-white text-center">
              <span className="font-bold">Try it free 7 days </span>then{" "}
              <span className="ad__new__line"> $20/mo. thereafter</span>
            </p>
          </div>
          <form
            className="form w-full h-full p-6 shadow-lg shadow-gray-700 bg-white rounded-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              style={errors.firstName && validationStyle}
              autoComplete="off"
              placeholder={errors.firstName ? "" : "First Name"}
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First Name cannot be empty",
                },
                minLength: {
                  value: 2,
                  message: "First Name needs to be longer",
                },
                maxLength: {
                  value: 16,
                  message: "First Name cannot be more than 16 characters",
                },
              })}
            />
            <p className="text-right h-10">{renderErrors(errors.firstName)}</p>

            <input
              type="text"
              style={errors.lastName && validationStyle}
              autoComplete="off"
              placeholder={errors.lastName ? "" : "Last Name"}
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last Name cannot be empty",
                },
                minLength: {
                  value: 2,
                  message: "Last Name needs to be longer",
                },
                maxLength: {
                  value: 16,
                  message: "Last Name cannot be more than 16 characters",
                },
              })}
            />
            <p className="text-right h-10">{renderErrors(errors.lastName)}</p>

            <input
              type="text"
              style={errors.email && validationStyle}
              autoComplete="off"
              placeholder={errors.email ? "" : "Email Address"}
              {...register("email", {
                required: {
                  value: true,
                  message: "Email cannot be empty",
                },
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Looks like this is not an email",
                },
              })}
            />
            <p className="text-right h-10">{renderErrors(errors.email)}</p>

            <input
              type="password"
              style={errors.password && validationStyle}
              autoComplete="off"
              placeholder={errors.password ? "" : "Password"}
              {...register("password", {
                required: {
                  value: true,
                  message: "Password cannot be empty",
                },
                minLength: {
                  value: 3,
                  message: "The password needs to be longer",
                },
                maxLength: {
                  value: 16,
                  message: "The password cannot be more than 16 characters",
                },
              })}
            />
            <p className="text-right h-10">{renderErrors(errors.password)}</p>

            <button className="submit-btn w-full py-4 rounded-md mb-4 text-white">
              CLAIM YOUR FREE TRIAL
            </button>
            <h3 className="footer__text">
              By clicking the button, you are agreeing to{" "}
              <h4 className="footer__text__new__line">
                our <span className="terms">Terms and Services</span>
              </h4>
            </h3>
          </form>
        </div>
      </div>
    </section>
  );
}
