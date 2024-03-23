"use client";

export default function Footer() {
  return (
    <footer className="text-[0.5rem] md:text-[1rem] bg-black text-white flex flex-col items-center justify-around">
      <div>
        <h1 className="text-center">
            footer components here
        </h1>
      </div>
      <div className="opacity-[50%] items-center flex flex-row justify-center border-t-2 w-full h-[48px]">
        &#169; Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
}
