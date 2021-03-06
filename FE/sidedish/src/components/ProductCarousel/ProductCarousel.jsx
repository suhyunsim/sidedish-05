import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product/Product";
import ProductCarouselTitle from "./ProductCarouselTitle";
import usePromise from "../../lib/usePromise";
import arrowNext from "./navigate_next.png";
import arrowPrev from "./navigate_before.png";
import loading from "./loading.svg";

const SliderWrap = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const NextArrow = styled.div`
  display: block;
  background: url(${arrowNext});
  height: 30px;
  width: 30px;
  &::before {
    content: "";
  }
`;

const Skeleton = styled.div`
  width: 980px;
  height: 395px;
  margin: 0 auto;
  background: url(${loading}) no-repeat center;
`;

const PrevArrow = styled.div`
  display: block;
  background: url(${arrowPrev});
  height: 30px;
  width: 30px;
  &::before {
    content: "";
  }
`;

const slideSettings = {
  infinite: true,
  speed: 500,
  slidesToScroll: 4,
  slidesToShow: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const ProductCarousel = ({ api }) => {
  const [loading, response, error] = usePromise(api);

  if (loading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }

  if (!response) return null;

  if (error) {
    return <>{console.error(error)}</>;
  }

  const { data } = response.data;

  return (
    <>
      <ProductCarouselTitle
        title={data.category_name}
        description={data.category_description}
      ></ProductCarouselTitle>
      <SliderWrap>
        <Slider {...slideSettings}>
          {data.sidedish.map((item) => (
            <div style={{ width: 215 }}>
              <Product item={item} key={item.sidedish_id}></Product>
            </div>
          ))}
        </Slider>
      </SliderWrap>
    </>
  );
};

export default ProductCarousel;
