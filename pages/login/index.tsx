import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="grid place-content-center h-screen">
      <h1>Login</h1>
      <button
        className="bg-blue-100 text-blue-400 py-1 px-6 outline-none border-0  shadow-sm rounded-md font-bold"
        onClick={async () =>
          signIn(undefined, { redirect: false, callbackUrl: "/?toast" })
        }
      >
        Signin
      </button>
    </div>
  );
}
