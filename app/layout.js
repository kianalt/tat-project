"use client";

import * as React from "react";
import localFont from "next/font/local";
import "./globals.css";
import "./custom.css";
import Header from "components/Header/Header";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const iransans = localFont({
  src: [
    {
      path: "../public/fonts/IRANSansX-Light.woff2",
      weight: "300", // Light
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansX-Regular.woff2",
      weight: "400", // Regular
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansX-Medium.woff2",
      weight: "500", // Medium
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansX-Heavy.woff2",
      weight: "700", // Heavy
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansX-ExtraBold.woff2",
      weight: "900", // Extra Bold
      style: "normal",
    },
  ],
  variable: "--font-iransans", // Define a CSS variable for the font
});

//   typography: {
//     fontFamily: "IRANSans, Arial, sans-serif",
//     h1: {
//       fontFamily: "IRANSans, Arial, sans-serif",
//     },
//     h2: {
//       fontFamily: "IRANSans, Arial, sans-serif",
//     },
//     body1: {
//       fontFamily: "IRANSans, Arial, sans-serif",
//     },
//     button: {
//       fontFamily: "IRANSans, Arial, sans-serif",
//     },
//     link: {
//       fontFamily: "IRANSans, Arial, sans-serif",
//     },
//   },
// });
export default function RootLayout({ children }) {
  return (
    <html lang="fa" className={iransans.variable}>
      <head></head>

      <body>
        <CssBaseline />
        <Header />
        {children}
      </body>
    </html>
  );
}
