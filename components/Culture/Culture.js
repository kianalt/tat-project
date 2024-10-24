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
    title: "امنیت شغلی تا مشارکت در سود",
    brief: "همراهان فردا",
  },
  {
    image: "/images/clipboard.png",
    title: "امنیت شغلی تا مشارکت در سود",
    brief: "همراهان فردا",
  },
  {
    image: "/images/clipboard.png",
    title: "امنیت شغلی تا مشارکت در سود",
    brief: "همراهان فردا",
  },
  {
    image: "/images/clipboard.png",
    title: "امنیت شغلی تا مشارکت در سود",
    brief: "همراهان فردا",
  },
  {
    image: "/images/clipboard.png",
    title: "امنیت شغلی تا مشارکت در سود",
    brief: "همراهان فردا",
  },
  {
    image: "/images/clipboard.png",
    title: "امنیت شغلی تا مشارکت در سود",
    brief: "همراهان فردا",
  },
  {
    image: "/images/clipboard.png",
    title: "امنیت شغلی تا مشارکت در سود",
    brief: "همراهان فردا",
  },
];
const settings = {
  infinite: true,
  vertical: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  verticalSwiping: true,
  speed: 500,
  prevArrow: <div className="slick-prev">Up</div>,
  nextArrow: <div className="slick-next">Down</div>,
};
const Culture = () => {
  const [centerIndex, setCenterIndex] = useState(0);
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
      <Box sx={{ mb: "37px", position: "absolute", right: "0" }}>
        <Title title={"ارزش‌ها و هویت‌ما"} rtl />
      </Box>
      <Stack flexDirection={"row-reverse"} sx={{ width: "100%" }}>
        <Box
          sx={{
            pr: "122px",
            width: { lg: "50%", md: "70%", xs: "90%" },
            margin: "0 auto",
            height: "580px",
            overflow: "hidden",
          }}
          className="culture"
        >
          <Slider {...settings}>
            {datas.map((data, index) => {
              return (
                <Box
                  key={index}
                  className="slider-item"
                  sx={{
                    overflowY: "hidden",
                    backgroundColor: "#fff",

                    height: "95px",
                    borderRadius: "16px",
                    margin: "10px",
                    padding: "23px",
                  }}
                >
                  <Stack
                    flexDirection={"row-reverse"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{ height: "100%", padding: "23px" }}
                  >
                    <Stack flexDirection={"row-reverse"} alignItems={"center"}>
                      {" "}
                      <Box
                        sx={{ position: "relatives" }}
                        className="culture-image"
                      >
                        <Image
                          width={56}
                          height={56}
                          src={data.image}
                          alt={`Image ${index}`}
                          className="slider-image"
                        />
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {data.title}
                        </Typography>
                      </Box>
                    </Stack>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { md: "20px", xs: "18px" },
                          fontWeight: "500",
                          color: "rgba(200, 200, 200, 1)",
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
      </Stack>
    </Box>
  );
};

export default Culture;
