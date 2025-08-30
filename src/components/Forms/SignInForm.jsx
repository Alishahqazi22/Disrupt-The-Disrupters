import React, { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import BGImage from "../../assets/E-commerceAssets/HeroSectionAssets/Banner.png";
import { Formik, Form } from "formik";
import logo from "../../assets/HeaderIcons/Group 1.svg";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UserProfile from "../UserProfile/UserProfile";
// import axiosInstance from "../../Config/axiosInstance";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  password: Yup.string().required("Password is required"),
  agree: Yup.boolean().oneOf([true], "You must accept the terms"),
});

function SignInForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { user, login } = useContext(AuthContext);
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <>
      {user ? (
        <>
        <UserProfile />
        </>
      ) : (
        <div className="relative h-screen w-full text-primary">
          <img className="h-full w-full" src={BGImage} alt="" />
          <div className="absolute top-28 left-1/2 -translate-y-[70%] lg:-translate-y-[30%] -translate-x-[50%] rounded-2xl my-20 w-[40vw] md:w-[35vw] lg:w-[25vw] bg-white py-2 md:py-4 px-4 md:px-5 lg:px-6">
            <span
              onClick={handleNavigate}
              className="text-primary flex items-center gap-1 hover:underline"
            >
              <IoIosArrowBack />
              <p>Back</p>
            </span>
            <div className="flex justify-center">
              <NavLink to="/">
                <img
                  className="h-[2.4rem] sm:h-[3.9rem] md:h-[5rem]"
                  src={logo}
                  alt="logo"
                />
              </NavLink>
            </div>
            <div>
              <Formik
                initialValues={{ username: "", password: "", agree: false }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                  try {
                    const res = await login({
                      username: values.username, 
                      password: values.password,
                    });
                    console.log("Login success:", res);
                    alert("Login success:", res);
                    // navigate("/");
                  } catch (err) {
                    console.log("Login failed:", err);
                    alert("Login failed:", err);
                  }
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  setFieldValue,
                }) => (
                  <Form>
                    <div className="p-3">
                      <div className="w-full">
                        <h3 className="font font-semibold pb-4 text-xl ">
                          Sign In
                        </h3>
                        <div>
                          <div className="flex justify-between">
                            <label className="mb-1.5 block text-sm font-medium">
                              User Name
                            </label>
                            {errors.username && touched.username && (
                              <div className="text-red-500 text-sm mt-1">
                                {errors.username}
                              </div>
                            )}
                          </div>
                          <input
                            type="text"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter your username"
                            className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-secondary focus:outline-secondary focus:ring-3 focus:ring-secondary"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between mt-3 mb-1.5">
                            <label className="block text-sm font-medium">
                              Password
                            </label>
                            {errors.password && touched.password && (
                              <div className="text-red-500 text-sm">
                                {errors.password}
                              </div>
                            )}
                          </div>
                          <div className="relative">
                            <input
                              type={!showPassword ? "password" : "text"}
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Enter your password"
                              className="h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-4 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-secondary focus:outline-secondary focus:ring-3 focus:ring-secondary"
                            />
                            <span
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute z-30 text-primary -translate-y-1/2 cursor-pointer right-4 top-1/2"
                            >
                              {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-start mb-1 mt-3">
                            <input
                              type="checkbox"
                              name="agree"
                              checked={values.agree}
                              onChange={(e) =>
                                setFieldValue("agree", e.target.checked)
                              }
                              className="mr-2 mt-1"
                            />
                            <label className="text-sm text-primary/60">
                              By creating an account you agree to our
                              <span className="text-brand-500 underline cursor-pointer">
                                Terms
                              </span>{" "}
                              and{" "}
                              <span className="text-brand-500 underline cursor-pointer">
                                Privacy Policy
                              </span>
                              .
                            </label>
                          </div>
                          {errors.agree && touched.agree && (
                            <div className="text-red-500 text-sm mt-1">
                              {errors.agree}
                            </div>
                          )}
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium transition rounded-lg bg-primary text-white shadow-theme-xs hover:bg-secondary"
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className="mt-5">
                <p className="text-sm font-normal text-center text-primary/60 sm:text-start">
                  Don't have an account?
                  <Link
                    to="/signup"
                    className="text-primary hover:text-secondary"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignInForm;
