import { Box, Button, Header, Heading, Text,Grommet, Table, TableHeader, TableCell, TableRow, ResponsiveContext } from 'grommet';
import { Hpe, Previous, Filter } from 'grommet-icons';
import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import Foooter from './Foooter';
import './App.css';


function Dashboard() {

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
  const size = React.useContext(ResponsiveContext);

  const [notes, setNotes] = useState([{
      Device_Requestor: '',
      Device_PR_No: '',
      Device_PO_No: '',

      Device_Ship_Date: '',
      Device_MAWB: '',
      Device_Tracking_No: '',
      Device_Ship_Ref_No: '',
      Device_Carrier: '',
      Device_Arrival_Date: '',
      Device_Mode: '',
      Device_CAN_Date: '',
      Device_IGM: '',
      Device_IGM_Date: '',
      Device_Inco_Term: '',

      Device_CHA: '',
      Device_CTH: '',
      Device_Rate_Of_Duty: '',
      Device_Ex_Rate: '',
      Device_Type_of_Shipment: '',
      Device_BOE_Field_Date: '',
      
      Device_Supplier_Co: '',
      Device_Country: '',
      Device_Ship_To: '',
      Device_Username: '',
      Device_PO_Number: '',
      Device_Invoice_Terms: '',
      Device_Invoice_No: '',
      Device_Invoice_Date: '',
      Device_Invoice_Value: '',
      Deivce_HPE_Heart_Order_Number: '',
      Device_Product_Description: '',
      Device_Model_Number: '',
      Device_Serial_Number: '',
      Device_Quantity: '',
      Device_Unit_value: '',
      Device_Invoice_value: '',
      Device_Invoice_Currency: '',

      Device_Import_Approval_No: '',
      Device_Approval_Date: '',
      Device_BOE_No: '',
      Device_BOE_Date: '',
      Device_Bond_No: '',
      Device_Bond_Date: '',
      Device_CIF_Value: '',
      Device_Assessable_Value: '',
      Device_Duty_Forgone: '',
      Device_IGST_Assv_Value: '',
      Device_IGST_Duty_Exmpt: '',
      Device_Location: '',
      Device_Cleared_Date: '',
      Device_E_way_Bill: '',
      Device_E_way_Bill_Date: '',
      Device_DC_No: '',
      Device_DC_Date: '',
      Device_Import_Month: '',
      Device_Import_Year: '',
      Device_Shipping_Docs: '',
      Device_Asset_Age: '',
      Device_Bond_Status: '',

      Device_Invoice_Processed: '',
      Device_Scanned_Date: '',
      Device_WOID: '',
      Device_Payment_Due_Date: '',
      Device_Remark: '',

      Device_Asset_Bond: '',
      Device_Removal_Purpose: '',
      Device_Approval_By: '',
      Device_Asset_Removal_Data: '',
      Device_Asset_Description: '',
      Device_Asset_Removal_Serial_No: '',
      Device_Removal_As_Per_Customs: ''
      
  }])

  useEffect(() => {
      fetch("/dashboard").then(res => {
        if(res.ok) {
          return res.json()
        }
      }).then(jsonRes => setNotes(jsonRes));
  })

  // console.log(setNotes);

  return(
      <>
      <Grommet theme={theme}>
      <Header background="brand">
          <Box direction="row" gap="small" pad="medium">
              <Hpe color="White"/>
              <Text weight="bold">HPE</Text>
              <Text>Dashboard</Text>
          </Box>
      </Header>  
      
      <Box alignSelf="center"  border={{ color: 'brand', size: 'medium' }} >
        <Box>
            <Button icon={<Previous />} alignSelf="start" onClick={() => history.goBack()}/>
            <Heading margin={{left: 'medium'}} >Dashboard</Heading>
      </Box> 

      <Box direction="column" alignSelf="start" gap="medium" pad="medium"> 
        <Box direction={size !== 'small' ? 'row' : 'column'} align="center" gap="small" >
          <Button label="Filter" icon={<Filter />} reverse="true" />
        </Box>
            <Box justify="center">
              <Box direction="row-responsive" className="div">
            
              <Table className="table">
                <TableHeader className="div2">
                  <TableCell>Requestor</TableCell>
                  <TableCell>PR Number</TableCell>
                  <TableCell>PO Number</TableCell>

                  <TableCell>Shipment Date</TableCell>
                  <TableCell>MAWB Number</TableCell>
                  <TableCell>Tracking No</TableCell>
                  <TableCell>Ship Ref No</TableCell>
                  <TableCell>Carrier</TableCell>
                  <TableCell>Arrival Date</TableCell>
                  <TableCell>Mode</TableCell>
                  <TableCell>CAN Date</TableCell>
                  <TableCell>IGM</TableCell>
                  <TableCell>IGM Date</TableCell>
                  <TableCell>Inco Term</TableCell>

                  <TableCell>CHA</TableCell>
                  <TableCell>CTH</TableCell>
                  <TableCell>Rate Of Duty</TableCell>
                  <TableCell>Exchange Rate</TableCell>
                  <TableCell>Type of Shipment</TableCell>
                  <TableCell>BOE Field Date</TableCell>

                  <TableCell>Supplier Co.</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Ship To</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>PO Number</TableCell>
                  <TableCell>Invoice Terms</TableCell>
                  <TableCell>Invoice No.</TableCell>
                  <TableCell>Invoice Date</TableCell>
                  <TableCell>Invoice Value(USD)</TableCell>
                  <TableCell>HPE Heart Order Number</TableCell>
                  <TableCell>Product Description</TableCell>
                  <TableCell>Port/Modal Number</TableCell>
                  <TableCell>Serial Number</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Unit Value</TableCell>
                  <TableCell>Invoice Value</TableCell>
                  <TableCell>Invoice Currency</TableCell>

                  <TableCell>Import Approval No.</TableCell>
                  <TableCell>Approval Date</TableCell>
                  <TableCell>BOE No.</TableCell>
                  <TableCell>BOE Date</TableCell>
                  <TableCell>Bond Number</TableCell>
                  <TableCell>Bond date</TableCell>
                  <TableCell>CIF Value</TableCell>
                  <TableCell>Assessable Value</TableCell>
                  <TableCell>Duty Forgone</TableCell>
                  <TableCell>IGST Assv Value</TableCell>
                  <TableCell>IGST Duty Exempt</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Cleared Date</TableCell>
                  <TableCell>E-way Bill</TableCell>
                  <TableCell>E-way Bill Date</TableCell>
                  <TableCell>DC No.</TableCell>
                  <TableCell>DC Date</TableCell>
                  <TableCell>Import Month</TableCell>
                  <TableCell>Import Year</TableCell>
                  <TableCell>Original Shipping Docs-Received or Not</TableCell>
                  <TableCell>Asset Age</TableCell>
                  <TableCell>Bond Status</TableCell>

                  <TableCell>Invoice Proceed By</TableCell>
                  <TableCell>Invoice Scanned Date</TableCell>
                  <TableCell>WOID#</TableCell>
                  <TableCell>Payment Due Date</TableCell>
                  <TableCell>Remark</TableCell>

                  <TableCell>Whether Asset is Debounded or Not</TableCell>
                  <TableCell>Purpose of Removal</TableCell>
                  <TableCell>Approved By</TableCell>
                  <TableCell>Asset Removal Date from Data Center</TableCell>
                  <TableCell>Asset Description</TableCell>
                  <TableCell>Removal of Asset - Serial No.</TableCell>
                  <TableCell>Types of Removal as per customs</TableCell>

                </TableHeader>
                {notes.map(note => 
                <TableRow>
                  <TableCell>{note.Device_Requestor}</TableCell>
                  <TableCell>{note.Device_PR_No}</TableCell>
                  <TableCell>{note.Device_PO_No}</TableCell>

                  <TableCell>{note.Device_Ship_Date}</TableCell>
                  <TableCell>{note.Device_MAWB}</TableCell>
                  <TableCell>{note.Device_Tracking_No}</TableCell>
                  <TableCell>{note.Device_Ship_Ref_No}</TableCell>
                  <TableCell>{note.Device_Carrier}</TableCell>
                  <TableCell>{note.Device_Arrival_Date}</TableCell>
                  <TableCell>{note.Device_Mode}</TableCell>
                  <TableCell>{note.Device_CAN_Date}</TableCell>
                  <TableCell>{note.Device_IGM}</TableCell>
                  <TableCell>{note.Device_IGM_Date}</TableCell>
                  <TableCell>{note.Device_Inco_Term}</TableCell>

                  <TableCell>{note.Device_CHA}</TableCell>
                  <TableCell>{note.Device_CTH}</TableCell>
                  <TableCell>{note.Device_Rate_Of_Duty}</TableCell>
                  <TableCell>{note.Device_Ex_Rate}</TableCell>
                  <TableCell>{note.Device_Type_of_Shipment}</TableCell>
                  <TableCell>{note.Device_BOE_Field_Date}</TableCell>

                  <TableCell>{note.Device_Supplier_Co}</TableCell>
                  <TableCell>{note.Device_Country}</TableCell>
                  <TableCell>{note.Device_Ship_To}</TableCell>
                  <TableCell>{note.Device_Username}</TableCell>
                  <TableCell>{note.Device_PO_Number}</TableCell>
                  <TableCell>{note.Device_Invoice_Terms}</TableCell>
                  <TableCell>{note.Device_Invoice_No}</TableCell>
                  <TableCell>{note.Device_Invoice_Date}</TableCell>
                  <TableCell>{note.Device_Invoice_Value}</TableCell>
                  <TableCell>{note.Deivce_HPE_Heart_Order_Number}</TableCell>
                  <TableCell>{note.Device_Product_Description}</TableCell>
                  <TableCell>{note.Device_Model_Number}</TableCell>
                  <TableCell>{note.Device_Serial_Number}</TableCell>
                  <TableCell>{note.Device_Quantity}</TableCell>
                  <TableCell>{note.Device_Unit_value}</TableCell>
                  <TableCell>{note.Device_Invoice_value}</TableCell>
                  <TableCell>{note.Device_Invoice_Currency}</TableCell>

                  <TableCell>{note.Device_Import_Approval_No}</TableCell>
                  <TableCell>{note.Device_Approval_Date}</TableCell>
                  <TableCell>{note.Device_BOE_No}</TableCell>
                  <TableCell>{note.Device_BOE_Date}</TableCell>
                  <TableCell>{note.Device_Bond_No}</TableCell>
                  <TableCell>{note.Device_Bond_Date}</TableCell>
                  <TableCell>{note.Device_CIF_Value}</TableCell>
                  <TableCell>{note.Device_Assessable_Value}</TableCell>
                  <TableCell>{note.Device_Duty_Forgone}</TableCell>
                  <TableCell>{note.Device_IGST_Assv_Value}</TableCell>
                  <TableCell>{note.Device_IGST_Duty_Exmpt}</TableCell>
                  <TableCell>{note.Device_Location}</TableCell>
                  <TableCell>{note.Device_Cleared_Date}</TableCell>
                  <TableCell>{note.Device_E_way_Bill}</TableCell>
                  <TableCell>{note.Device_E_way_Bill_Date}</TableCell>
                  <TableCell>{note.Device_DC_No}</TableCell>
                  <TableCell>{note.Device_DC_Date}</TableCell>
                  <TableCell>{note.Device_Import_Month}</TableCell>
                  <TableCell>{note.Device_Import_Year}</TableCell>
                  <TableCell>{note.Device_Shipping_Docs}</TableCell>
                  <TableCell>{note.Device_Asset_Age}</TableCell>
                  <TableCell>{note.Device_Bond_Status}</TableCell>

                  <TableCell>{note.Device_Invoice_Processed}</TableCell>
                  <TableCell>{note.Device_Scanned_Date}</TableCell>
                  <TableCell>{note.Device_WOID}</TableCell>
                  <TableCell>{note.Device_Payment_Due_Date}</TableCell>
                  <TableCell>{note.Device_Remark}</TableCell>

                  <TableCell>{note.Device_Asset_Bond}</TableCell>
                  <TableCell>{note.Device_Removal_Purpose}</TableCell>
                  <TableCell>{note.Device_Approval_By}</TableCell>
                  <TableCell>{note.Device_Asset_Removal_Data}</TableCell>
                  <TableCell>{note.Device_Asset_Description}</TableCell>
                  <TableCell>{note.Device_Asset_Removal_Serial_No}</TableCell>
                  <TableCell>{note.Device_Removal_As_Per_Customs}</TableCell>

                </TableRow>
                )}
              </Table>
              </Box>

            </Box>  
        </Box>
      </Box>
      <Foooter />
    </Grommet>
  </>
  );
}

export default Dashboard;
