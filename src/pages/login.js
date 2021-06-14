import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/client";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/router";

function Login() {
  const [session] = useSession();
  const router = useRouter();

  var email;

  function getData(val) {
    email = val.target.value;
    console.log(email);
    printVal;
  }

  function printVal() {
    console.log("Email: ", email);

    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      console.log(email + " is valid :)");
      signIn("email", { email });
    } else {
      console.log(email + " is invalid :)");
    }
  }

  session && router.push("/");

  return (
    <div>
      {/* <div>
        <button onClick={() => signIn("google")}>Sign in with google</button>
      </div>

      <div>
        <button onClick={() => signIn("facebook")}>
          Sign in with facebook
        </button>
      </div>
      <div>
        <button onClick={() => signIn("email", { email })}>
          Sign in with email
        </button>
      </div> */}

      <section class="flex flex-col md:flex-row h-screen items-center">
        <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>

        <div
          class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div class="w-full h-100">
            <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            {/* <form class="mt-6" action="#" method="POST"> */}
            <div>
              <label class="block text-gray-700">Email Address</label>
              <input
                onChange={getData}
                onClick={getData}
                type="email"
                name="email"
                id=""
                placeholder="Enter Email Address"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>

            <button
              // type="submit"
              // onClick={() => signIn("email", { email })}
              onClick={printVal}
              class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Log In
            </button>

            <hr class="my-6 border-gray-300 w-full" />

            <button
              type="button"
              onClick={() => signIn("google")}
              class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div class="flex items-center justify-center">
                <FaGoogle size="30" className="text-red-600" />
                <span class="ml-4">Log in with Google</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => signIn("facebook")}
              className="mt-3 w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div class="flex items-center justify-center ">
                <FaFacebook size="30" className="text-blue-600" />

                <span class="ml-4">Log in with Facebook</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
