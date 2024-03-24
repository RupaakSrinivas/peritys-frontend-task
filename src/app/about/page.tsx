"use client";
import pageNavigation from "@/components/pageNavigation";
import { CiShop, CiDollar, CiShoppingBasket, CiBag1 } from "react-icons/ci";
import Image from "next/image";
import { IconType } from "react-icons";
import { useState } from "react";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
];

interface statCardProps {
  image: IconType;
  value: string;
  desc: string;
}

interface PersonCardProps {
  name: string;
  image: string;
  desc: string;
}

function StatCard(data: statCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      id="card"
      className="w-[270px] h-[230px] border border-opacity-30 border-black flex flex-col items-center justify-around hover:bg-red-500 hover:text-white rounded-md"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <div
        className={`p-2 text-[2.5rem] z-2 border-8 rounded-full border-gray-400 ${
          hover
            ? "text-black bg-white border-[#e67c7c]"
            : "text-white bg-black border-[#c1c1c1]"
        }`}
      >
        <data.image />
      </div>
      <h1 className="font-bold text-[1.5rem]">{data.value}</h1>
      <p className="text-[0.75rem]">{data.desc}</p>
    </div>
  );
}

function PersonCard(data: PersonCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-[250px]">
      <Image src={data.image} alt="About Image" width={370} height={430} />
      <div className="flex flex-col gap-2 w-full max-w-[400px] py-4">
        <h1 className="font-500 mb-4 text-[2rem] md:text-[2rem]">
          {data.name}
        </h1>
        <p>{data.desc}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex flex-col w-full gap-4">
      {pageNavigation(links)}
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center text-[1rem] w-full">
          <div className="flex flex-col gap-2 w-full max-w-[400px] p-4">
            <h1 className="font-bold mb-4 text-[2rem] md:text-[3.5rem]">
              Our Story
            </h1>
            <p>
              Launced in 2015, Exclusive is South Asia&apos;s premier online
              shopping makterplace with an active presense in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sallers and 300 brands and serves
              3 millioons customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <Image
          src="/aboutImage.png"
          alt="About Image"
          width={700}
          height={500}
          className="w-full hidden md:block max-w-[40%]"
        />
      </div>
      <div className="mt-[5rem] mb-4">
        <div className="flex flex-wrap items-center justify-around gap-4">
          {StatCard({
            image: CiShop,
            value: "10.5k",
            desc: "Sellers active on our site",
          })}
          {StatCard({
            image: CiDollar,
            value: "33k",
            desc: "Monthly product sale",
          })}
          {StatCard({
            image: CiShoppingBasket,
            value: "45.5k",
            desc: "Customer active in our site",
          })}
          {StatCard({
            image: CiBag1,
            value: "25k",
            desc: "Annual gross sale in our site",
          })}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 mt-[5rem]">
        {PersonCard({
          name: "Tom Cruise",
          image: "/person1.png",
          desc: "Founder & Chairman",
        })}
        {PersonCard({
          name: "Emma Watson",
          image: "/person2.png",
          desc: "Managing Director",
        })}
        {PersonCard({
          name: "Will Smith",
          image: "/person3.png",
          desc: "Product Designer",
        })}
      </div>
    </div>
  );
}
