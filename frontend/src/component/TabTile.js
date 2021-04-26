import { Box, Button, Header, Heading, Text, Tab, Tabs,Form, FormField, TextInput, Grommet } from 'grommet';
import { Hpe, Previous } from 'grommet-icons';
import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import Foooter from './Foooter';
import axios from "axios";
// import Formm from './Formm';
// import FormArr from './FormArr';

export default function TabTile(props) {
    
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

  const[input, setInput]= useState({
    Device_Requestor: "",
    Device_PR_No: "",
    Device_PO_No:"",

    Device_Ship_Date: "",
    Device_MAWB: "",
    Device_Tracking_No: "",
    Device_Ship_Ref_No: "",
    Device_Carrier: "",
    Device_Arrival_Date: "",
    Device_Mode: "",
    Device_CAN_Date: "",
    Device_IGM: "",
    Device_IGM_Date: "",
    Device_Inco_Term: "",

    Device_CHA: "",
    Device_CTH: "",
    Device_Rate_Of_Duty: "",
    Device_Ex_Rate: "",
    Device_Type_of_Shipment: "",
    Device_BOE_Field_Date: "",

    Device_Supplier_Co: "",
    Device_Country: "",
    Device_Ship_To: "",
    Device_Username: "",
    Device_PO_Number: "",
    Device_Invoice_Terms: "",
    Device_Invoice_No: "",
    Device_Invoice_Date: "",
    Device_Invoice_Value: "",
    Deivce_HPE_Heart_Order_Number: "",
    Device_Product_Description: "",
    Device_Model_Number: "",
    Device_Serial_Number: "",
    Device_Quantity: "",
    Device_Unit_value: "",
    Device_Invoice_value: "",
    Device_Invoice_Currency: "",

    Device_Import_Approval_No: "",
    Device_Approval_Date: "",
    Device_BOE_No: "",
    Device_BOE_Date: "",
    Device_Bond_No: "",
    Device_Bond_Date: "",
    Device_CIF_Value: "",
    Device_Assessable_Value: "",
    Device_Duty_Forgone: "",
    Device_IGST_Assv_Value: "",
    Device_IGST_Duty_Exmpt: "",
    Device_Location: "",
    Device_Cleared_Date: "",
    Device_E_way_Bill: "",
    Device_E_way_Bill_Date: "",
    Device_DC_No: "",
    Device_DC_Date: "",
    Device_Import_Month: "",
    Device_Import_Year: "",
    Device_Shipping_Docs: "",
    Device_Asset_Age: "",
    Device_Bond_Status: "",

    Device_Invoice_Processed: "",
    Device_Scanned_Date: "",
    Device_WOID: "",
    Device_Payment_Due_Date: "",
    Device_Remark: "",

    Device_Asset_Bond: "",
    Device_Removal_Purpose: "",
    Device_Approval_By: "",
    Device_Asset_Removal_Data: "",
    Device_Asset_Description: "",
    Device_Asset_Removal_Serial_No: "",
    Device_Removal_As_Per_Customs: ""

  })

  //This is to store to the localhost...
  useEffect(() => {
    const data = localStorage.getItem("my-form-data");
    if(data) {
      setInput(JSON.parse(data));
    }
  }, []);

  useEffect( () => {
    localStorage.setItem("my-form-data", JSON.stringify(input));
  });
  
  //This function is on the field to manage the changes
  const handleChange = (e) => {
    const {name, value} = e.target;
  
    setInput(preInput => {
      return {
        ...preInput,
        [name]: value
      }
    })
  }
  
  //This function is used to manage the 
  function handleClick(e){
    e.preventDefault();
    const newNote ={
      Device_Requestor: input.Device_Requestor,
      Device_PR_No: input.Device_PR_No,
      Device_PO_No: input.Device_PO_No,

      Device_Ship_Date: input.Device_Ship_Date,
      Device_MAWB: input.Device_MAWB,
      Device_Tracking_No: input.Device_Tracking_No,
      Device_Ship_Ref_No: input.Device_Ship_Ref_No,
      Device_Carrier: input.Device_Carrier,
      Device_Arrival_Date: input.Device_Arrival_Date,
      Device_Mode: input.Device_Mode,
      Device_CAN_Date: input.Device_CAN_Date,
      Device_IGM: input.Device_IGM,
      Device_IGM_Date: input.Device_IGM_Date,
      Device_Inco_Term: input.Device_Inco_Term,

      Device_CHA: input.Device_CHA,
      Device_CTH: input.Device_CTH,
      Device_Rate_Of_Duty: input.Device_Rate_Of_Duty,
      Device_Ex_Rate: input.Device_Ex_Rate,
      Device_Type_of_Shipment: input.Device_Type_of_Shipment,
      Device_BOE_Field_Date: input.Device_BOE_Field_Date,

      Device_Supplier_Co: input.Device_Supplier_Co,
      Device_Country: input.Device_Country,
      Device_Ship_To: input.Device_Ship_To,
      Device_Username: input.Device_Username,
      Device_PO_Number: input.Device_PO_Number,
      Device_Invoice_Terms: input.Device_Invoice_Terms,
      Device_Invoice_No: input.Device_Invoice_No,
      Device_Invoice_Date: input.Device_Invoice_Date,
      Device_Invoice_Value: input.Device_Invoice_Value,
      Deivce_HPE_Heart_Order_Number: input.Deivce_HPE_Heart_Order_Number,
      Device_Product_Description: input.Device_Product_Description,
      Device_Model_Number: input.Device_Model_Number,
      Device_Serial_Number: input.Device_Serial_Number,
      Device_Quantity: input.Device_Quantity,
      Device_Unit_value: input.Device_Unit_value,
      Device_Invoice_value: input.Device_Invoice_value,
      Device_Invoice_Currency: input.Device_Invoice_Currency,

      Device_Import_Approval_No: input.Device_Import_Approval_No,
      Device_Approval_Date: input.Device_Approval_Date,
      Device_BOE_No: input.Device_BOE_No,
      Device_BOE_Date: input.Device_BOE_Date,
      Device_Bond_No: input.Device_Bond_No,
      Device_Bond_Date: input.Device_Bond_Date,
      Device_CIF_Value: input.Device_CIF_Value,
      Device_Assessable_Value: input.Device_Assessable_Value,
      Device_Duty_Forgone: input.Device_Duty_Forgone,
      Device_IGST_Assv_Value: input.Device_IGST_Assv_Value,
      Device_IGST_Duty_Exmpt: input.Device_IGST_Duty_Exmpt,
      Device_Location: input.Device_Location,
      Device_Cleared_Date: input.Device_Cleared_Date,
      Device_E_way_Bill: input.Device_E_way_Bill,
      Device_E_way_Bill_Date: input.Device_E_way_Bill_Date,
      Device_DC_No: input.Device_DC_No,
      Device_DC_Date: input.Device_DC_Date,
      Device_Import_Month: input.Device_Import_Month,
      Device_Import_Year: input.Device_Import_Year,
      Device_Shipping_Docs: input.Device_Shipping_Docs,
      Device_Asset_Age: input.Device_Asset_Age,
      Device_Bond_Status: input.Device_Bond_Status,

      Device_Invoice_Processed: input.Device_Invoice_Processed,
      Device_Scanned_Date: input.Device_Scanned_Date,
      Device_WOID: input.Device_WOID,
      Device_Payment_Due_Date: input.Device_Payment_Due_Date,
      Device_Remark: input.Device_Remark,

      Device_Asset_Bond: input.Device_Asset_Bond,
      Device_Removal_Purpose: input.Device_Removal_Purpose,
      Device_Approval_By: input.Device_Approval_By,
      Device_Asset_Removal_Data: input.Device_Asset_Removal_Data,
      Device_Asset_Description: input.Device_Asset_Description,
      Device_Asset_Removal_Serial_No: input.Device_Asset_Removal_Serial_No,
      Device_Removal_As_Per_Customs: input.Device_Removal_As_Per_Customs

    }

    axios.post('http://localhost:3001/tabtile', newNote);
    alert("I'm Clicked");
    console.log(newNote);
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
      <Box>
        <Button icon={<Previous />} alignSelf="start" onClick={() => history.goBack()}/>
        <Heading margin={{left: 'medium'}} >Customs Annexure</Heading>
      </Box>
      
      <Box direction="row" alignSelf="center" pad="medium"> 
          <Tabs gap="small">
              <Tab title="Procurement" tabIndex="">
                  <Box justify="center">
                      <Box direction="column" alignSelf="center"  border={{ color: 'brand', size: 'small' }} pad="medium"> 
                      <Form key={1} >
                        <FormField label="Requestor" width="large">
                        <TextInput placeholder="Enter Requestor" type="text" name="Device_Requestor" value={input.Device_Requestor} onChange={handleChange}  /> 
                        </FormField>
                        <FormField label="PR Number" width="large">
                        <TextInput placeholder="Enter PR Number" type="number" name="Device_PR_No" value={input.Device_PR_No} onChange={handleChange}  /> 
                        </FormField>
                        <FormField label="PO Number" width="large">
                        <TextInput placeholder="Enter PO Number" type="text" name="Device_PO_No" value={input.Device_PO_No} onChange={handleChange}  />
                        </FormField>
                        <Box  direction="row" justify="end" pad="small" gap="small" alignSelf="center">
                            <Button key={1} type="submit" alignSelf="center" primary label="Save" onClick={handleClick} />
                        </Box>
                        </Form>
                      </Box> 
                  </Box>
              </Tab>
                  
              <Tab title="Forwarder">
                  <Box justify="center">
                      <Box direction="column" alignSelf="center"  border={{ color: 'brand', size: 'small' }} pad="large"> 
                      <Form key={2}>
                      <FormField label="Ship Date" width="large">
                          <TextInput type="date" name="Device_Ship_Date" value={input.Device_Ship_Date} onChange={handleChange}  />
                      </FormField>
                      <FormField label="MAWB">
                          <TextInput placeholder="Enter MAWB" type="number" name="Device_MAWB" value={input.Device_MAWB} onChange={handleChange} />
                      </FormField>
                      <FormField label="Tracking Number (HAWB/ BL)">
                          <TextInput placeholder="Enter Tracking Number(HAWB/ BL)" type="text" name="Device_Tracking_No" value={input.Device_Tracking_No} onChange={handleChange} />
                      </FormField>
                      <FormField label="Ship Ref No.">
                          <TextInput placeholder="Enter Ship Ref No. " type="text" name="Device_Ship_Ref_No" value={input.Device_Ship_Ref_No} onChange={handleChange} />
                      </FormField>
                      <FormField label="Carrier">
                          <TextInput placeholder="Enter Carrier " type="text" name="Device_Carrier" value={input.Device_Carrier} onChange={handleChange} />
                      </FormField>
                      <FormField label="Arrival Date">
                          <TextInput type="date" name="Device_Arrival_Date" value={input.Device_Arrival_Date} onChange={handleChange} />
                      </FormField>
                      <FormField label="Mode (Courier/Cargo)">
                        <TextInput placeholder="Select Mode" name="Device_Mode" value={input.Device_Mode} onChange={handleChange} />
                      </FormField>
                      <FormField label="CAN Date">
                          <TextInput type="date" name="Device_CAN_Date" value={input.Device_CAN_Date} onChange={handleChange} />
                      </FormField>
                      <FormField label="IGM#">
                          <TextInput placeholder="Enter IGM#" name="Device_IGM" value={input.Device_IGM} onChange={handleChange} />
                      </FormField>
                      <FormField label="IGM Date">
                          <TextInput type="date" name="Device_IGM_Date" value={input.Device_IGM_Date} onChange={handleChange} />
                      </FormField>
                      <FormField label="Inco-Term(FOB/CIF/EXW/DDP/DAT)">
                          <TextInput placeholder="Select Inco-Term" name="Device_Inco_Term" value={input.Device_Inco_Term} onChange={handleChange} />
                      </FormField>
                      <Box  direction="row" justify="end" pad="small" gap="small" alignSelf="center">
                      <Button key={2} type="submit" alignSelf="center" primary label="Save" onClick={handleClick} />
                      </Box>
                      </Form>
                      </Box>
                  </Box> 
              </Tab>


              <Tab title="CHA">
                  <Box justify="center">
                      <Box direction="column" alignSelf="center"  border={{ color: 'brand', size: 'small' }} pad="medium"> 
                      <Form key={3}>
                          <FormField label="CHA" width="large">
                          <TextInput placeholder="Enter CHA" name="Device_CHA" value={input.Device_CHA} onChange={handleChange} />
                          </FormField>
                          <FormField label="CTH">
                          <TextInput placeholder="Enter CTH" type="number" name="Device_CTH" value={input.Device_CTH} onChange={handleChange}/>
                          </FormField>
                          <FormField label="Rate of Duty">
                          <TextInput placeholder="Enter Rate of Duty" name="Device_Rate_Of_Duty" value={input.Device_Rate_Of_Duty} onChange={handleChange} />
                          </FormField>
                          <FormField label="Ex-Rate">
                          <TextInput name="Device_Ex_Rate" value={input.Device_Ex_Rate} onChange={handleChange} />
                          </FormField>
                          <FormField label="Type of Shipment(FOC/ORP/LOAN)">
                          <TextInput placeholder="Select Type of Shipment" name="Device_Type_of_Shipment" value={input.Device_Type_of_Shipment} onChange={handleChange} />
                          </FormField>
                          <FormField label="BOE Field Date">
                          <TextInput type="date" name="Device_BOE_Field_Date" value={input.Device_BOE_Field_Date} onChange={handleChange} />
                          </FormField>
                          <Box  direction="row" justify="end" pad="small" gap="small" alignSelf="center">
                          <Button key={3} type="submit" alignSelf="center" primary label="Save" onClick={handleClick} />
                          </Box>
                      </Form>
                      </Box> 
                  </Box>
              </Tab>

              <Tab title="Supplier & Product">
                  <Box justify="center">
                      <Box direction="column" alignSelf="center"  border={{ color: 'brand', size: 'small' }} pad="medium"> 
                      <Form key={4}>
                          <FormField label="Supplier. Co." width="large">
                          <TextInput placeholder="Enter Supplier. Co." name="Device_Supplier_Co" value={input.Device_Supplier_Co} onChange={handleChange} />
                          </FormField>
                          <FormField label="Country">
                          <TextInput placeholder="Enter Country" name="Device_Country" value={input.Device_Country} onChange={handleChange} />
                          </FormField>
                          <FormField label="Ship To">
                          <TextInput placeholder="Enter Ship To" name="Device_Ship_To" value={input.Device_Ship_To} onChange={handleChange} />
                          </FormField>
                          <FormField label="Username">
                          <TextInput placeholder="Enter Username"  type="email" name="Device_Username" value={input.Device_Username} onChange={handleChange}/>
                          </FormField>
                          <FormField label="PO Number">
                          <TextInput placeholder="Enter PO Number" name="Device_PO_Number" value={input.Device_PO_Number} onChange={handleChange} />
                          </FormField>
                          <FormField label="Invoice Terms- ORP,FOC">
                          <TextInput placeholder="Select Invoice Terms" name="Device_Invoice_Terms" value={input.Device_Invoice_Terms} onChange={handleChange}  />
                          </FormField>
                          <FormField label="Invoice No.">
                          <TextInput placeholder="Enter Invoice No." name="Device_Invoice_No" value={input.Device_Invoice_No} onChange={handleChange} />
                          </FormField>
                          <FormField label="Invoice Date">
                          <TextInput type="date" name="Device_Invoice_Date" value={input.Device_Invoice_Date} onChange={handleChange} />
                          </FormField>
                          <FormField label="Invoice Value(USD)">
                          <TextInput placeholder="Enter Invoice Value(USD)" name="Device_Invoice_Value" value={input.Device_Invoice_Value} onChange={handleChange} />
                          </FormField>
                          <FormField label="HPE Heart Order Number">
                          <TextInput placeholder="Enter HPE Heart Order Number" name="Deivce_HPE_Heart_Order_Number" value={input.Deivce_HPE_Heart_Order_Number} onChange={handleChange}/>
                          </FormField>
                          <FormField label="Product Description">
                          <TextInput placeholder="Enter Description" name="Device_Product_Description" value={input.Device_Product_Description} onChange={handleChange} />
                          </FormField>
                          <FormField label="Port/Modal Number">
                          <TextInput placeholder="Enter Port/Modal Number" name="Device_Model_Number" value={input.Device_Model_Number} onChange={handleChange} />
                          </FormField>
                          <FormField label="Serial Number">
                          <TextInput placeholder="Enter Serial Number" name="Device_Serial_Number" value={input.Device_Serial_Number} onChange={handleChange} />
                          </FormField>
                          <FormField label="Quantity">
                          <TextInput placeholder="Enter Quantity" name="Device_Quantity" value={input.Device_Quantity} onChange={handleChange} />
                          </FormField>
                          <FormField label="Unit Value">
                          <TextInput placeholder="Enter Unit Value" name="Device_Unit_value" value={input.Device_Unit_value} onChange={handleChange} />
                          </FormField>
                          <FormField label="Invoice Value">
                          <TextInput placeholder="Enter Invoice Value" name="Device_Invoice_value" value={input.Device_Invoice_value} onChange={handleChange} />
                          </FormField>
                          <FormField label="Invoice Currency">
                          <TextInput placeholder="Enter Invoice Currencys" name="Device_Invoice_Currency" value={input.Device_Invoice_Currency} onChange={handleChange} />
                          </FormField>
                          <Box  direction="row" justify="end" pad="small" gap="small" alignSelf="center">
                          <Button key={4} type="submit" alignSelf="center" primary label="Save" onClick={handleClick}  />
                          </Box>
                      </Form>
                      </Box> 
                  </Box> 
              </Tab>

              <Tab title="Customs">
                  <Box justify="center">
                      <Box direction="column" alignSelf="center"  border={{ color: 'brand', size: 'small' }} pad="medium"> 
                      <Form key={5}>
                          <FormField label="Import Approval No. (EOU/STPI)" width="large">
                          <TextInput placeholder="Enter Import Approval No. (EOU/STPI)" name="Device_Import_Approval_No" value={input.Device_Import_Approval_No} onChange={handleChange} />
                          </FormField>
                          <FormField label="Approval Date">
                          <TextInput type="date" name="Device_Approval_Date" value={input.Device_Approval_Date} onChange={handleChange} />
                          </FormField>
                          <FormField label="BOE No.">
                          <TextInput placeholder="Enter BOE No." name="Device_BOE_No" value={input.Device_BOE_No} onChange={handleChange} />
                          </FormField>
                          <FormField label="BOE Date">
                          <TextInput type="date" name="Device_BOE_Date" value={input.Device_BOE_Date} onChange={handleChange} />
                          </FormField>
                          <FormField label="Bond Number">
                          <TextInput placeholder="Enter Bond Number" name="Device_Bond_No" value={input.Device_Bond_No} onChange={handleChange} />
                          </FormField>
                          <FormField label="Bond Date">
                          <TextInput type="date" name="Device_Bond_Date" value={input.Device_Bond_Date} onChange={handleChange} />
                          </FormField>
                          <FormField label="CIF Value">
                          <TextInput placeholder="Enter CIF Value" name="Device_CIF_Value" value={input.Device_CIF_Value} onChange={handleChange} />
                          </FormField>
                          <FormField label="Assessable Value">
                          <TextInput placeholder="Enter Assessable Value" name="Device_Assessable_Value" value={input.Device_Assessable_Value} onChange={handleChange} />
                          </FormField>
                          <FormField label="Duty Forgone">
                          <TextInput placeholder="Enter Duty Forgone" name="Device_Duty_Forgone" value={input.Device_Duty_Forgone} onChange={handleChange} />
                          </FormField>
                          <FormField label="IGST Assv Value">
                          <TextInput placeholder="Enter IGST Assv Value" name="Device_IGST_Assv_Value" value={input.Device_IGST_Assv_Value} onChange={handleChange} />
                          </FormField>
                          <FormField label="IGST Duty Exempt">
                          <TextInput placeholder="Enter IGST Duty Exempt" name="Device_IGST_Duty_Exmpt" value={input.Device_IGST_Duty_Exmpt} onChange={handleChange} />
                          </FormField>
                          <FormField label="EOU/STPI Location">
                          <TextInput placeholder="Enter EOU/STPI Location" name="Device_Location" value={input.Device_Location} onChange={handleChange} />
                          </FormField>
                          <FormField label="Cleared Date">
                          <TextInput type="date" name="Device_Cleared_Date" value={input.Device_Cleared_Date} onChange={handleChange} />
                          </FormField>
                          <FormField label="E-way Bill">
                          <TextInput placeholder="Enter E-way Bill" name="Device_E_way_Bill" value={input.Device_E_way_Bill} onChange={handleChange} />
                          </FormField>
                          <FormField label="E-way Bill Date">
                          <TextInput type="date" name="Device_E_way_Bill_Date" value={input.Device_E_way_Bill_Date} onChange={handleChange} />
                          </FormField>
                          <FormField label="DC No.">
                          <TextInput placeholder="Enter DC No." name="Device_DC_No" value={input.Device_DC_No} onChange={handleChange} />
                          </FormField>
                          <FormField label="DC Date">
                          <TextInput type="date" name="Device_DC_Date" value={input.Device_DC_Date} onChange={handleChange} />
                          </FormField>
                          <FormField label="Import Month">
                          <TextInput placeholder="Enter Import Month" name="Device_Import_Month" value={input.Device_Import_Month} onChange={handleChange} />
                          </FormField>
                          <FormField label="Import Year">
                          <TextInput placeholder="Enter Import Year" name="Device_Import_Year" value={input.Device_Import_Year} onChange={handleChange} />
                          </FormField>
                          <FormField label="Original Shipping Docs-Received or Not">
                          <TextInput placeholder="Enter Original Shipping Docs-Received or Not" name="Device_Shipping_Docs" value={input.Device_Shipping_Docs} onChange={handleChange} />
                          </FormField>
                          <FormField label="Asset Age">
                          <TextInput placeholder="Enter Asset Age" name="Device_Asset_Age" value={input.Device_Asset_Age} onChange={handleChange} />
                          </FormField>
                          <FormField label="Bond Status">
                          <TextInput placeholder="Enter Bond Status" name="Device_Bond_Status" value={input.Device_Bond_Status} onChange={handleChange} />
                          </FormField>
                          <Box  direction="row" justify="end" pad="small" gap="small" alignSelf="center">
                          <Button key={5} type="submit" alignSelf="center" primary label="Save" onClick={handleClick} />
                          </Box>
                      </Form>
                      </Box> 
                  </Box> 
              </Tab>

              <Tab title="Invoice Remittance">
                  <Box justify="center">
                      <Box direction="column" alignSelf="center"  border={{ color: 'brand', size: 'small' }} pad="medium"> 
                      <Form key={6}>
                          <FormField label="Invoice Proceed By" width="large">
                          <TextInput placeholder="Enter Invoice Proceed By" name="Device_Invoice_Processed" value={input.Device_Invoice_Processed} onChange={handleChange} />
                          </FormField>
                          <FormField label="Invoice Scanned Date">
                          <TextInput type="date" name="Device_Scanned_Date" value={input.Device_Scanned_Date} onChange={handleChange} />
                          </FormField>
                          <FormField label="WOID#">
                          <TextInput placeholder="Enter WOID#" name="Device_WOID" value={input.Device_WOID} onChange={handleChange} />
                          </FormField>
                          <FormField label="Payment Due Date">
                          <TextInput type="date" name="Device_Payment_Due_Date" value={input.Device_Payment_Due_Date} onChange={handleChange} />
                          </FormField>
                          <FormField label="Remark, if any">
                          <TextInput placeholder="Enter Remark, if any" name="Device_Remark" value={input.Device_Remark} onChange={handleChange} />
                          </FormField>
                          <Box  direction="row" justify="end" pad="small" gap="small" alignSelf="center">
                          <Button key={6} type="submit" alignSelf="center" primary label="Save" onClick={handleClick} />
                          </Box>
                      </Form>
                      </Box> 
                  </Box> 
              </Tab>

              <Tab title="Asset-grave">
                  <Box justify="center">
                      <Box direction="column" alignSelf="center"  border={{ color: 'brand', size: 'small' }} pad="medium"> 
                      <Form key={7}>
                          <FormField label="Whether Asset is Debounded or Not" width="large">
                          <TextInput placeholder="Enter Whether Asset is Debounded or Not" name="Device_Asset_Bond" value={input.Device_Asset_Bond} onChange={handleChange} />
                          </FormField>
                          <FormField label="Purpose of Removal(Description)">
                          <TextInput placeholder="Enter Purpose of Removal(Description)" name="Device_Removal_Purpose" value={input.Device_Removal_Purpose} onChange={handleChange} />
                          </FormField>
                          <FormField label="Approved By">
                          <TextInput placeholder="Enter Approved By" name="Device_Approval_By" value={input.Device_Approval_By} onChange={handleChange} />
                          </FormField>
                          <FormField label="Asset Removal Date from Data Center">
                          <TextInput placeholder="Enter Asset Removal Date from Data Center" name="Device_Asset_Removal_Data" value={input.Device_Asset_Removal_Data} onChange={handleChange} />
                          </FormField>
                          <FormField label="Asset Description">
                          <TextInput placeholder="Enter Asset Description" name="Device_Asset_Description" value={input.Device_Asset_Description} onChange={handleChange} />
                          </FormField>
                          <FormField label="Removal of Asset - Serial No.">
                          <TextInput placeholder="Enter Removal of Asset - Serial No." name="Device_Asset_Removal_Serial_No" value={input.Device_Asset_Removal_Serial_No} onChange={handleChange} />
                          </FormField>
                          <FormField label="Types of Removal as per customs">
                          <TextInput placeholder="Enter Types of Removal as per customs" name="Device_Removal_As_Per_Customs" value={input.Device_Removal_As_Per_Customs} onChange={handleChange} />
                          </FormField>
                          <Box  direction="row" justify="end" pad="small" gap="small" alignSelf="center">
                          <Button key={7} type="submit" alignSelf="center" primary label="Submit" onClick={handleClick} />
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
