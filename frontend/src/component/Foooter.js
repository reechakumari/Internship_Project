import React from 'react';
import { Box, Footer, Anchor} from 'grommet';
import { Hpe } from 'grommet-icons';

function Foooter() {
  
    return (
        <Footer pad="small" background="brand">
          <Box direction="row" align="start" pad="xxsmall">
            <Hpe color="brand"/>
            <small>© 2021 Hewlett Packard Enterprise Development LP</small>
          </Box>
          <Box direction="row" align="start" gap="small">
            <Anchor href="www.google.com" size="small" color="White" label="Terms" />
            <Anchor href="www.google.com" size="small" color="white" label="Privacy" />
            <Anchor href="www.google.com" size="small" color="white" label="Do Not Sell My Personal Information" />
          </Box>
        </Footer>
    );
  }

export default Foooter;
  
  
  