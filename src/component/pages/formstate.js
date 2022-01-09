import React from "react";
// import { useForm } from "react-hook-form";
import "../../index.css";
import { Button } from "react-bootstrap";

import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import "react-phone-number-input/style.css";

export default function Formstate() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount, isValid, isSubmitted, isValidating,isSubmitSuccessful },
    control,
  } = useForm({
    shouldUseNativeValidation: true,
    mode: "onBlur",
    shouldFocusError: true,

  });

  const onSubmit = (data) => 
  {console.log(data);
  reset();
  }

  console.log(errors);
  console.log(`is dirty:${isDirty} is submitting:${isSubmitting} submit count:${submitCount} 
  touched fields:${touchedFields}  is valid:${isValid} is submitted:${isSubmitted} is validating:${isValidating} is submit successful:${isSubmitSuccessful}`);
 

 

  const [value, setValue] = React.useState()

 
  return (
    <div className="container  bg-slate-400">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            {...register(" firstName", { required: 'firstname is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name"
          />
          <p className="text-red-500">{errors.firstName?.message}</p>
        </div>
       
        <div>
        <label htmlFor="phone-input">Phone Number</label>
        <Controller
          name="phone-input"
          control={control}
          rules={{
            validate: (value) => isValidPhoneNumber(value)
              ? true
              : "Please enter a valid phone number",
              required: 'phone number is required'
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              value={value}
              onChange={onChange}
              defaultCountry="BD"
              id="phone-input"
            />
          )}
        />
        {<p className="text-red-500">{errors["phone-input"]?.message}</p>}
        {/* {errors["phone-input"] && (
          <p className="text-red-500">Invalid Phone</p>
        )} */}
      </div>


         {/* <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            {...register("lastName", { required:'lastname is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name"
          />
          <p className="text-red-500">{errors.lastName?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>

          <input
            {...register ("email", { required: 'email is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age
          </label>

          <input
            {...register("age", {
              validate: {
                positive: (v) => parseInt(v) > 0 || "should be greater than 0",
                greaterThanTen: (v) =>
                  parseInt(v) <= 18 ||
                  "should be greater than 18 or equal to 18",
                lessThanTen: (v) =>
                  parseInt(v) < 99 || "should be lower than 10",
                
              },
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Enter your age"
          />
          <p className="text-red-500">{errors.age?.message}</p>
        </div> */}
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            {...register("password", { required: 'password is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", { required: 'Confirm password is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
          />
{/* 
        <input type="text" name="newPassword" ref={register({
  validate: (value) => value === watch('password') || "Passwords don't match."
})} placeholder="Новый пароль" required/> */}

           <p className="text-red-500">{errors.confirmPassword?.message}</p>
        </div> 
        {/* <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label> */}
          {/* <input
            {...register("phone", {
              required: 'phone number is required',
              pattern: {
                value: /^[0-9]{11}$/,
                message: "should be 11 digits",
              },

              validate: { minLength: (value) => value.length >= 11 
                || "should be greater than 10 digits",
                maxLength: (value) => value.length <= 11
                || "should be less than 10 digits",

                isNumber: (value) => !isNaN(value)
              },
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="phone" type="tel" name="phone"
            placeholder="(123) 456-7890"
          /> */}
          
       
          {/* <p className="text-red-500">{errors.phone?.message}</p> */}
        {/* </div> */}
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("date", {
              valueAsDate: true,
              required: 'date is required',
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Date of Birth"
          />
          <p className="text-red-500">{errors.date?.message}</p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline grid justify-center align-items center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
