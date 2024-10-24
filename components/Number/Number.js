import React from "react";
// MUI
import { Box, Stack, Typography } from "@mui/material";
const Number = () => {
  return (
    <Stack flexDirection={"row"} sx={{ height: "100%" }}>
      <Stack
        sx={{ height: "50%", position: "absolute", bottom: "0", right: "25%" }}
        flexDirection={"row"}
        alignItems={"flex-start"}
      >
        <Stack flexDirection={"column-reverse"} sx={{ mr: 2 }}>
          <Typography
            sx={{
              fontSize: "80px",
              color: "rgba(64, 58, 187, 1)",
              fontWeight: "900",
            }}
          >
            ۲۳
          </Typography>{" "}
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            مشتریان همراهان فردا
          </Typography>
        </Stack>
        <Box
          sx={{
            width: "3px",
            backgroundColor: "black",
            minHeight: "303px",
          }}
        ></Box>
      </Stack>
      <Stack
        sx={{ height: "50%", position: "absolute", top: "0", right: "10%" }}
        flexDirection={"row-reverse"}
        alignItems={"flex-end"}
      >
        <Stack flexDirection={"column"} sx={{ ml: 2 }}>
          <Typography
            sx={{
              fontSize: "80px",
              color: "rgba(64, 58, 187, 1)",
              fontWeight: "900",
            }}
          >
            ۵۴
          </Typography>{" "}
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            مشتریان همراهان فردا
          </Typography>
        </Stack>
        <Box
          sx={{
            width: "3px",
            backgroundColor: "black",
            minHeight: "303px",
          }}
        ></Box>
      </Stack>
    </Stack>
  );
};

export default Number;
