import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    // emailId: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
   const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/change-password",
        formData
      );
      setMessage(response.data.message);
      // Clear form fields after successful password change
      setFormData({
        // emailId: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
       alert("Password changed")
       handleLogout();
    } catch (error) {
      setError(error.response.data.error);
    }
  };


  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/logout"
      );
      if (response.status === 200) {
        navigate("/");
      } else {
        console.error("Logout failed:");

      }
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="container w-screen h-screen flex justify-center items-center">
      <div className="w-screen max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Change Password</h1>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-6">
            <label
              htmlFor="emailId"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="emailId"
              className="w-full px-3 py-2 rounded-lg border border-gray-300"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="mb-6">
            <label
              htmlFor="oldPassword"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              className="w-full px-3 py-2 rounded-lg border border-gray-300"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="newPassword"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full px-3 py-2 rounded-lg border border-gray-300"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 rounded-lg border border-gray-300"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {message && <p className="text-green-500">{message}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
