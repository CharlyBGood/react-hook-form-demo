import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        {...register("name", {
          required: {
            value: true,
            message: "Name is required",
          },
          minLength: {
            value: 2,
            message: "Min length must be at least 2 characters",
          },
          maxLength: {
            value: 20,
            message: "Max length must be less than 20 characters",
          },
        })}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Email not valid",
          },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <label htmlFor="password">password</label>
      <input
        type="password"
        {...register("password", {
          required: {
            value: true,
            message: "Password is required",
          },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <label htmlFor="confirmPassword">confirm password</label>
      <input
        type="password"
        {...register("confirmPassword", {
          required: true,
        })}
      />
      <label htmlFor="birthDate">birthdate</label>
      <input
        type="date"
        {...register("birthDate", {
          required: {
            value: true,
            message: "birthdate is required",
          },
          validate: (value) => {
            const birthDate = new Date(value);
            const actualDate = new Date();
            const age = actualDate.getFullYear() - birthDate.getFullYear();
            console.log(age);

            return age >= 18 || "you must be an adult";
          },
        })}
      />
      {errors.birthDate && <span>{errors.birthDate.message}</span>}
      <label htmlFor="countrie">countrie</label>
      <select {...register("countrie")}>
        <option value="mx">mexico</option>
        <option value="co">colombia</option>
        <option value="ar">argentina</option>
      </select>
      <label htmlFor="picFile">profile pic</label>
      <input type="file" {...register("picFile")} />
      <label htmlFor="terms">Accept terms and conditions</label>
      <input
        type="checkbox"
        {...register("terms", {
          required: true,
        })}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default App;
