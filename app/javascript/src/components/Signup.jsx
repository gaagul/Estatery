import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// import { ReactComponent as Logo } from "./assets/logo.svg";

const SignupPage = ({ setIsLogin }) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    fullName: "",
    // Add more fields as necessary
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    fullName: Yup.string().required("Full Name is required"),
    // Add validation for additional fields
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white px-6 py-8 shadow-md">
        <div className="text-center">
          {/* <Logo className="mx-auto mb-4 h-12 w-12" /> */}
          <h2 className="text-3xl font-bold text-gray-800">Sign Up</h2>
          <p className="mt-2 text-gray-600">Create a new account</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="mt-8">
            <div>
              <label
                className="block font-semibold text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <Field
                className="focus:outline-none mt-2 w-full rounded-lg border px-4 py-2 text-gray-700 focus:border-blue-500"
                id="name"
                name="name"
                placeholder="Enter your name"
                type="text"
              />
              <ErrorMessage
                className="mt-1 text-sm text-red-500"
                component="p"
                name="name"
              />
            </div>
            <div className="mt-4">
              <label
                className="block font-semibold text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <Field
                className="focus:outline-none mt-2 w-full rounded-lg border px-4 py-2 text-gray-700 focus:border-blue-500"
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <ErrorMessage
                className="mt-1 text-sm text-red-500"
                component="p"
                name="email"
              />
            </div>
            <div className="mt-4">
              <label
                className="block font-semibold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                className="focus:outline-none mt-2 w-full rounded-lg border px-4 py-2 text-gray-700 focus:border-blue-500"
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
              />
              <ErrorMessage
                className="mt-1 text-sm text-red-500"
                component="p"
                name="password"
              />
            </div>
            <div className="mt-4">
              <label
                className="block font-semibold text-gray-700"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <Field
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                type="text"
                className="px- 4 focus:outline-none
                mt-2 w-full rounded-lg border py-2 text-gray-700 focus:border-blue-500"
              />
              <ErrorMessage
                className="mt-1 text-sm text-red-500"
                component="p"
                name="fullName"
              />
            </div>
            {/* Add additional fields here */}

            <div className="mt-8">
              <button
                className="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="mt-4 text-center">
              <button
                className="text-blue-500 underline"
                onClick={() => setIsLogin(true)}
              >
                Back to Login
              </button>
            </div>
            <div className="mt-4 text-center">
              <button className="text-gray-600 underline" type="reset">
                Reset Form
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignupPage;
