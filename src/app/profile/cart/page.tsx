"use client";
import pageNavigation from "@/components/pageNavigation";

const links = [
  { name: "Home", url: "/" },
  { name: "Cart", url: "/profile/cart" },
];

export default function Cart() {
  return (
    <div className="flex flex-col mb-6 p-4">
      {pageNavigation(links)}
      <h1 className="text-2xl font-bold">Cart Page</h1>
    </div>
  );
}
