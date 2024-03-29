"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-dom";
import { ProductResp } from "@/types/products";
import CardsCarousel from "@/components/cardsCarousel";

const CountDownTimer = () => {
  const difference = +new Date("2024-03-29 20:00:00") - +new Date();
  const calculateTimeLeft = () => {
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)) | 0,
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24) | 0,
        minutes: Math.floor((difference / 1000 / 60) % 60) | 0,
        seconds: Math.floor((difference / 1000) % 60) | 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div className="flex flex-row gap-4 mr-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-[.75rem]">Days</p>
        <p className="font-bold">{timeLeft.days}</p>
      </div>
      <p className="text-[2rem] text-red-500 font-bold">:</p>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-[.75rem]">Hours</p>
        <p className="font-bold">{timeLeft.hours}</p>
      </div>
      <p className="text-[2rem] text-red-500 font-bold">:</p>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-[.75rem]">Minutes</p>
        <p className="font-bold">{timeLeft.minutes}</p>
      </div>
      <p className="text-[2rem] hidden md:block text-red-500 font-bold">:</p>
      <div className="flex-col hidden md:flex items-center justify-center gap-2">
        <p className="text-[.75rem]">Seconds</p>
        <p className="font-bold">{timeLeft.seconds}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const [flashSaleItems, setFlashSaleItems] = useState<ProductResp[]>([]);

  const getItems = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=8");
      const itemData: ProductResp[] = res.data;
      setFlashSaleItems(itemData);
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="flex flex-col gap-12 items-center justify-center">
      <div className="flex flex-row items-center justify-between w-full">
        <nav className="border-r-2 hidden md:flex flex-col items-center justify-center p-4 px-8 w-full h-full max-w-[300px]">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/products?category=women's clothing">
                Women&apos;s Fashion
              </a>
            </li>
            <li>
              <a href="/products?category=men's clothing">
                Mens&apos;s Fashion
              </a>
            </li>
            <li>
              <a href="/products?category=jewelery">Jewelery</a>
            </li>
            <li>
              <a href="/products?category=electronics">Electronics</a>
            </li>
            <li>
              <a href="/products">Home & Lifestyle</a>
            </li>
            <li>
              <a href="/products">Sports & Outdoors</a>
            </li>
            <li>
              <a href="/products">Baby&apos;s & Toys</a>
            </li>
            <li>
              <a href="/products">Groceries & Pets</a>
            </li>
            <li>
              <a href="/products">Health & Beauty</a>
            </li>
          </ul>
        </nav>
        <div className="w-full m-4">
          <Image
            src="/heroImage.png"
            alt="Hero"
            className="w-full h-auto"
            height={500}
            width={1200}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 py-4 pl-4 items-center md:pl-28 justify-center">
        <div className="flex flex-row items-center gap-2 w-full place-self-start">
          <pre className="bg-red-500 leading-[200%] rounded-md">{"  "}</pre>
          <p>Today&apos;s</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full md:pr-28">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="text-[2rem] font-bold">FLASH SALES</h1>
            {CountDownTimer()}
          </div>
        </div>
      </div>
      <div className=" max-w-full pl-4 md:pl-28 ">
        {CardsCarousel(flashSaleItems)}
        <div className="w-full md:pl-28 flex flex-row items-center justify-center">
          <a
            href="/products"
            className="bg-red-500 text-white text-center p-4 w-full max-w-52 rounded-md mt-4"
          >
            View all Products
          </a>
        </div>
      </div>
    </div>
  );
}
