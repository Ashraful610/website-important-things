import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {register,handleSubmit,watch,formState: { errors }} = useForm();

  const onSubmit = (data) => console.log(data.firstName , data.lastName , data.email);
  
  return (
    <div className="p-5 bg-slate-50  min-h-fit">
      <div className="w-[500px] min-h-fit mx-auto bg-slate-200 rounded p-5">
        <h2 className="text-3xl font-semibold font-serif text-pink-500 text-center uppercase">
          hook form
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <input
            {...register("firstName",{required:"Please enter first name" })}
            placeholder="first name"
            className="input-field"
          />
          {
            errors?.firstName && <p className="text-red-500 text-base">{errors.firstName.message}</p>
          }
          <input
            {...register("lastName" ,{required:"Please enter last name"})}
            placeholder="last name"
            className="input-field"
          />
          {
            errors?.lastName && <p className="text-red-500 text-base">{errors.lastName.message}</p>
          }
          <input
            {...register("email" ,{required:"please enter a valid email"})}
            placeholder="email"
            className="input-field"
          />
          {
            errors?.email && <p className="text-red-500 text-base">{errors.email.message}</p>
           }

          <input
            {...register("age" ,{required:"please enter your age"})}
            placeholder="age"
            className="input-field"
          />
          {
            errors?.age && <p className="text-red-500 text-base">{errors.age.message}</p>
           }

          <input
            {...register("password" ,{required:"please enter a password"})}
            placeholder="password"
            className="input-field"
          />
          {
            errors?.password && <p className="text-red-500 text-base">{errors.password.message}</p>
           }

          <input
            {...register("confirmPassword" ,{required:"please enter a confirm password"})}
            placeholder="confirm password"
            className="input-field"
          />
          {
            errors?.confirmPassword && <p className="text-red-500 text-base">{errors.confirmPassword.message}</p>
           }
          <input type="submit" className="btn" />
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default HookForm;
