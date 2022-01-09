import React, { useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import "../../index.css";
import {
  Routes,
  Route,
  Outlet,
  Link,
  NavLink,  
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

import ResetField from './resetfield';

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname is required"),
  username: Yup.string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
});

function Reset() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors,isSubmitted,isSubmitSuccessful,isSubmittedData },
  } = useForm({
    defaultValues: {fullname: "",
    username: "admin",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };
React.useEffect(() => {
  if(isSubmitSuccessful){
    reset(
      {
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
      }
    );
  }
}, [isSubmittedData,reset]);
  


  const resetform = () => {
    reset({
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    {
      keepErrors: true, 
      keepDirty: true,
      keepIsSubmitted: false,
      keepTouched: false,
      keepIsValid: true,
      keepSubmitCount: false,
    });
  };


  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
 
  console.log(params);
  console.log(location.pathname);

  console.log(navigate);

  return (
    <div className="register-form container">
      {/* navbar  */}

      {/* <Routes>
          <Route path="resetfield" element={<ResetField/>} />       
      </Routes> */}
      <div className="row">
        <div className="col-md-12">
          <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">
              <NavLink to="/">
                <img
                  src="https://www.freelogodesign.org/file/app/client/thumb/b8f8f8e5-d8f1-4b7f-b9c6-d9f8f9c8d8f9_200x200.png?1589788642697"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="navbar-nav mr-auto flex flex-wrap space-x-8 flex-row">
              {/* <NavLink to="/login" className={({ isActive }) => isActive ? "text-red-500" : "text-blue-500" } >
                Login
              </NavLink> */}
              <NavLink to="resetfield" className={({ isActive }) => isActive ? "text-red-500 bg-lime-500" : "text-blue-500" } >
              Resetfield
              </NavLink>
              <NavLink to="/reset" className={({ isActive }) => isActive ? "text-red-900" : "text-blue-500" } >
                Reset
              </NavLink>
            </div>
          </div>
        </div>
      </div>

     

{location.pathname=="/reset/resetfield"? <Outlet/>:<><form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="fullname"
            type="text"
            {...register("fullname")}
            className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            type="text"
            {...register("username")}
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="text"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />

          {/* <input type="text" name="newPassword" ref={register({
  validate: (value) => value === watch('password') || "Passwords don't match."
})} placeholder="Новый пароль" required/> */}
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="form-group form-check">
          <input
            name="acceptTerms"
            type="checkbox"
            {...register("acceptTerms")}
            className={`form-check-input ${
              errors.acceptTerms ? "is-invalid" : ""
            }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            onClick={resetform}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form></>}

      
    </div>
  );
}

export default Reset;
