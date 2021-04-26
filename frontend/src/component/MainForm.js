import React from 'react';
import { Box, Text, Grommet, Main, Heading } from 'grommet';
import Foooter from './Foooter';
import Headerr from './Headerr';
import CardsForm from './CardsForm';
import CardsArr from './CardsArr';

function App() {

  const theme = {
    global: {
      colors: {
        brand: '#01A982',
      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  return (
    <Grommet theme={theme}>
      <Headerr />
      <Main pad="medium" margin={{ left: 'small', right: 'small'}} >
        <Box>
          <Heading margin={{ left: "small",top: "small", bottom: "none"}}>Hello User!</Heading>
          <Text margin="small">Welcome to the HPE Asset Management 2.0</Text>
        </Box>
        <Box direction="row" gap="small" pad="medium">
        {CardsArr.map((cardsarr) => 
                <CardsForm 
                key={cardsarr.id}
                icon={cardsarr.icon} 
                title={cardsarr.title} 
                body={cardsarr.body}
                links={cardsarr.link}
                />
          )}
        </Box> 
      </Main>
      <Foooter />

    </Grommet>
    
  );
}

export default App;
