import React from "react";
import Carousel from "react-multi-carousel";
import ItemProduct from "../ItemProduct";
import { Container } from "./style";
import itemsStore from "../../service/store";

function CarouselItem() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    destopMin: {
      breakpoint: { max: 1200, min: 900 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tabletMin: {
      breakpoint: { max: 900, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 700, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Container>
      <h2>Destaques</h2>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots
        responsive={responsive}
        ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={3000}
        keyBoardControl
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tabletMin", "tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px image-item"
        sliderClass="react-multi-carousel-track"
        autoPlay
      >
        {itemsStore.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ItemProduct dados={item} />
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

export default CarouselItem;
