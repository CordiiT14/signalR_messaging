import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import TableNotification from "./TableNotification";

const BarScreen = ({tableNotifications}) => {

    return(
        <Card>
            <CardBody>
                <CardTitle tag="h5">Bar Screen</CardTitle>
            </CardBody>
            <TableNotification notifications={tableNotifications}></TableNotification>
            <CardBody>
                <CardTitle>Orders:</CardTitle>
            </CardBody>
        </Card>
    )
};

export default BarScreen;