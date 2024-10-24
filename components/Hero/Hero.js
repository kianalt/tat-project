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
//

const images = [
  "/images/p1.png",
  "/images/p2.png",
  "/images/p3.png",
  "/images/p1.png",
  "/images/p2.png",
  "/images/p3.png",
  "/images/p1.png",
  "/images/p2.png",
];

const Hero = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 8,
    focusOnSelect: true,
    infinite: true,
    beforeChange: (current, next) => {
      setCenterIndex(next);
    },
    speed: 500,
  };
  const settings2 = {
    centerPadding: "0px",
    slidesToShow: 9,
    focusOnSelect: true,
    infinite: true,
    beforeChange: (current, next) => {
      setCenterIndex(next);
    },
    speed: 500,
  };
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url("/images/herrobackground.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        pt: { md: "264px", xs: "186px" },
        pb: "122px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack>
          <Typography
            sx={{
              color: "rgba(30, 30, 30, 1)",
              fontSize: { md: "40px", xs: "27px" },
              fontWeight: "900",
              textAlign: "center",
            }}
          >
            همراهان، همراه رشد و موفقیت شما
          </Typography>
          <Typography
            sx={{
              color: "rgba(30, 30, 30, 1)",
              fontSize: { md: "24px", xs: "17px" },
              fontWeight: "300",
              textAlign: "center",
              mt: "10px",
              mb: "80px",
            }}
          >
            با پیوستن به تیم ما، دلگرمی ما و آسایش خود را فراهم کنید
          </Typography>
        </Stack>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button
            component={Link}
            href="/about"
            variant="text"
            color="primary"
            disableElevation
            sx={{
              borderRadius: "9px",
              padding: "16px 57px",
              backgroundColor: " rgba(64, 58, 187, 1)",
              "&:hover": { backgroundColor: "none" },
              "& svg": {
                fontSize: {
                  xs: "16px !important",
                  sm: "18px !important",
                },
              },

              mt: 4,
              mb: 2,
            }}
          >
            <Image src="/images/arrow-left.png" width={36} height={36} />
            <Typography
              variant="body1"
              component="span"
              color="text.primary"
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "25px",
                },
                fontWeight: "500",
                textTransform: "none",
                pl: "7px",
                color: "#fff",
              }}
            >
              فرصت‌های شغلی
            </Typography>
          </Button>
        </Box>
        <Box sx={{ mt: { md: "132px", xs: "97px" } }}>
          <Slider {...settings}>
            {images.map((image, index) => {
              const isCenter = index === centerIndex + 1;
              const isBeforeCenter =
                index === (centerIndex + images.length) % images.length;
              return (
                <Box
                  key={index}
                  className={
                    isCenter || isBeforeCenter
                      ? "slider-item slick-center"
                      : "slider-item"
                  }
                >
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className="slider-image"
                  />
                  <div className="shadow" />
                </Box>
              );
            })}
          </Slider>
        </Box>
        <Box>
          <Slider {...settings2}>
            {images.map((image, index) => {
              const isCenter =
                index ===
                ((centerIndex - 1 + images.length) % images.length) - 2;
              return (
                <Box
                  key={index}
                  className={
                    isCenter ? "slider-item slick-center" : "slider-item"
                  }
                >
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className="slider-image"
                  />
                  <div className="shadow" />
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
