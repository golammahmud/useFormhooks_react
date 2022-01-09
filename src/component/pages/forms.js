import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import content from "../../static/index";

import "../../index.css";

// const schema = yup
//   .object({
//     firstName: yup.string().required(),
//     age: yup.number("Age must be number").positive("Age must be Positive Number").integer("Age must be Integer Number").required("this field is required"),
//   })
//   .required();

export default function Forms() {
  const [value, setValue] = React.useState({});
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = (data) => {
    setValue(data);
    reset();
  };
  console.log(value);
  console.log(errors);

  return (
    <div className="container bg-slate-500">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>first name</label>
          <input
            {...register("firstName", {
              required: "This field is required",
              minLength: {
                value: 5,
                message: "First name must greater than 5 characters",
              },
              maxLength: 20,
            })}
          />
          <p className="text-red-500">{errors.firstName?.message}</p>
          <label>last name</label>
          <input
            {...register("lastName", {
              required: "This field is required",
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          <p className="text-red-500">{errors.lastName?.message}</p>

          <label>age</label>
          <input
            type="number"
            {...register("age", {
              required: "age field can not be empty",
              min: { value: 18, message: "age field can not be less than 18" },
              max: {
                value: 99,
                message: "age field can not be greater than 99",
              },
            })}
          />
          <p className="text-red-500">{errors.age?.message}</p>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div>  {value?(
         <div className="container">
         <h1>Forms vlaue</h1>
         <p>
           Frist Name:
           <span className="text-red-500 text-xl-center font-bold space-x-4">
             {value.firstName}
           </span>
         </p>
         <p>
           Last Name:
           <span className="text-red-500 text-xl-center font-bold space-x-4">
             {value.lastName}
           </span>
         </p>
         <p>
           Age:
           <span className="text-red-500 text-xl-center font-bold space-x-4">
             {value.age}
           </span>
         </p>
       </div>
      ):("")}</div>
    </div>
    
  );
}

//         <input {...register("firstName")} />
//         <p>{errors.firstName?.message}</p>

//         <input {...register("age")} />
//         <p>{errors.age?.message}</p>

//         <input type="submit" />
//       </form>
//     </div>
//   );
// }
