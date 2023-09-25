import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "@/store/hooks";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

//Carousel slider for product
import Slider from "react-slick";

//Carousel slider data
import SliderData from "./SliderData";
import "./Carousel.css"

//fetch product
import { fetchProducts } from "@/store/apps/eCommerce/ECommerceSlice";
import { ProductType } from "../../../../types/apps/eCommerce";
import Image from "next/image";

const ProductCarousel = () => {
  const [state, setState] = React.useState<any>({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  const dispatch = useDispatch();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const getTitle: string | any = pathName.split('/').pop();

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, pathName, searchParams]);

  // Get Products
  const product: ProductType = useSelector(
    (state) => state.ecommerceReducer.products[getTitle - 1]
  );
  const getProductImage = product ? product.photo : "";
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const { nav1, nav2 } = state;
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    centerMode: true,
    className: "centerThumb",
    speed: 500,
  };

  return (
    <Box>
      <Slider asNavFor={nav2} ref={(slider: any) => (slider1.current = slider)}>
        <Box>
          <Image
            src={getProductImage}
            alt={getProductImage} width={100} height={500}
            style={{ borderRadius: "5px", width: "100%" }}
          />
        </Box>
        {SliderData.map((step) => (
          <Box key={step.id}>
            <Image
              src={step.imgPath}
              alt={step.imgPath} width={100} height={500}
              style={{ borderRadius: "5px", width: "100%" }}
            />
          </Box>
        ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider: any) => (slider2.current = slider)}
        {...settings}
      >
        <Box sx={{ p: 1, cursor: "pointer" }}>
          <Image
            src={getProductImage}
            alt={getProductImage} width={72} height={72}
            style={{ borderRadius: "5px", width: "100%" }}
          />
        </Box>
        {SliderData.map((step) => (
          <Box key={step.id} sx={{ p: 1, cursor: "pointer" }}>
            <Image
              src={step.imgPath}
              alt={step.imgPath} width={72} height={72}
              style={{ borderRadius: "5px", width: "100%" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
