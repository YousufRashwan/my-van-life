import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  Link,
  Form,
  useLoaderData,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { requireAuth, signupUser } from "../../api";

export const action = async ({ request }) => {
  const redirectTo = new URL(request.url).searchParams.get("redirectTo");
  console.log("actioned");
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await signupUser({ email, password });
    localStorage.setItem("loggedin", "true");
    //change the redirect
    return redirect(redirectTo);
  } catch (err) {
    return err.message;
  }
};

const Singup = () => {
  // const message = useLoaderData();
  const errorMessage = useActionData();
  const state = useNavigation().state;
  return (
    <div className="bg-white w-full sm:w-1/2 md:w-2/5 flex flex-col justify-between items-center">
      <div className="w-full bg-orange-50 py-4 mb-4 rounded-bl-[30%] shadow-[rgba(0,0,15,0.3)_3px_1px_4px_0px] flex flex-col justify-center items-center">
        <div className="w-2/3 flex flex-col py-10 justify-center items-center">
          <h1 className="text-2xl font-black text-center mb-8">#VANLIFE</h1>
          <div className="w-full">
            <Form method="post" replace>
              {/* {message && (
                <p className="text-red-600 mb-4 text-sm font-bold text-center">
                  {message}!
                </p>
              )} */}
              {errorMessage && (
                <p className="text-red-600 mb-4 text-sm font-bold text-center">
                  {errorMessage}!
                </p>
              )}
              <div className="mb-6 text-xs text-black w-full h-24">
                <div className="h-4 mb-6 relative">
                  <FontAwesomeIcon icon={faUser} className="absolute" />
                  <input
                    placeholder="Name"
                    className="px-4 w-full bg-inherit border-b border-b-black
                      outline-0 focus:border-b-2"
                    type="name"
                    name="name"
                  />
                </div>
                <div className="h-4 mb-6 relative">
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
                    className="h-4 px-4 w-full bg-inherit  border-b border-b-black
                      outline-0 focus:border-b-2"
                    type="password"
                    name="password"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-between items-center">
                <button className="w-full text-xs text-orange-50 bg-orange-400 rounded-xl px-4 py-1 hover:bg-orange-500 transition">
                  Create account
                </button>
                <p className="text-xs">
                  Already have an account?{" "}
                  <Link
                    to=".."
                    path="relative"
                    className="text-orange-400 font-semibold"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </Form>
            {/* here it ends */}
          </div>
        </div>
      </div>
      <div className="text-xs flex justify-between gap-6 mb-4 ">
        <p className="text-orange-400">
          Or <span className="font-semibold">Sign Up With</span>
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

export default Singup;
