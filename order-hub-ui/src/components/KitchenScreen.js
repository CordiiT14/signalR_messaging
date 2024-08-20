import React from "react";
import { Card, CardBody,  CardTitle} from "reactstrap";
import TableNotification from "./TableNotification";
import OrderNotification from "./OrderNotification";

const KitchenScreen = ({orders, tableNotifications}) => {
    return(
        <Card>
            <CardBody>
                <CardTitle tag="h5">Kitchen Screen</CardTitle>
            </CardBody>
                <TableNotification notifications={tableNotifications}></TableNotification>
            <CardBody>
            <OrderNotification notifications={orders}></OrderNotification>
            </CardBody>
        </Card>
    )

};

export default KitchenScreen;
