/* eslint-disable no-nested-ternary */
import { useState, useEffect } from "react";

// next
import Link from "next/link";

import Image from "next/image";
import useWindowSize from "components/CustomHooks/useWindowSize";
import { usePathname } from "next/navigation";

// components
import AsideInner from "components/Aside/AsideInner";

// mui
import {
  Box,
  Container,
  Stack,

  // IconButton,
  // Button,
  // Typography,
  Drawer,
  Typography,
} from "@mui/material";

const menuItems = [
  {
    id: 1,
    title: "خانه",
    href: "/",
    hrefSelectList: ["/"],
  },
  {
    id: 2,
    title: "فرصت‌های شغلی",
    href: "/careers/",
    hrefSelectList: ["/careers/"],
  },
  {
    id: 3,
    title: "فرآیند استخدام",
    href: "/hiring-process/",
    hrefSelectList: ["/hiring-process/"],
  },
  {
    id: 4,
    title: "سوالات متداول",
    href: "/faq/",
    hrefSelectList: ["/faq/"],
  },
];

export default function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const windowSize = useWindowSize();
  const pathname = usePathname();

  useEffect(() => {
    if (windowSize.width >= 1200) {
      setIsMobile(false);
    } else if (windowSize.width < 1200) {
      setIsMobile(true);
    }
  }, [windowSize]);

  useEffect(() => {
    const handleScroll = () => {
      const windowScroll = window.scrollY;
      if (windowScroll === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleShowSelectedMenu = (menuItem) => {
    let isSelected = false;
    if (
      menuItem.href === pathname ||
      menuItem.hrefSelectList.includes(pathname)
    ) {
      isSelected = true;
    }

    return isSelected;
  };
  return (
    <>
      <Box
        component="header"
        sx={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          paddingLeft: { xs: "19px", md: "80px", lg: "105px" },
          paddingRight: { xs: "19px", md: "80px", lg: "105px" },
          paddingTop: { xs: "27px", md: "63px" },
          zIndex: 1000,
          // backgroundImage: "url(/images/herrobackground.pngs)",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
          }}
        >
          <Stack
            direction="row-reverse"
            alignItems="center"
            sx={{
              position: "relative",
              height: "100%",
              justifyContent: {
                md: "space-between",
                xs: "space-between",
              },
              cursor: "pointer",
            }}
          >
            <Stack
              direction="row"
              alignItems="flex-end"
              sx={{ position: "absolute", right: "0", top: "0" }}
            >
              <Box>
                <Typography
                  sx={{
                    color: " rgba(85, 77, 172, 1)",
                    fontSize: { md: "17px", xs: "10px" },
                    fontWeight: "700",
                  }}
                >
                  همراهان فردا
                </Typography>
              </Box>
              <Box
                sx={{
                  float: "left",
                  position: "relative",
                  width: { md: "80px", xs: "52px" },
                  height: { md: "80px", xs: "52px" },
                }}
              >
                <Box>
                  <Image
                    src="/images/logo.png"
                    layout="fill"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>
            </Stack>

            <Stack
              sx={{
                display: { xs: "none", md: "none", lg: "flex" },
                width: "100%",
                paddingTop: "80px",
              }}
              direction="row-reverse"
              justifyContent="center"
              alignItems="center"
              spacing={8}
            >
              {menuItems.map((menuItem) => {
                const isSelected = handleShowSelectedMenu(menuItem);

                return (
                  <Link
                    key={menuItem.id}
                    href={menuItem.href}
                    sx={{
                      textDecoration: "none !important",
                      fontWeight: "700px",
                    }}
                  >
                    <Typography
                      variant="body3"
                      sx={{
                        color: isSelected
                          ? ")rgba(85, 77, 172, 1)"
                          : "rgba(0, 0, 0, 1)",
                        textDecoration: "none",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      {menuItem.title}
                    </Typography>
                  </Link>
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {isMobile && (
        <Drawer
          anchor="left"
          open={isOpenDrawer}
          onClose={() => {
            setIsOpenDrawer((prev) => !prev);
          }}
        >
          <Box
            component="aside"
            sx={{
              width: (theme) => ({
                xs: theme.spacing(28.5 + 4),
                sm: theme.spacing(28.5 + 6),
              }),
              pt: 3,
              px: {
                xs: 2,
                sm: 3,
              },
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              // spacing={2}
              sx={{
                mb: 5,
              }}
            >
              <Image
                width={80}
                height={56}
                alt="Samim Logo"
                src="/images/logo.png"
                priority
                quality={100}
              />
            </Stack>

            <AsideInner
              setIsOpenDrawer={setIsOpenDrawer}
              menuItems={menuItems}
              handleShowSelectedMenu={handleShowSelectedMenu}
            />
          </Box>
        </Drawer>
      )}
    </>
  );
}
