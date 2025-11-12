import React, { use, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { AuthContext } from '../../Auth/Authcontext';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {
  const [show, setShow] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate()
  const location = useLocation();

  const { signInUser, setUser, googleSignIn } = use(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful!");
        form.reset();
        const redirectPath = location.state?.from || "/";
        navigate(redirectPath, { replace: true });
      })
      .catch((error) => {
        setPasswordError(error.message);
        toast.error("Invalid email or password");
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
        toast.success("Google Sign-in successful!");
        const redirectPath = location.state?.from || "/";
        navigate(redirectPath, { replace: true });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-full max-w-md space-y-8 border-2 border-blue-700 rounded-md bg-white shadow-md p-6">
        <img
          className="mx-auto h-12 w-auto"
          src="https://www.svgrepo.com/show/499664/user-happy.svg"
          alt="User Icon"
        />
        <h2 className="my-3 text-center text-3xl font-bold text-gray-900">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Type your email"
              required
              className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:outline-none sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="••••••••••••"
                required
                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:outline-none sm:text-sm"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 cursor-pointer text-sm text-blue-500"
              >
                {show ? "Hide" : "Show"}
              </span>
              {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full justify-center rounded-md bg-sky-500 py-2 text-white font-medium hover:bg-sky-600"
            >
              Login
            </button>

            <button
              type="button"
              onClick={handleGoogleSignin}
              className="w-full justify-center rounded-md bg-green-500 py-2 text-white font-medium hover:bg-green-600 flex items-center gap-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 48 48"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303..." />
              </svg>
              Sign in with Google
            </button>
          </div>
        </form>

        <div className="text-end mt-3">
          <p>
            Don’t have an account?{" "}
            <Link to="/regestation" className="text-blue-700">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
