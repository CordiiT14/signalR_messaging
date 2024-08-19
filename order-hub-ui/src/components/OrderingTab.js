import React, {useState} from "react";
import { Button, Card, CardBody, CardTitle, Form, Input, Label, UncontrolledCollapse} from "reactstrap";

const tableNumbers = [1,2,3,4,5,6,7,8,9,10];

const OrderingTab = () => {
    const [newTableNotification, setNewTableNotification] = useState({});

    
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

    const onNewTableFormChange = (key, value) => {
        setNewTableNotification({...newTableNotification, [key] : value});
    }

    return(
        <Card>
            <CardBody>
                <CardTitle tag="h5" >Hostess / FOH </CardTitle>
            </CardBody>
            <CardBody>
                
            </CardBody>
            <CardBody>
                <Button id="NewTableToggle">New Table</Button>
                <UncontrolledCollapse toggler="#NewTableToggle">
                    <Form>
                    <Label for="table number">Table Number:</Label>
                    <Input onChange={(event) => onNewTableFormChange("tableNumber", event.target.value)} type="select">
                        {tableNumbers.map((number, index) => {
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
                </UncontrolledCollapse>              
            </CardBody>
        </Card>
    )
};

export default OrderingTab;

