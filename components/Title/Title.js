"use client";
// react
import React from "react";

// MUI
import { Box, Stack, Typography } from "@mui/material";
//

const Title = ({ title, rtl }) => {
  return (
    <Box>
      {rtl ? (
        <Stack flexDirection={"row-reverse"} alignItems={"center"}>
          <Box
            sx={{
              width: "122px",
              height: "2px",
              backgroundColor: "black",
              ml: "10px",
            }}
          />
          <Typography
            sx={{ fontSize: { md: "20px", xs: "14px" }, fontWeight: "700" }}
          >
            {title}
          </Typography>
        </Stack>
      ) : (
        <Stack flexDirection={"row"} alignItems={"center"} sx={{ mr: "10px" }}>
          <Box
            sx={{
              width: "122px",
              height: "2px",
              backgroundColor: "black",
              mr: "10px",
            }}
          />
          <Typography
            sx={{ fontSize: { md: "20px", xs: "14px" }, fontWeight: "700" }}
          >
            {title}
          </Typography>
        </Stack>
      )}
    </Box>
  );
};

export default Title;
