// next
// import { usePathname } from 'next/navigation'

// mui
import { Box } from '@mui/material'

// components
import AsideInner from 'components/Aside/AsideInner'

export default function Aside() {
  return (
    <Box
      component="aside"
      sx={{
        width: theme => ({
          xs: 0,
          lg: theme.spacing(28.5),
        }),
        pt: 5,
        // pr: {
        //   xs: 0,
        //   lg: 3,
        // },
        overflow: 'hidden',
        transition: theme =>
          theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
      }}
    >
      <Box
        sx={{
          width: theme => theme.spacing(28.5),
        }}
      >
        <AsideInner />
      </Box>
    </Box>
  )
}
