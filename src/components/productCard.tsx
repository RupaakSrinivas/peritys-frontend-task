"use client";

import { useState } from "react";
import ProductResp from "@/types/products";
import Image from "next/image";

export default function Card({ item }: { item: ProductResp }) {
  const handleAddCartItem = () => {
    console.log("cart item added " + item.title);
  };

  const [hover, setHover] = useState(false);

  return (
    <a
      href={`/productDetails/${item.id}`}
      className="w-[270px] h-[350px] bg-gray-300 rounded-md"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={270}
        height={250}
        className="rounded-md w-[270px] h-[250px] object-cover"
      />
    </a>
  );
}
