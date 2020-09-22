import React from 'react'

import { Box, Link } from '@material-ui/core'

const NavLink = ({component, destination, label}) => (
  <Link
    component={component}
    color='inherit'
    display='block'
    href={destination}
    variant='body1'
  >
    <Box px={2} py={1}>
      {label}
    </Box>
  </Link>
)

export default NavLink
