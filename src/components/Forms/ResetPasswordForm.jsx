import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

// ✅ Validation Schema
const ResetPasswordSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  newPassword: Yup.string().min(6, "Password too short").required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm your new password"),
});

function ResetPasswordForm() {
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-[90%] max-w-md p-6">
        <h2 className="text-xl font-bold text-center mb-4">Reset Password</h2>

        <Formik
          initialValues={{ username: "", newPassword: "", confirmPassword: "" }}
          validationSchema={ResetPasswordSchema}
          onSubmit={(values) => {
            resetPassword(values.username, values.newPassword);
            alert("Password has been reset successfully!");
            navigate("/signin");
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium">Username</label>
                <Field
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {touched.username && errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium">New Password</label>
                <Field
                  name="newPassword"
                  type="password"
                  placeholder="Enter new password"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {touched.newPassword && errors.newPassword && (
                  <p className="text-red-500 text-sm">{errors.newPassword}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-secondary"
              >
                Reset Password
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
