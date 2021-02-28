import React from "react";
import Carousel from "react-multi-carousel";
import Header from "../../components/Header";
import ItemProduct from "../../components/ItemProduct";
import Menu from "../../components/Menu";
import PageDefault from "../PageDefault";
import { Container } from "./style";
// import chevronRight from "../../assets/images/chevron-right.svg";
// import chevronLeft from "../../assets/images/chevron-left.svg";
import "react-multi-carousel/lib/styles.css";

function Home() {
  // const [activeItemIndex, setActiveItemIndex] = useState(0);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    destopMin: {
      breakpoint: { max: 1200, min: 700 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 700, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <PageDefault>
      <Menu />
      <Header />
      <Container>
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
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px image-item"
          sliderClass="react-multi-carousel-track"
          autoPlay
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ItemProduct />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ItemProduct />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ItemProduct />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ItemProduct />
          </div>
        </Carousel>
      </Container>
      <Container>fg</Container>
    </PageDefault>
  );
}

export default Home;
