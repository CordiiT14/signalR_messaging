import React from "react";
import { CardBody, CardTitle, Table } from "reactstrap";

const OrderNotification = ({notifications}) => {

    return(
        <CardBody>
             <CardTitle>Orders:</CardTitle>
            <Table>
            <thead>
                <tr>
                <th>
                    Table #
                </th>
                <th>
                    Items
                </th>
                <th>
                    Ordered At
                </th>
                </tr>
        </thead>
        <tbody>
            {
            notifications.map(notification => {
                
                return (
                    <tr>
                        <td>{notification.tableNumber}</td>
                        <td>{notification.items.toString()}</td>
                        <td>{notification.orderTime}</td>
                    </tr>
                )
            })
            }

        </tbody>
        </Table>
    </CardBody>
    )
};

export default OrderNotification;