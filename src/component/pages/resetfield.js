import { React, useContext, useState, useEffect } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
export default function ResetField() {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { isDirty, isValid, errors, touchedFields, dirtyFields }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: ""
    }
  });
const onSubmit = data => {
  console.log(data);
};
  return (
    <div className=" bg-slate-400"><form onSubmit={handleSubmit(onSubmit)} >
    <input {...register("firstName", { required: true })} placeholder="First Name"/>

    <p>isDirty: {isDirty && "dirty"}</p>
    <p>touchedFields: {touchedFields.firstName && "touched field"}</p>
    <p>dirtyFields:{dirtyFields.firstName && "dirty field"}</p>
    <p>isValid: {isValid && "valid"}</p>
    <p>error: {errors.firstName && "error"}</p>
    
    <hr />

    <div className="flex flex-wrap-row space-x-8 ">
    <button
     className=" hover:text-xl hover:text-red-400"
      type="button"
      onClick={() => resetField("firstName", { keepError: true })}
    >
      Reset keep error
    </button>
    <button
     className=" hover:text-xl hover:text-red-400"
      type="button"
      onClick={() => resetField("firstName", { keepTouched: true })}
    >
      Reset keep touched fields
    </button>
    <button
     className=" hover:text-xl hover:text-red-400"
      type="button"
      onClick={() => resetField("firstName", { keepDirty: true })}
    >
      Reset keep dirty fields
    </button>
    <button
     className=" hover:text-xl hover:text-red-400"
      type="button"
      onClick={() => resetField("firstName", { defaultValue: "New" })}
    >
      update defaultValue
    </button>
    </div>
  </form></div>
  );
}
