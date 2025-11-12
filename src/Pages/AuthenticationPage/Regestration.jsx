import React, { use, useState } from 'react';
import { AuthContext } from '../../Auth/Authcontext';
import { Link,  useLocation,  useNavigate } from 'react-router';
import { toast } from 'react-toastify';
 // Make sure this path is correct

const Registration = () => {
  const [show, setShow] = useState(false);
 const { signUpUser, setUser } = use(AuthContext);
 const loaction =useLocation()
  const navigate = useNavigate()
 




  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const regExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error("Password must contain uppercase, lowercase, and minimum 6 characters");
      return;
    }

    signUpUser(email, password)
      .then(result => {
        const user = result.user;
        toast.success("SignUp Success!");
        setUser(user);
        navigate(loaction.state || "/");
        form.reset();
      })
     
  };

  return (
    <div className='flex justify-center items-center mt-20'>
      <div className="w-full max-w-md space-y-8 border-2 border-blue-700 rounded-md">
        <div className="bg-white shadow-md rounded-md p-6">
          <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for an account
          </h2>

          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <div className="mt-1">
                <input name="name" type="text" required
                placeholder='Type Your Name'
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input name="email" type="email" autoComplete="email" required
                       placeholder="TypeEmail@gmail.com"
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Photo URL</label>
              <div className="mt-1">
                <input name="photo" type="text" required
                placeholder='Type Your Img url'
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative">
                <input name="password" type={show ? "text" : "password"} placeholder="*********************" required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                <span onClick={() => setShow(!show)} className="absolute right-3 top-3 cursor-pointer">
                  {show ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <button type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                Register Account
              </button>
            
            </div>
          </form>

          <div className='text-end mt-3'>
            <h1>Already have an account? <Link to={'/loging'} className='text-blue-700'>Login</Link></h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Registration;
