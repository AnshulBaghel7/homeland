import React from "react";
import loginImage from "../assests/img/loginpage.jpg";
import { useNavigate } from "react-router-dom";
// import { ArrowRight } from 'lucide-react'

export function Login() {
  const navigate = useNavigate()
  return (
    <section>
      <div className="flex items-center justify-center h-[100vh] bg-[#f5f5f5]">
        <div className="flex items-center justify-center bg-white">
          <div className="w-[45%] h-[88vh]">
            <img
              className="mx-auto h-full w-full rounded-md object-cover"
              src={loginImage}
              alt="Login Image"
            />
          </div>
          <div className="flex flex-col gap-3 w-[55%] px-4">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </a>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 mt-8 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    onClick={()=>navigate('/')}
                  >
                    Get started
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
