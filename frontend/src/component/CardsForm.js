import React from 'react';
import { Box, Button, Text, Card, CardHeader,CardFooter,CardBody} from 'grommet';
import { Link } from "react-router-dom";

function CardsForm(props) {
    return(
        <Box direction="row" gap="large" pad="medium">
          <Card  height="small" width="medium" >
                <CardHeader>
                  <Button icon={props.icon} onClick={() => {}} />
                </CardHeader>
                <CardBody pad={{horizontal: "small"}}>
                <Text weight="bold">{props.title} </Text>
                <Text size="xsmall">{props.body}</Text>
                </CardBody>
                <CardFooter pad="small"> 
                
                <Box>
                  <Link to={props.links}>
                    <Button primary label="view" size="small" color="brand"  />
                  </Link>
                </Box>
                </CardFooter>
          </Card>
        </Box> 

    );
}


export default CardsForm;