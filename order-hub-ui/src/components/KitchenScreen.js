import React, { useEffect } from "react";
import { Card, CardBody,  CardTitle} from "reactstrap";
import TableNotification from "./TableNotification";

const KitchenScreen = (props) => {
    return(
        <Card>
            <CardBody>
                <CardTitle tag="h5">Kitchen Screen</CardTitle>
            </CardBody>
                <TableNotification notifications={props.tableNotifications}></TableNotification>
            <CardBody>
                <CardTitle>Orders:</CardTitle>
            </CardBody>
        </Card>
    )

};

export default KitchenScreen;
