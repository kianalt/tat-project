// import { useState, useEffect } from 'react'

// next
// import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'

// mui
import {
  // Box,
  Stack,
  Typography,
} from '@mui/material'

// constants
// import menuItems from 'constants/menuItems'

export default function AsideInner({
  setIsOpenDrawer,
  menuItems,
  handleShowSelectedMenu,
}) {
  // const [isClient, setIsClient] = useState(false)

  // const routeParams = useParams()
  // const pathname = usePathname()

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])

  // const handleShowSelectedMenu = menuItem => {
  //   // console.log('routeParams', routeParams)
  //   // console.log("menuItem.href.split('/')", menuItem.href.split('/'))
  //   // console.log("pathname.split('/')", pathname.split('/'))
  //   // console.log('- - - - - - - - - -')

  //   let isSelected = false
  //   if (
  //     menuItem.href === pathname ||
  //     menuItem.hrefSelectList.includes(pathname)
  //   ) {
  //     isSelected = true
  //   } else if (
  //     menuItem.href.split('/').length ===
  //     pathname.split('/').length - 1
  //   ) {
  //     const pathnameArray = pathname.split('/')
  //     for (let i = 0; i < pathnameArray.length - 2; i += 1) {
  //       // console.log('i', i)
  //       // console.log("menuItem.href.split('/')[i]", menuItem.href.split('/')[i])
  //       // console.log("pathname.split('/')[i]", pathname.split('/')[i])
  //       if (menuItem.href.split('/')[i] === pathname.split('/')[i]) {
  //         isSelected = true
  //       } else {
  //         isSelected = false
  //       }
  //     }
  //   }

  //   // (menuItem.href.split('/').length === pathname.split('/').length &&
  //   //     menuItem.href === pathname) ||
  //   //   (pathname.split('/').length === 6 &&
  //   //     menuItem.href.split('/')?.[1] === pathname.split('/')?.[1] &&
  //   //     menuItem.href.split('/')?.[2] === pathname.split('/')?.[2] &&
  //   //     menuItem.href.split('/')?.[3] === pathname.split('/')?.[3] &&
  //   //     menuItem.href.split('/')?.[4] === '' &&
  //   //     pathname.split('/')?.[4] !== '') ||
  //   //   (pathname.split('/').length === 8 &&
  //   //     menuItem.href.split('/')?.[1] === pathname.split('/')?.[1] &&
  //   //     menuItem.href.split('/')?.[2] === pathname.split('/')?.[2] &&
  //   //     menuItem.href.split('/')?.[3] === pathname.split('/')?.[3] &&
  //   //     menuItem.href.split('/')?.[4] === pathname.split('/')?.[4] &&
  //   //     menuItem.href.split('/')?.[5] === pathname.split('/')?.[5] &&
  //   //     menuItem.href.split('/')?.[6] === '' &&
  //   //     pathname.split('/')?.[6] !== '')

  //   return isSelected
  // }

  return (
    <Stack
      direction="column"
      // alignItems="center"
      spacing={3}
    >
      {menuItems.map(menuItem => {
        const isSelected = handleShowSelectedMenu(menuItem)

        return (
          <Stack
            key={menuItem.id}
            component={Link}
            href={`${menuItem.href}`}
            direction="row"
            alignItems="center"
            spacing={1}
            onClick={() => {
              if (setIsOpenDrawer) {
                setIsOpenDrawer(false)
              }
            }}
          >
            {/* {menuItem.icon && (
              <menuItem.icon
                sx={{
                  color: isSelected ? 'primary.main' : 'text.primary',
                }}
              />
            )} */}

            <Typography
              variant="body1"
              component="p"
              color={isSelected ? 'primary.main' : 'text.primary'}
              // mr={2}
              // sx={{ color: 'common.black' }}
            >
              {menuItem.title}
            </Typography>
          </Stack>
        )
      })}

      {/* {menuItems({ routeParams, isClient }).permanent.map(menuItem => {
        const isSelected = handleShowSelectedMenu(menuItem)

        return (
          <Stack
            key={menuItem.id}
            component={Link}
            href={`${menuItem.href}`}
            direction="row"
            alignItems="center"
            spacing={1}
            onClick={() => {
              if (setIsOpenDrawer) {
                setIsOpenDrawer(false)
              }
            }}
          >
            {menuItem.icon && (
              <menuItem.icon
                sx={{
                  color: isSelected ? 'secondary.main' : 'text.primary',
                }}
              />
            )}

            <Typography
              variant="button1"
              component="p"
              color={isSelected ? 'secondary.main' : 'text.primary'}
              // mr={2}
              // sx={{ color: 'common.black' }}
            >
              {menuItem.title}
            </Typography>
          </Stack>
        )
      })} */}

      {/* {routeParams.organization && (
        <Box
          sx={{
            height: '1px',
            my: 4,
            bgcolor: 'text.primary',
          }}
        />
      )}

      {routeParams.organization &&
        !routeParams.project &&
        menuItems({ routeParams, isClient }).organization.map(menuItem => {
          const isSelected = handleShowSelectedMenu(menuItem)

          return (
            <Stack
              key={menuItem.id}
              component={Link}
              href={`${menuItem.href}`}
              direction="row"
              alignItems="center"
              spacing={1}
              onClick={() => {
                if (setIsOpenDrawer) {
                  setIsOpenDrawer(false)
                }
              }}
            >
              {menuItem.icon && (
                <menuItem.icon
                  sx={{
                    color: isSelected ? 'secondary.main' : 'text.primary',
                  }}
                />
              )}

              <Typography
                variant="button1"
                component="p"
                color={isSelected ? 'secondary.main' : 'text.primary'}
                // mr={2}
                // sx={{ color: 'common.black' }}
              >
                {menuItem.title}
              </Typography>
            </Stack>
          )
        })}

      {routeParams.organization &&
        routeParams.project &&
        menuItems({ routeParams, isClient }).project.map(menuItem => {
          const isSelected = handleShowSelectedMenu(menuItem)

          return (
            <Stack
              key={menuItem.id}
              component={Link}
              href={`${menuItem.href}`}
              direction="row"
              alignItems="center"
              spacing={1}
              onClick={() => {
                if (setIsOpenDrawer) {
                  setIsOpenDrawer(false)
                }
              }}
            >
              {menuItem.icon && (
                <menuItem.icon
                  sx={{
                    color: isSelected ? 'secondary.main' : 'text.primary',
                  }}
                />
              )}

              <Typography
                variant="button1"
                component="p"
                color={isSelected ? 'secondary.main' : 'text.primary'}
                // mr={2}
                // sx={{ color: 'common.black' }}
              >
                {menuItem.title}
              </Typography>
            </Stack>
          )
        })} */}
    </Stack>
  )
}
