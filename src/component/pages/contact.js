import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import content from "../../static/index";

import "../../index.css";
import { Form, Button } from "react-bootstrap";
const schema = yup
  .object({
    name: yup.string().required().min(5),
    // email: yup.string().email().required(),
    // phone: yup.number().required(),
    age: yup.number().required(),
    gender:yup.string(),
    password: yup.string().required("password is required").min(5),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password does not match"),

    // age: yup.number("Age must be number").positive("Age must be Positive Number").integer("Age must be Integer Number").required("this field is required"),
  })
  .required();

export default function Contact() {
  const [value, setValue] = React.useState({});
  const {
    register,
    handleSubmit,
    watch,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
 

  
  const onSubmit = (data) => {
    setValue(data);
    reset();
    clearErrors();
  };


  console.log(value);
  console.log(errors);
  return (
    <div className="container">
      <Form onSubmit={handleSubmit(onSubmit)} className="text-xl my-3 mb-3">
        <Form.Group controlId="formBasicEmail">
          <Form.Label >Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            className=" mb-3"
            {...register("name")}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label >Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter you age"
            className=" mb-3"
            {...register("age", { required: true , min:18, max:100, })}
          />
          {errors.age && <p className="text-red-600">{errors.age.message}</p>}
        </Form.Group>

       <Form.Group controlId="selectgender">
       <select {...register("gender")}>
       <option value="female">Select Gender</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      {errors.gender && <p className="text-red-600">{errors.gender.message}</p>}
       </Form.Group >

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className=" mb-3"
            {...register("password")}
          />
          {errors.password && <p className="text-red-600">{errors.password.message}</p>}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className=" mb-3"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className=" my-4 grid justify-center text-align-center"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
