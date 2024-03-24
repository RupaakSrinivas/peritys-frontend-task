"use client";
import Image from "next/image";

export default function login() {
  return (
    <div className="flex flex-col gap-12 w-[90%] max-w-[400px] text-[1rem] md:text-[1rem]">
      <div className="flex flex-col gap-2">
        <h1 className="w-full text-left text-[1rem] md:text-[2rem] font-bold">
          Create an account
        </h1>
        <p>Enter your details below</p>
      </div>
      <form className="flex flex-col gap-8">
        <input
          className="border-b border-black p-2 outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="border-b border-black p-2 outline-none"
          type="text"
          placeholder="Email or PhoneNumber"
        />
        <input
          className="border-b border-black p-2 outline-none"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-500 w-full p-4 text-white rounded-sm">
          Create an Account
        </button>
        <button className="border border-black border-opacity-40 rounded-sm gap-4 p-4 w-full flex flex-row justify-center items-center">
          <Image src="/google.png" alt="google" width={20} height={20} />
          Sign up with google
        </button>
      </form>
      <p className="w-full text-center">
        Already have an account?{" "}
        <a href="/auth/login" className="py-2 border-b-2">
          Log In
        </a>
      </p>
    </div>
  );
}
