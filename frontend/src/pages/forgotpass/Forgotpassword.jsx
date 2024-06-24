
// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom";

function ForgotPassword() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 bg-white rounded-lg shadow-md text-left sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h3 className="text-2xl font-bold text-gray-800 leading-tight">Forgot Password</h3>
        <p className="mt-2 text-sm text-gray-600">
          Enter your email address & we'll send you a link to reset your password.
        </p>
        <form className="mt-6">

          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 "

            required
          />
          <button
            type="submit"
            className="w-full py-2 mt-5 text-center bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
          >
            Send
          </button>
        </form>
        {/* <Link to="/login" className="text-sm text-gray-600 hover:underline mt-6">
          Back to Login
        </Link> */}
        <Link to="/">
        <div className="mt-5">
          <button>Back to Login</button>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;