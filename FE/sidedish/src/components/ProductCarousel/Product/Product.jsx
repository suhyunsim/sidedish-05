import React, { useState } from "react";
import styled from "@emotion/styled";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductBadge from "./ProductBadge";
import Modal from "../DetailProduct/Modal";

const ProductBox = styled.div`
  width: 215px;
`;

const ProductImageContainer = styled.div`
  width: 215px;
  margin: 0px 15px 8px;
`;

const Product = ({ item }) => {
  const { image, delivery_type, title, description, n_price, s_price, badge, detail_hash } = item;
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <ProductBox>
      <ProductImageContainer>
        <ProductImage imgdata={{ image, title, delivery_type }} />
        <ProductInfo infodata={{ title, description, n_price, s_price }} />
        {badge && badge.length ? <ProductBadge badgedata={badge} /> : ""}
      </ProductImageContainer>
      {/* <DetailProduct></DetailProduct> */}
    </ProductBox>

  );
};

export default Product;