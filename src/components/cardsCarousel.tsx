"use client";

import { Carousel } from "@mantine/carousel";
import Card from "@/components/productCard";
import { ProductResp } from "@/types/products";

export default function CardsCarousel(data: ProductResp[]) {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card item={item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "33.33%", md: "20%" }}
      slideGap={{ base: "xs", sm: "xs" }}
      align="start"
      slidesToScroll={3}
      withControls={false}
      dragFree
    >
      {slides}
    </Carousel>
  );
}
