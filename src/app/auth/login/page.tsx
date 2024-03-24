"use client";
export default function login() {
  return (
    <div className="flex flex-col gap-12 w-[90%] max-w-[400px] text-[1rem] md:text-[1rem]">
      <div className="flex flex-col gap-2">
        <h1 className="w-full text-left text-[1rem] md:text-[2rem] font-bold">
          Login to Exclusive
        </h1>
        <p>Enter your details below</p>
      </div>
      <form className="flex flex-col gap-8">
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
        <div className="flex flex-row gap-4">
          <button className="bg-red-500 w-full p-2 text-white rounded-sm">
            Login
          </button>
          <button className="rounded-sm w-full text-red-500">
            Forget Password?
          </button>
        </div>
      </form>
    </div>
  );
}
