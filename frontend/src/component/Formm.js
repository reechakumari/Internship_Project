import {Form, FormField, TextInput } from 'grommet';
import React, { useState } from 'react';

export default function Fomm(props) {
    return(
            <Form key={1} >
                <FormField label={props.label} width="large">
                <TextInput placeholder={props.placeholder} type={props.type} name={props.name}  /> 
                </FormField>
                {/* <FormField label="PR Number" width="large">
                <TextInput placeholder="Enter PR Number" type="number" /> 
                </FormField>
                <FormField label="PO Number" width="large">
                <TextInput placeholder="Enter PO Number" />
                </FormField> */}
            </Form>
    );
}





