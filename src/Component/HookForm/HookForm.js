import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import DynamicTitle from "../DynamicTitle/DynamicTitle";
import Loading from "../Loading/Loading";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    const img = data.photo[0]
    const formData = new FormData()
    formData.append('image', img)
    const imgBBAPIKey = 'a35dd26dcd6217863e04026e8ac764ee'
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgBBAPIKey}`
    
    fetch(url , {method:'POST',body:formData})
    .then(response => response.json())
    .then(result => {
      if(result?.data.url){
        const user = {name:data.firstName ,email:data.email ,photo:result?.data.url }
        fetch('http://localhost:5000/user',{
          method:'POST',
          body:JSON.stringify(user) , 
          headers:{ 
          'Content-type': 'application/json; charset=UTF-8'
         }})
        .then(res => res.json())
        .then(result => {
           if(!result?.insertedId){
            return <Loading></Loading>
           }
           else if(result?.insertedId){
            toast.success('Successfully add a user')
           }
        })
      }
    })
  };

  return (
    <div className="p-5 bg-slate-100  min-h-screen h-fit flex items-center">
      <DynamicTitle title='Hook Form' />
      <div className="w-[70%] min-h-fit mx-auto bg-slate-200 rounded p-5">
        <h2 className="text-3xl font-semibold font-serif text-pink-500 text-center uppercase">
          hook form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-5 py-5">
          {/* ------- first name and last name field */}
          <div className="flex w-full ">
                 {/* --------------- first name --------------- */}
                <div className="w-2/4  text-center">
                  <input
                    {...register("firstName", { required: "Please enter first name" })}
                    placeholder="first name"
                    className="input-field"
                  />
                  {errors?.firstName && (
                    <p className="text-red-500 text-base">{errors.firstName.message}</p>
                  )}
                </div>
             
                {/* ------------ last name -------------- */}
                <div className="w-2/4 text-center">
                  <input
                    {...register("lastName", { required: "Please enter last name" })}
                    placeholder="last name"
                    className="input-field"
                  />
                  {errors?.lastName && (
                    <p className="text-red-500 text-base">{errors.lastName.message}</p>
                  )}
                </div>              
          </div>
          {/* --------- email and age field ----------- */}
          <div className="flex w-full">
              {/* -------------- email ------------ */}
              <div className="w-2/4 text-center">
                <input
                  {...register("email", { required: "please enter a email" ,pattern:{
                      value:/\S+@\S+\.\S+/,
                      message: "Please enter a valid email address"
                  }})}
                  type='text'
                  placeholder="email"
                  className="input-field"
                />
                {errors?.email && (
                  <p className="text-red-500 text-base">{errors.email.message}</p>
                )}
              </div>          
            {/* ----------- age ------------- */}
              <div className="w-2/4 text-center">
              <input
                  {...register("age", {
                    required: "please enter your age",
                    min: { value: 18, message: "Please enter your age minmum 18" },
                    max: { value: 24, message: "Please enter your age maximum 24" },
                  })}
                  type='number'
                  placeholder="age"
                  className="input-field"
                />
                {errors?.age && (
                  <p className="text-red-500 text-base">{errors.age.message}</p>
                )}
              </div>
          </div>
          {/* --------- password and confirm password field ----------- */}
          <div className="flex w-full">
               {/*-------------- password ----------------- */}
              <div className="w-2/4 text-center">
                <input
                  {...register("password", {
                    required: "please enter a password",
                    pattern: {
                      value: /(?=.*?[#?!@$%^&*-])/,
                      message: "At least one special character",
                    },
                    maxLength:{
                      value:8,
                      message: "maximum length is 8 characters",
                    }
                  })}
                  placeholder="password"
                  className="input-field"
                />
                {errors?.password && (
                  <p className="text-red-500 text-base">{errors.password.message}</p>
                )}
              </div>
           
              {/*------------- confirm password ------------*/}
              <div className="w-2/4 text-center">
                <input
                  {...register("confirmPassword", {
                    required: "please enter a confirm password",
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return password === value || "Passwords should match!";
                      }
                    }})}
                  placeholder="confirm password"
                  className="input-field"
                />
                {errors?.confirmPassword && (
                  <p className="text-red-500 text-base">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
             
          </div>
          {/* --------- img upload field ----------- */}
          <div className="flex w-full">
               {/*-------------- img  ----------------- */}
              <div className="w-full text-center">
                <input
                  {...register("photo", {required: "please enter a photo"})}
                  type='file'
                  placeholder="photo"
                  className="input-field w-full "
                />
                {errors?.photo && (
                  <p className="text-red-500 text-base">{errors.photo.message}</p>
                )}
              </div>
             
          </div>
          <input type="submit" className="uppercase w-[120px] bg-pink-600 px-5 py-2 text-white rounded"/>
        </form>
      </div>
    </div>
  );
};

export default HookForm;
