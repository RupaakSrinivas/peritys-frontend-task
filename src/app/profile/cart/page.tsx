"use client";
import pageNavigation from "@/components/pageNavigation";
import axios from "axios";
import { Cart, CartItem } from "@/types/products";
import { useState, useEffect } from "react";
import Card from "@/components/productCard";
import { useLoadingStore } from "@/store/loading";

const links = [
  { name: "Home", url: "/" },
  { name: "Cart", url: "/profile/cart" },
];

export default function Cart() {
  const [products, setProducts] = useState<Cart>({} as Cart);
  const { startLoading, stopLoading } = useLoadingStore();

  const getProducts = async () => {
    try {
      startLoading();
      const res = await axios.get(`https://fakestoreapi.com/carts/user/1`);
      const CartData: Cart[] = res.data;
      setProducts(CartData[0]);
      stopLoading();
    } catch (error) {
      stopLoading();
      console.log(error);
      window.alert(error);
    }
  };

  useEffect(() => {
    getProducts();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col mb-6 p-4">
      {pageNavigation(links)}
      <div>
        <h1 className="text-4xl w-full text-center font-bold">Products</h1>
        {/* <div className="flex flex-wrap mt-8 items-center justify-center gap-4">
          {products.products.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <Card item={product} />
          ))}
        </div> */}
      </div>
    </div>
  );
}
