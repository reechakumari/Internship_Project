const mongoose = require("mongoose");

const notesSchema = {
    Device_Requestor: String,
    Device_PR_No: Number,
    Device_PO_No: String,

    Device_Ship_Date: String,
    Device_MAWB: Number,
    Device_Tracking_No: String,
    Device_Ship_Ref_No: String,
    Device_Carrier: String,
    Device_Arrival_Date: String,
    Device_Mode: String,
    Device_CAN_Date: String,
    Device_IGM: String,
    Device_IGM_Date: String,
    Device_Inco_Term: String,

    Device_CHA: String,
    Device_CTH: String,
    Device_Rate_Of_Duty: String,
    Device_Ex_Rate: String,
    Device_Type_of_Shipment: String,
    Device_BOE_Field_Date: String,

    Device_Supplier_Co: String,
    Device_Country: String,
    Device_Ship_To: String,
    Device_Username: String,
    Device_PO_Number: String,
    Device_Invoice_Terms: String,
    Device_Invoice_No: String,
    Device_Invoice_Date: String,
    Device_Invoice_Value: String,
    Deivce_HPE_Heart_Order_Number: String,
    Device_Product_Description: String,
    Device_Model_Number: String,
    Device_Serial_Number: String,
    Device_Quantity: Number,
    Device_Unit_value: String,
    Device_Invoice_value: String,
    Device_Invoice_Currency: String,

    Device_Import_Approval_No: String,
    Device_Approval_Date: String,
    Device_BOE_No: String,
    Device_BOE_Date: String,
    Device_Bond_No: String,
    Device_Bond_Date: String,
    Device_CIF_Value: String,
    Device_Assessable_Value: String,
    Device_Duty_Forgone: String,
    Device_IGST_Assv_Value: String,
    Device_IGST_Duty_Exmpt: String,
    Device_Location: String,
    Device_Cleared_Date: String,
    Device_E_way_Bill: String,
    Device_E_way_Bill_Date: String,
    Device_DC_No: String,
    Device_DC_Date: String,
    Device_Import_Month: String,
    Device_Import_Year: String,
    Device_Shipping_Docs: String,
    Device_Asset_Age: String,
    Device_Bond_Status: String,

    Device_Invoice_Processed: String,
    Device_Scanned_Date: String,
    Device_WOID: String,
    Device_Payment_Due_Date: String,
    Device_Remark: String,

    Device_Asset_Bond: String,
    Device_Removal_Purpose: String,
    Device_Approval_By: String,
    Device_Asset_Removal_Data: String,
    Device_Asset_Description: String,
    Device_Asset_Removal_Serial_No: String,
    Device_Removal_As_Per_Customs: String

}

const Module1 = mongoose.model("Module1", notesSchema);

module.exports = Module1;


//require mongoose to create schema
//create schema name alled newSchema
//and create model i.e. mongoose model and return Module1(this is our collection name)