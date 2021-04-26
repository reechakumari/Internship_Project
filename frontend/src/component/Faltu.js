import { Box, Button, Header, Heading, Text, Tab, Tabs,Form, FormField, TextInput, DateInput, Grommet } from 'grommet';
import { Hpe, Previous } from 'grommet-icons';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Foooter from './Foooter';

function Faltu() {

  let history = useHistory();

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

  const [module2, setModule2] = useState({
      Device_Shipment_By: "",
      Device_Received_Date: "",
      Device_Challan_No: "",
      Device_Challan_Date: ""
  });

  const inputEvent = (e) => {
      console.log(e.target.value);
      console.log(e.target.name);

      const {name, value} = e.target;
      setModule2((preValue)=> {
          console.log(preValue);
          return{
              ...preValue,
              [name]:value,
          };
      })
  }

  return(
      <>
      <Grommet theme={theme}>
      <Header background="brand">
          <Box direction="row" gap="small" pad="medium">
              <Hpe color="White"/>
              <Text weight="bold">HPE</Text>
              <Text>Console</Text>
          </Box>
      </Header>  
      
      <Box alignSelf="center"  border={{ color: 'brand', size: 'medium' }} >
        <Box pad="small">
            <Button icon={<Previous />} alignSelf="start" onClick={() => history.goBack()}/>
        </Box>
        <Heading margin={{left: 'medium'}} >Asset Tracker</Heading>

        <Box direction="row" alignSelf="center" pad="medium"> 
            <Tabs gap="small">
                <Tab title="Inward Section - Store Activity">
                    <Box justify="center">
                        <Box direction="row" alignSelf="center"  border={{ color: 'brand', size: 'small' }} pad="medium"> 
                            <Form key={1}>
                                <FormField label="Shipment Received By" width="large">
                                <TextInput placeholder="Enter Shipment Received By" name="Device_Shipment_By" value={module2.Device_Shipment_By} onChange={inputEvent} />
                                </FormField>
                                <FormField label="Received Date">
                                <DateInput format="mm/dd/yyyy" name="Device_Received_Date:" value={module2.Device_Received_Date} onChange={inputEvent} />
                                </FormField>
                                <FormField label="Delivery Challan No.">
                                <TextInput placeholder="Enter Delivery Challan No." name="Device_Challan_No" value={module2.Device_Challan_No} onChange={inputEvent} />
                                </FormField>
                                <FormField label="Delivery Challan Date">
                                <DateInput format="mm/dd/yyyy"  name="Device_Challan_Date" value={module2.Device_Challan_Date} onChange={inputEvent} />
                                </FormField>
                                <Box  direction="row" justify="end" pad="small" gap="small" alignSelf="center">
                                    <Button key={1} type="submit" alignSelf="center" primary label="Save"  />
                                </Box>
                            </Form>
                        </Box>
                    </Box>
                </Tab>
                
                <Tab title="Shipment & User Details">
                    <Box justify="center">
                        <Box direction="row" alignSelf="center"  border={{ color: 'brand', size: 'small' }} pad="medium"> 
                            <Form key={2}>
                                <FormField label="HAWB No." width="large">
                                <TextInput placeholder="Enter HAWB No." />
                                </FormField>
                                <FormField label="Invoice No.">
                                <TextInput placeholder="Enter Invoice No." />
                                </FormField>
                                <FormField label="PO Number">
                                <TextInput placeholder="Enter PO Number" />
                                </FormField>
                                <FormField label="End User">
                                <TextInput placeholder="Enter End User" />
                                </FormField>
                                <FormField label="Asset Description">
                                <TextInput placeholder="Enter Asset Description" />
                                </FormField>
                                <FormField label="Part No.">
                                <TextInput placeholder="Enter Part No." />
                                </FormField>
                                <FormField label="Serial No.">
                                <TextInput placeholder="Enter Serial No." />
                                </FormField>
                                <FormField label="Quantity">
                                <TextInput placeholder="Enter Quantity" />
                                </FormField>
                                <Box  direction="row" justify="end" pad="small" gap="small" alignSelf="center">
                                    <Button key={2} type="submit" alignSelf="center" primary label="Save"  />
                                </Box>
                            </Form>
                        </Box>
                    </Box>
                </Tab>

                <Tab title="Shipment Delivery" >
                    <Box justify="center">
                        <Box direction="row" alignSelf="center"  border={{ color: 'brand', size: 'small' }} pad="medium"> 
                            <Form key={3}>
                                <FormField label="Communication sent for Asset Collection" width="large">
                                <TextInput placeholder="Enter Communication sent for Asset Collection" />
                                </FormField>
                                <FormField label="Issued By">
                                <TextInput placeholder="Enter Issued By" />
                                </FormField>
                                <FormField label="Issued Date">
                                <DateInput format="mm/dd/yyyy" />
                                </FormField>
                                <FormField label="Material Received By">
                                <TextInput placeholder="Enter Material Received By" />
                                </FormField>
                                <FormField label="BU/Project">
                                <TextInput placeholder="Enter BU/Project" />
                                </FormField>
                                <FormField label="Remark, if any">
                                <TextInput placeholder="Enter Remark, if any" />
                                </FormField>
                                <Box  direction="row" justify="end" pad="small" gap="small" alignSelf="center">
                                    <Button key={3} type="submit" alignSelf="center" primary label="Save"  />
                                </Box>
                            </Form>
                        </Box>
                    </Box>
                </Tab>

                <Tab title="Hardware Tagging">
                    <Box justify="center">
                        <Box direction="row" alignSelf="center"  border={{ color: 'brand', size: 'small' }} pad="medium"> 
                            <Form key={4}>
                                <FormField label="Asset Location(BizIT/Project)" width="large">
                                <TextInput placeholder="Enter Asset Location(BizIT/Project)" />
                                </FormField>
                                <FormField label="Asset Tag By FA">
                                <TextInput placeholder="Enter Asset Tag By FA" />
                                </FormField>
                                <FormField label="Bond Sticker-By Logistics">
                                <TextInput placeholder="Enter Bond Sticker-By Logistics" />
                                </FormField>
                                <Box  direction="row" justify="end" pad="small" gap="small" alignSelf="center">
                                    <Button key={4} type="submit" alignSelf="center" primary label="Submit"  />
                                </Box>
                            </Form>
                        </Box>
                    </Box>
                </Tab>
            </Tabs>   
        </Box>
      </Box>
      <Foooter />
    </Grommet>
  </>
  );
}

export default Faltu;
