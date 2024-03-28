"use client";

import pageNavigation from "@/components/pageNavigation";
import { useEffect, useState } from "react";
import { ProductResp } from "@/types/products";
import axios from "axios";
import Image from "next/image";
import { useLoadingStore } from "@/store/loading";
import { start } from "repl";

export default function ProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
    const { startLoading, stopLoading } = useLoadingStore();

  const [data, setData] = useState<ProductResp>({} as ProductResp);
  const [links, setLinks] = useState<{ name: string; url: string }[]>([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        startLoading();
        const itemData = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        const data: ProductResp = itemData.data;
        setData(data);
        if (data.category && data.title)
          setLinks([
            ...links,
            { name: data.category, url: `/products?category=${data.category}` },
            { name: data.title, url: `/productDetails?id=${data.id}` },
          ]);
        stopLoading();
      } catch (error) {
        stopLoading();
        console.log(error);
        window.alert(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-8 flex flex-col p-4">
      {pageNavigation(links)}
      <div className="pl-4 md:pl-28 flex flex-col md:flex-row items-center gap-4 justify-center">
        <div className="flex w-full gap-4 flex-col-reverse md:flex-row ">
          <div className="flex w-auto min-w-[50px] flex-row max-h-[300px] gap-4  md:flex-col items-center justify-start">
            <Image
              src={data.image}
              alt={data.title}
              width={30}
              height={30}
              className="rounded-md w-[30px] h-[30px]"
            />
            <Image
              src={data.image}
              alt={data.title}
              width={30}
              height={30}
              className="rounded-md w-[30px] h-[30px]"
            />
            <Image
              src={data.image}
              alt={data.title}
              width={30}
              height={30}
              className="rounded-md w-[30px] h-[30px]"
            />
            <Image
              src={data.image}
              alt={data.title}
              width={30}
              height={30}
              className="rounded-md w-[30px] h-[30px]"
            />
          </div>
          <Image
            src={data.image}
            alt={data.title}
            width={300}
            height={300}
            className="rounded-md h-[300px] self-center"
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <h1 className="text-4xl font-bold">{data?.title}</h1>
          <p className="text-2xl font-bold">${data?.price}</p>
          <p className="text-lg">{data?.description}</p>
          <div className="flex flex-row gap-4 items-center">
            {/* <p>Rating: {data?.rating.rate}</p>
            <p>Count: {data?.rating.count}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
