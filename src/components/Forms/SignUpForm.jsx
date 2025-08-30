import React, { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import BGImage from "../../assets/E-commerceAssets/HeroSectionAssets/Banner.png";
import { Formik, Form, Field } from "formik";
import logo from "../../assets/HeaderIcons/Group 1.svg";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  role: Yup.string().oneOf(["user", "admin"]).required("Choose role"),
  shopname: Yup.string().when("role", {
    is: "admin",
    then: (schema) => schema.required("Shop name is required"),
  }),
  businessAddress: Yup.string().when("role", {
    is: "admin",
    then: (schema) => schema.required("Business address is required"),
  }),
  agree: Yup.boolean().oneOf([true], "You must accept the terms"),
});

function SignUpForm() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative min-h-screen w-full text-primary bg-cover bg-center"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="rounded-2xl w-[40vw] md:w-[35vw] lg:w-[34vw] bg-white py-6 px-6 shadow-lg">
          <span
            onClick={() => navigate(-1)}
            className="text-primary hover:text-secondary flex items-center gap-1 hover:underline cursor-pointer"
          >
            <IoIosArrowBack />
            <p>Back</p>
          </span>

          <div className="flex justify-center my-2">
            <NavLink to="/">
              <img
                className="h-[2.4rem] sm:h-[3.9rem] md:h-[5rem]"
                src={logo}
                alt="logo"
              />
            </NavLink>
          </div>

          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              confirmPassword: "",
              role: "user",
              shopname: "",
              businessAddress: "",
              agree: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              const newUser = {
                id: Date.now(), 
                firstName: values.firstname,
                lastName: values.lastname,
                email: values.email,
                password: values.password,
                role: values.role,
                shopname: values.shopname,
                businessAddress: values.businessAddress,
              };
            
              localStorage.setItem("user", JSON.stringify(newUser));
              setUser(newUser);
              alert("Signup success!");
              navigate("/signin");
            }}
          >
            {({ handleChange, values, errors, touched, setFieldValue }) => (
              <Form>
                <div className="p-3">
                  <h3 className="font-semibold pb-4 text-xl">Sign Up</h3>

                  <div className="mt-3">
                    <label className="block text-sm font-medium">
                      Account Type
                    </label>
                    <div className="flex gap-4 mt-1">
                      <label>
                        <input
                          type="radio"
                          name="role"
                          value="user"
                          checked={values.role === "user"}
                          onChange={handleChange}
                        />{" "}
                        user
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="role"
                          value="admin"
                          checked={values.role === "admin"}
                          onChange={handleChange}
                        />{" "}
                        admin
                      </label>
                    </div>
                    {errors.role && touched.role && (
                      <div className="text-red-500 text-sm">{errors.role}</div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-3">
                    <div>
                      <label className="block text-sm font-medium">
                        First Name
                      </label>
                      <Field
                        type="text"
                        name="firstname"
                        placeholder="Enter first name"
                        className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
                      />
                      {touched.firstname && errors.firstname && (
                        <div className="text-red-500 text-sm">
                          {errors.firstname}
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        name="lastname"
                        placeholder="Enter last name"
                        className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
                      />
                      {touched.lastname && errors.lastname && (
                        <div className="text-red-500 text-sm">
                          {errors.lastname}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="block text-sm font-medium">Email</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
                    />
                    {touched.email && errors.email && (
                      <div className="text-red-500 text-sm">{errors.email}</div>
                    )}
                  </div>

                  <div className="flex gap-4 mt-3">
                    <div className="w-1/2">
                      <label className="block text-sm font-medium">
                        Password
                      </label>
                      <div className="relative">
                        <Field
                          type={!showPassword ? "password" : "text"}
                          name="password"
                          placeholder="Enter password"
                          className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
                        />
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-3 cursor-pointer"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      {touched.password && errors.password && (
                        <div className="text-red-500 text-sm">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="w-1/2">
                      <label className="block text-sm font-medium">
                        Confirm Password
                      </label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
                      />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <div className="text-red-500 text-sm">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                  </div>

                  {values.role === "admin" && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium">
                        Shop Name
                      </label>
                      <Field
                        type="text"
                        name="shopname"
                        placeholder="Enter shop name"
                        className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
                      />
                      {touched.shopname && errors.shopname && (
                        <div className="text-red-500 text-sm">
                          {errors.shopname}
                        </div>
                      )}

                      <label className="block text-sm font-medium mt-3">
                        Business Address
                      </label>
                      <Field
                        type="text"
                        name="businessAddress"
                        placeholder="Enter business address"
                        className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
                      />
                      {touched.businessAddress && errors.businessAddress && (
                        <div className="text-red-500 text-sm">
                          {errors.businessAddress}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-start mt-4">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={values.agree}
                      onChange={(e) => setFieldValue("agree", e.target.checked)}
                      className="mr-2 mt-1 cursor-pointer"
                    />
                    <label className="text-sm text-primary/60">
                      By creating an account you agree to our{" "}
                      <span className="text-primary underline">Terms</span> and{" "}
                      <span className="text-primary underline">
                        Privacy Policy
                      </span>
                      .
                    </label>
                  </div>
                  {touched.agree && errors.agree && (
                    <div className="text-red-500 text-sm">{errors.agree}</div>
                  )}

                  <button
                    type="submit"
                    className="mt-4 w-full px-4 py-3 text-sm font-medium rounded-lg bg-primary text-white hover:bg-secondary"
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="mt-5">
            <p className="text-sm text-center text-primary/60">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary hover:text-secondary">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
