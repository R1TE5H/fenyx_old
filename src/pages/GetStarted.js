import React from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

import "../styles/pageStyles/followUps.css";
import "../styles/pageStyles/landing.css";
import "../styles/main.css";

export default function GetStarted() {
  const schema = Joi.object({
    first_name: Joi.string().required().min(3).max(100).label("First Name"),
    last_name: Joi.string().required().min(3).max(100).label("Last Name"),
    phone: Joi.string().required().min(10).max(15).label("Phone Number"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().required().min(8).max(255).label("Password"),
  });
  const {
    register,
    handleSubmit,
    // To determine if the form is valid use isValid property
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="fadeIn">
        <div
          className="section fadeIn center"
          style={{
            marginTop: "5%",
            marginBottom: "10%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ textAlign: "center" }}>
            <span className="hero gradient-text">Create an Account</span>
            <br /> <br />
            <span style={{ width: "280px" }}>
              Create an account and automatically join our wait list.
            </span>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <label htmlFor="first_name" className="">
                First Name
              </label>
              <input
                {...register("first_name")}
                id="first_name"
                type="text"
                className=""
              />
              {errors.first_name && (
                <p className="alert-text">{errors.first_name.message}</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="last_name" className="">
                Last Name
              </label>
              <input
                {...register("last_name")}
                id="last_name"
                type="text"
                className=""
              />
              {errors.last_name && (
                <p className="alert-text">{errors.last_name.message}</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="phone" className="">
                Phone Number
              </label>
              <input
                {...register("phone")}
                id="phone"
                type="tel"
                className=""
              />
              {errors.phone && (
                <p className="alert-text">{errors.phone.message}</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className=""
              />
              {errors.email && (
                <p className="alert-text">{errors.email.message}</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                type="password"
                className=""
                style={{ fontSize: "26px", fontWeight: "bolder" }}
              />
              {errors.password && (
                <p className="alert-text">{errors.password.message}</p>
              )}
            </div>
            <div className="btn-container center">
              <button className="link gradient-background" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
