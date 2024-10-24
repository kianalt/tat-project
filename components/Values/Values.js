"use client";
// react
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// next
import Link from "next/link";
import Image from "next/image";
// MUI
import { Box, Container, Stack, Button, Typography } from "@mui/material";

import Title from "components/Title/Title";
import { title } from "process";
//
const datas = [
  {
    image: "/images/clipboard.png",
    title: "عنوان اصلی",
    brief:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
  {
    image: "/images/clipboard.png",
    title: "عنوان اصلی",
    brief:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
  {
    image: "/images/clipboard.png",
    title: "عنوان اصلی",
    brief:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
  {
    image: "/images/clipboard.png",
    title: "عنوان اصلی",
    brief:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
  {
    image: "/images/clipboard.png",
    title: "عنوان اصلی",
    brief:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
  {
    image: "/images/clipboard.png",
    title: "عنوان اصلی",
    brief:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
  {
    image: "/images/clipboard.png",
    title: "عنوان اصلی",
    brief:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
];

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box sx={{ position: "absolute", top: "160px", pr: "20px" }}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.5 18H7.5"
          stroke="#403ABB"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 28.5L7.5 18L18 7.5"
          stroke="#403ABB"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Box>
  );
};
const Values = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    focusOnSelect: true,
    speed: 500,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
    beforeChange: (current, next) => setCenterIndex(next), // Updates the center index
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "693px",
        background: "rgba(241, 241, 241, 1)",
        pt: { md: "115px", xs: "36px" },
        pb: "122px",
      }}
    >
      <Box sx={{ mb: "37px" }}>
        <Title title={"ارزش‌ها و هویت‌ما"} rtl />
      </Box>
      <Stack flexDirection={"row-reverse"} sx={{ width: "100%" }}>
        <Box sx={{ pr: "122px", width: "40%" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "300",
              lineHeight: "32px",
              textAlign: "justify",
            }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی،
          </Typography>
        </Box>
        <Box sx={{ width: "60%", padding: "0 3%" }} className="value-slider">
          <Box sx={{ width: "100%", height: "348px", overflow: "hidden" }}>
            <Slider {...settings}>
              {datas.map((data, index) => {
                // Logic for adjusting width and visibility based on position
                const isRightSlide = index === (centerIndex + 1) % datas.length;
                const isCenterSlide = index === centerIndex;
                const isLeftSlide =
                  index === (centerIndex - 1 + datas.length) % datas.length;

                // Set dynamic widths for the slides
                const width = isRightSlide
                  ? "350px !important" // Fully visible slide on the right
                  : isCenterSlide
                  ? "200px !important" // Medium-sized center slide
                  : isLeftSlide
                  ? "100px !important" // Smaller left-most slide
                  : "0px "; // Minimal width for all other slides

                return (
                  <Box
                    key={index}
                    className={` sider-item${
                      index === (centerIndex + 1) % datas.length
                        ? "isRightSlide"
                        : index === centerIndex
                        ? "isCenterSlide"
                        : (centerIndex - 1 + datas.length) % datas.length
                        ? "isLeftSlid"
                        : ""
                    }`}
                    sx={{
                      height: "347px !important",
                      width: "100%",
                      minWidth: "150px",
                      pt: "49px  !important",
                      pr: "8%",
                      pl: "8%",
                      backgroundColor: "#fff",
                      borderRadius: "32px",
                      opacity:
                        isRightSlide || isCenterSlide || isLeftSlide ? 1 : 0,
                      margin: "0  !important",
                    }}
                  >
                    <Stack
                      sx={{
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          mb: "14px",
                        }}
                      >
                        <img
                          src={data.image}
                          alt={`Image ${index}`}
                          className="slider-image"
                          style={{
                            width: "56px",
                            height: "56px",
                            mr: "auto",
                            ml: "auto",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: "16px",
                          textAlign: "center",
                          ml: isLeftSlide ? "30px" : "",
                          mt: isLeftSlide ? "30px" : "",
                          height: isLeftSlide ? "60px" : "auto",
                          transform: isLeftSlide ? "rotate(-90deg)" : "",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "700",
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            fontSize: { md: "18px", xs: "16px" },
                          }}
                        >
                          {data.title}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            display: isLeftSlide ? "none" : "block",
                            height: "170px",
                            overflow: "hidden",
                            textAlign: "justify",
                            direction: "rtl",
                          }}
                        >
                          {data.brief}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Values;
