"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { IRegisterData } from "./register.types";
import { registerUser } from "@/lib/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { Status } from "@/lib/types/type";

function Register() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((store) => store.auth);

  const [data, setData] = useState<IRegisterData>({
    username: "",
    email: "",
    password: "",
    token: "",
  });

  // Input change handler
  const handleRegisterDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission
  const handleRegisterSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Debug log before dispatch
    console.log("Submitting data:", data);

    dispatch(registerUser(data));
  };

  return (
    <>
      <h1>This is register page, will be great soon..</h1>
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <img
              className="mx-auto h-12 w-auto"
              src="https://www.svgrepo.com/show/499664/user-happy.svg"
              alt="User Icon"
            />
            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up for an account
            </h2>

            {/* Status messages */}
            {status === Status.LOADING && (
              <p className="text-sm text-blue-500 text-center">
                Registering...
              </p>
            )}
            {status === Status.SUCCESS && (
              <p className="text-sm text-green-600 text-center">
                Registered successfully!
              </p>
            )}
            {status === Status.ERROR && (
              <p className="text-sm text-red-500 text-center">
                Registration failed. Please try again.
              </p>
            )}

            <form
              onSubmit={handleRegisterSubmission}
              className="space-y-6"
              method="POST"
            >
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    value={data.username}
                    onChange={handleRegisterDataChange}
                    type="text"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleRegisterDataChange}
                    type="email"
                    autoComplete="email"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleRegisterDataChange}
                    type="password"
                    autoComplete="new-password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Register Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
