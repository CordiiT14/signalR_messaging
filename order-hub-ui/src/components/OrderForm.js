import React from "react";
import { Form, Label, Input, UncontrolledTooltip } from "reactstrap";
import { TABLENUMBERS } from "../common/constants";

const OrderForm = (onChange) => {

    return(
        <Form>
            <Label for="table number">Table Number:</Label>
                <Input onChange={(event) => onChange("tableNumber", event.target.value)} type="select">
                            {TABLENUMBERS.map((number, index) => {
                                return <option key={index} value={number}>{number}</option>
                            })}
                </Input>
            <Label for="order items">Order: <span id="orderTooltip">*</span></Label> 
            <UncontrolledTooltip target="orderTooltip" placement="right"> Add comma separated list of order items.</UncontrolledTooltip>   
                <Input onChange={(event) => onChange("items", event.target.value)} type="textarea"></Input>
        </Form>
    )
}

export default OrderForm;