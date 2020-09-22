import React from 'react'

import { AppBar as MaterialAppBar, Box, Button, Container, Link, Typography } from '@material-ui/core'
import { NavLink } from '../NavLink'

const AppBar = ({ children, projectDescription, projectName}) => {
  
  return (
    <MaterialAppBar>
      <Container>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          py={1}
        >
          <Link href='https://www.grassrootslaw.org/'>
            <img
              alt="Grassroots Law Project"
              display="block"
              height="auto"
              width="110px"
              src="https://images.squarespace-cdn.com/content/5e7662fe45630059ae9347cf/1591116153336-2V6MDHUQAXMOIKOZI6DJ/glp+text+only+logo+neon.png?format=1500w&content-type=image%2Fpng"
            />
          </Link>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            href="https://secure.actblue.com/donate/glp-homepage?refcode=homepage_nav"
          >
            Donate
          </Button>
        </Box>
      </Container>
      <Box bgcolor="background.dark">
        <Container>
          <Box
            display='flex'
            alignItems='center'
            flexDirection={['column', 'row']}
            justifyContent='space-between'
            py={6}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems={['center', 'start']}
              justifyContent="center"
            >
              <Typography variant="overline" fontWeight="bold">{projectName}</Typography>
              <Typography variant="subtitle2" component="p">{projectDescription}</Typography>
            </Box>
            <Box display='flex'>
              <NavLink
                destination="/"
                label="Home"
              />
              {children}
            </Box>
          </Box>
        </Container>
      </Box>
    </MaterialAppBar>
    // <Box
    //   bgcolor='background.dark'
    //   color='text.inverted'
    //   pb={2}
    //   pt={4}
    // >
    //   <Container maxWidth='lg'>
    //     <Box
    //       display='flex'
    //       flexDirection={['column', 'row']}
    //       justifyContent='space-between'
    //       mb={3}
    //       px='1rem' // will match value in padded nav elements
    //     >
    //       <Box width={[180, 261]}>
    //         <img
    //           alt='Grassroots Law Project'
    //           display='block'
    //           height='auto'
    //           width='261'
    //           style={{ maxWidth: '100%' }}
    //           src='https://images.squarespace-cdn.com/content/5e7662fe45630059ae9347cf/1591116153336-2V6MDHUQAXMOIKOZI6DJ/glp+text+only+logo+neon.png?format=1500w&content-type=image%2Fpng'
    //         />
    //       </Box>
    //       <Box maxWidth='500px' ml={[0, 6]} mt={[3, topWhitespace]}>
    //         <Typography variant='body1'>
    //           <Link color='inherit' href='https://www.grassrootslaw.org/'>
    //             Grassroots Law Project
    //           </Link>{' '}
    //           collects information on police violence across the United States.
    //           This data is critical to identifying the national pattern of
    //           police brutality. This page provides a view into our database,
    //           which covers police killings for <b>2020 onward. </b>
    //         </Typography>
    //       </Box>
    //     </Box>
    //     <Box display='flex' flexDirection='row' flexWrap={['wrap', 'none']}>
    //       { children }
    //       <Button
    //         ml={2}
    //         variant='outlinedSecondary'
    //         href='https://secure.actblue.com/donate/glp-homepage?refcode=homepage_nav'
    //       >
    //         Donate
    //       </Button>
    //     </Box>
    //   </Container>
    // </Box>
  )
}

export default AppBar