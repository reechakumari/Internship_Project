const express = require("express");
const router = express.Router();
const Module1 = require("../models/noteModel");

router.route("/tabtile").post((req,res) => {
    const Device_Requestor= req.body.Device_Requestor;
    const Device_PR_No=req.body.Device_PR_No;
    const Device_PO_No= req.body.Device_PO_No;

    const Device_Ship_Date= req.body.Device_Ship_Date;
    const Device_MAWB= req.body.Device_MAWB;
    const Device_Tracking_No= req.body.Device_Tracking_No;
    const Device_Ship_Ref_No= req.body.Device_Ship_Ref_No;
    const Device_Carrier= req.body.Device_Carrier;
    const Device_Arrival_Date= req.body.Device_Arrival_Date;
    const Device_Mode= req.body.Device_Mode;
    const Device_CAN_Date= req.body.Device_CAN_Date;
    const Device_IGM= req.body.Device_IGM;
    const Device_IGM_Date= req.body.Device_IGM_Date;
    const Device_Inco_Term= req.body.Device_Inco_Term;

    const Device_CHA= req.body.Device_CHA;
    const Device_CTH= req.body.Device_CTH;
    const Device_Rate_Of_Duty= req.body.Device_Rate_Of_Duty;
    const Device_Ex_Rate= req.body.Device_Ex_Rate;
    const Device_Type_of_Shipment= req.body.Device_Type_of_Shipment;
    const Device_BOE_Field_Date= req.body.Device_BOE_Field_Date;

    const Device_Supplier_Co= req.body.Device_Supplier_Co;
    const Device_Country= req.body.Device_Country;
    const Device_Ship_To= req.body.Device_Ship_To;
    const Device_Username= req.body.Device_Username;
    const Device_PO_Number= req.body.Device_PO_Number;
    const Device_Invoice_Terms= req.body.Device_Invoice_Terms;
    const Device_Invoice_No= req.body.Device_Invoice_No;
    const Device_Invoice_Date= req.body.Device_Invoice_Date;
    const Device_Invoice_Value= req.body.Device_Invoice_Value;
    const Deivce_HPE_Heart_Order_Number= req.body.Deivce_HPE_Heart_Order_Number;
    const Device_Product_Description= req.body.Device_Product_Description;
    const Device_Model_Number= req.body.Device_Model_Number;
    const Device_Serial_Number= req.body.Device_Serial_Number;
    const Device_Quantity= req.body.Device_Quantity;
    const Device_Unit_value= req.body.Device_Unit_value;
    const Device_Invoice_value= req.body.Device_Invoice_value;
    const Device_Invoice_Currency= req.body.Device_Invoice_Currency;

    const Device_Import_Approval_No= req.body.Device_Import_Approval_No;
    const Device_Approval_Date= req.body.Device_Approval_Date;
    const Device_BOE_No= req.body.Device_BOE_No;
    const Device_BOE_Date= req.body.Device_BOE_Date;
    const Device_Bond_No= req.body.Device_Bond_No;
    const Device_Bond_Date= req.body.Device_Bond_Date;
    const Device_CIF_Value= req.body.Device_CIF_Value;
    const Device_Assessable_Value= req.body.Device_Assessable_Value;
    const Device_Duty_Forgone= req.body.Device_Duty_Forgone;
    const Device_IGST_Assv_Value= req.body.Device_IGST_Assv_Value;
    const Device_IGST_Duty_Exmpt= req.body.Device_IGST_Duty_Exmpt;
    const Device_Location= req.body.Device_Location;
    const Device_Cleared_Date= req.body.Device_Cleared_Date;
    const Device_E_way_Bill= req.body.Device_E_way_Bill;
    const Device_E_way_Bill_Date= req.body.Device_E_way_Bill_Date;
    const Device_DC_No= req.body.Device_DC_No;
    const Device_DC_Date= req.body.Device_DC_Date;
    const Device_Import_Month= req.body.Device_Import_Month;
    const Device_Import_Year= req.body.Device_Import_Year;
    const Device_Shipping_Docs= req.body.Device_Shipping_Docs;
    const Device_Asset_Age= req.body.Device_Asset_Age;
    const Device_Bond_Status= req.body.Device_Bond_Status;

    const Device_Invoice_Processed= req.body.Device_Invoice_Processed;
    const Device_Scanned_Date= req.body.Device_Scanned_Date;
    const Device_WOID= req.body.Device_WOID;
    const Device_Payment_Due_Date= req.body.Device_Payment_Due_Date;
    const Device_Remark= req.body.Device_Remark;

    const Device_Asset_Bond= req.body.Device_Asset_Bond;
    const Device_Removal_Purpose= req.body.Device_Removal_Purpose;
    const Device_Approval_By= req.body.Device_Approval_By;
    const Device_Asset_Removal_Data= req.body.Device_Asset_Removal_Data;
    const Device_Asset_Description= req.body.Device_Asset_Description;
    const Device_Asset_Removal_Serial_No= req.body.Device_Asset_Removal_Serial_No;
    const Device_Removal_As_Per_Customs= req.body.Device_Removal_As_Per_Customs;

    const newNote = new Module1({
        Device_Requestor,
        Device_PR_No,
        Device_PO_No,

        Device_Ship_Date,
        Device_MAWB,
        Device_Tracking_No,
        Device_Ship_Ref_No,
        Device_Carrier,
        Device_Arrival_Date,
        Device_Mode,
        Device_CAN_Date,
        Device_IGM,
        Device_IGM_Date,
        Device_Inco_Term,

        Device_CHA,
        Device_CTH,
        Device_Rate_Of_Duty,
        Device_Ex_Rate,
        Device_Type_of_Shipment,
        Device_BOE_Field_Date,

        Device_Supplier_Co,
        Device_Country,
        Device_Ship_To,
        Device_Username,
        Device_PO_Number,
        Device_Invoice_Terms,
        Device_Invoice_No,
        Device_Invoice_Date,
        Device_Invoice_Value,
        Deivce_HPE_Heart_Order_Number,
        Device_Product_Description,
        Device_Model_Number,
        Device_Serial_Number,
        Device_Quantity,
        Device_Unit_value,
        Device_Invoice_value,
        Device_Invoice_Currency,

        Device_Import_Approval_No,
        Device_Approval_Date,
        Device_BOE_No,
        Device_BOE_Date,
        Device_Bond_No,
        Device_Bond_Date,
        Device_CIF_Value,
        Device_Assessable_Value,
        Device_Duty_Forgone,
        Device_IGST_Assv_Value,
        Device_IGST_Duty_Exmpt,
        Device_Location,
        Device_Cleared_Date,
        Device_E_way_Bill,
        Device_E_way_Bill_Date,
        Device_DC_No,
        Device_DC_Date,
        Device_Import_Month,
        Device_Import_Year,
        Device_Shipping_Docs,
        Device_Asset_Age,
        Device_Bond_Status,

        Device_Invoice_Processed,
        Device_Scanned_Date,
        Device_WOID,
        Device_Payment_Due_Date,
        Device_Remark,

        Device_Asset_Bond,
        Device_Removal_Purpose,
        Device_Approval_By,
        Device_Asset_Removal_Data,
        Device_Asset_Description,
        Device_Asset_Removal_Serial_No,
        Device_Removal_As_Per_Customs

    });

    newNote.save();
});

router.route("/dashboard").get((req, res) => {
    // res.send('Hello World!')
    Module1.find()
    .then(foundNotes => res.json(foundNotes))
})

module.exports = router;

//this is basically used to get or send data from the database to the frontend
