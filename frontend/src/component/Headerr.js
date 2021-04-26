import React from 'react';
import { Box, Button, Avatar,Text} from 'grommet';
import { Hpe, Menu, Home, HelpOption } from 'grommet-icons';

function Headerr() {
  
    const AppBar = (props) => (
        <Box
          tag='header'
          direction='row'
          
          align='center'
          justify='between'
          background='brand'
        //   pad={{ left: 'small', right: 'small', vertical: 'small' }}
          elevation='medium'
          style={{ zIndex: '1' }}
          {...props}
        />
      );
  
    return (
        <AppBar>
          <Box direction="row" pad="small">
            <Button icon={<Menu />} onClick={() => {}} />
            <Box direction="row" gap="small" pad="medium">
            <Hpe color="White"/>
            <Text weight="bold">HPE</Text>
            <Text>Console</Text>
            </Box>
          </Box>
        
          <Box direction="row"  gap="small">
            <Button icon={<HelpOption />} onClick={() => {}} />
            <Button icon={<Home />} onClick={() => {}} />
            <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />   
          </Box>
          
        </AppBar>
  );
}

export default Headerr;