import React from "react";
import {
  Link,
  Form,
  useLoaderData,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { loginUser, requireAuth } from "../../api";

export const loader = ({ request }) => {
  const isLoggedin = localStorage.getItem("loggedin");
  // find a way to fix it so we can sign up even if are logged in
  // and log in new account even if we are logged in with current acc
  if (isLoggedin) {
    return redirect("/host");
  }
  return {
    message: new URL(request.url).searchParams.get("message"),
    redirectTo: new URL(request.url).searchParams.get("redirectTo") || "/host",
  };
};

export const action = async ({ request }) => {
  const redirectTo =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", "true");
    return redirect(redirectTo);
  } catch (err) {
    return err.message;
  }
};

const Login = () => {
  const { message, redirectTo } = useLoaderData();
  const errorMessage = useActionData();
  const state = useNavigation().state;
  console.log(redirectTo);

  return (
    <div className="bg-white w-full sm:w-1/2 md:w-2/5 flex flex-col justify-between items-center">
      <div className="w-full bg-orange-50 py-4 rounded-bl-[30%] shadow-[rgba(0,0,15,0.3)_3px_1px_4px_0px] flex flex-col justify-center items-center">
        <div className="w-2/3 flex flex-col py-10 justify-center items-center">
          <h1 className="text-2xl font-black text-center mb-8">#VANLIFE</h1>

          {/* Here the form starts */}
          <Form method="post" replace className="w-full">
            {message && (
              <p className="text-red-600 mb-4 text-sm font-bold text-center">
                {message}!
              </p>
            )}
            {errorMessage && (
              <p className="text-red-600 mb-4 text-sm font-bold text-center">
                {errorMessage}!
              </p>
            )}
            <div className="mb-4 text-xs text-black w-full h-16">
              <div className="mb-6 h-4 relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute" />
                <input
                  placeholder="Email"
                  className="px-4 w-full bg-inherit border-b border-b-black
                      outline-0 focus:border-b-2"
                  type="email"
                  name="email"
                />
              </div>
              <div className="h-4 relative">
                <FontAwesomeIcon icon={faLock} className="absolute" />
                <input
                  placeholder="Password"
                  className="px-4 w-full bg-inherit  border-b border-b-black
                      outline-0 focus:border-b-2 "
                  type="password"
                  name="password"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <a className="hover:cursor-pointer text-xs text-orange-400">
                  Forget Password?
                </a>
                <button
                  disabled={state === "submitting"}
                  className="text-xs text-orange-50 bg-orange-400 rounded-xl px-4 py-1 hover:bg-orange-500 transition"
                >
                  {state === "submitting" ? "LOGINING IN..." : "LOGIN"}
                </button>
              </div>
            </div>
          </Form>
          {/* Here it ends */}
          {/* <p className="text-xs text-center">
            Don't have an account?{" "}
            <Link
              to={`/register/signup?redirectTo=${redirectTo}`}
              className="text-orange-400 font-semibold"
            >
              Sign Up
            </Link>
          </p> */}
        </div>
      </div>
      <div className="text-xs flex justify-between gap-6 mb-4 ">
        <p className="text-orange-400">
          Or <span className="font-semibold">Login With</span>
        </p>
        <div className="flex gap-4">
          <a href="https://www.google.com/" target="_blank">
            <FontAwesomeIcon icon={faGoogle} className="mr-1" />
            <span className="text-orange-400">Google</span>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="mr-1" />
            <span className="text-orange-400">Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
