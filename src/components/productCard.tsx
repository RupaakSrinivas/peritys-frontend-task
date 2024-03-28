"use client";

import { useState } from "react";
import { ProductResp } from "@/types/products";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Card({ item }: { item: ProductResp }) {
  const router = useRouter();

  const [hover, setHover] = useState(false);

  const handleAddCartItem = () => {
    console.log("added to cart");
  };

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        console.log("clicked");
        router.push(`/productDetails?id=${item.id}`);
      }}
      className="w-[270px] h-[350px] rounded-md relative cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={270}
        height={250}
        className="rounded-t-md w-[270px] h-[250px] object-cover"
      />
      <div className="flex flex-col p-2 text-center justify-start">
        <h1>{item.title}</h1>
        <p>${item.price}</p>
      </div>
      <button
        onClick={handleAddCartItem}
        className={`w-full mt-max flex flex-col items-center bottom-0 justify-end ${
          hover ? "absolute" : "hidden"
        }`}
      >
        <p className="w-full h-9 text-white rounded-b-md bg-black">
          Add to Cart
        </p>
      </button>
    </div>
  );
}
