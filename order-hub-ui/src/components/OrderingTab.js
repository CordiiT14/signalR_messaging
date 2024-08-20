import React, {useState} from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Button, Card, CardBody, CardTitle, Form, Input, Label, UncontrolledAccordion, UncontrolledCollapse} from "reactstrap";
import { TABLENUMBERS } from "../common/constants";
import OrderForm from "./OrderForm";
import { ORDERTYPE } from "../common/constants";


const OrderingTab = () => {
    const [newTableNotification, setNewTableNotification] = useState({});
    const [newOrderNotification, setNewOrderNotification] = useState({})

    
    const sendNewTableNotification = async () =>{
        try {
            await fetch("https://localhost:7168/table", {
                method: "Post",
                body: JSON.stringify(newTableNotification),
                headers:{
                    "content-type": "application/json"
                }
            })
        }catch (e){
            console.log(e);
        }
    };

    const sendNewOrderNotification = async (orderType) => {
        var order = { tableNumber : newOrderNotification.tableNumber, items : newOrderNotification.items.split(",")};
        if(orderType === ORDERTYPE.Drinks){
            await fetch("https://localhost:7168/drinks", {
                method: "Post",
                body: JSON.stringify(order),
                headers:{
                    "content-type": "application/json"
                }
            })
        } 

        if(orderType === ORDERTYPE.Food){
            await fetch("https://localhost:7168/food", {
                method: "Post",
                body: JSON.stringify(order),
                headers:{
                    "content-type": "application/json"
                }
            })
        }
    }

    const onNewTableFormChange = (key, value) => {
        setNewTableNotification({...newTableNotification, [key] : value});
    }

    const onNewOrderFormChange = (key, value) => {
        setNewOrderNotification({...newOrderNotification, [key]: value})
    }

    return(
        <Card>
            <CardBody>
                <CardTitle tag="h5" >Hostess / FOH </CardTitle>
            </CardBody>
            <CardBody>
                
            </CardBody>
            <CardBody>
               <UncontrolledAccordion>
                <AccordionItem >
                    <AccordionHeader targetId="1">New Table</AccordionHeader>
                    <AccordionBody accordionId="1">
                    <Form>
                        <Label for="table number">Table Number:</Label>
                        <Input onChange={(event) => onNewTableFormChange("tableNumber", event.target.value)} type="select">
                            {TABLENUMBERS.map((number, index) => {
                                return <option key={index} value={number}>{number}</option>
                            })}
                        </Input>
                        <Label>Covers:</Label>
                        <Input  onChange={(event) => onNewTableFormChange("covers", event.target.value)} type="number"></Input>
                        <Label>Is Walk-In:</Label>
                        <Input onChange={(event) => onNewTableFormChange("isWalkIn", event.target.value === "true" ? true : false)} type="select" defaultValue={""}>
                            <option value="" disabled>select option</option>
                            <option value={true}>yes</option>
                            <option value={false}>no</option>
                        </Input>
                        <Label>Drinks only:</Label>
                        <Input onChange={(event) => onNewTableFormChange("forDrinksOnly", event.target.value === "true" ? true : false)} type="select" defaultValue={""}>
                            <option value="" disabled>select option</option>
                            <option value={true}>yes</option>
                            <option value={false}>no</option>
                        </Input>
                        <Button onClick={sendNewTableNotification}>Send</Button>
                        </Form>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem >
                    <AccordionHeader targetId="2">Order</AccordionHeader>
                    <AccordionBody accordionId="2">
                            {OrderForm(onNewOrderFormChange)}
                            <Button onClick={()=> sendNewOrderNotification(ORDERTYPE.Drinks)}>Order Drinks</Button>
                            <Button onClick={()=> sendNewOrderNotification(ORDERTYPE.Food)}>Order Food</Button>
                    </AccordionBody>
                </AccordionItem>
               </UncontrolledAccordion>
                    
                            
            </CardBody>
        </Card>
    )
};

export default OrderingTab;

