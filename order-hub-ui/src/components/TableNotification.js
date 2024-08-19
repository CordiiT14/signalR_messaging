import React from "react"
import { CardBody, CardTitle, Table } from "reactstrap"

const TableNotification = ({notifications}) => {

    return(
        <CardBody>
             <CardTitle>Tables:</CardTitle>
            <Table>
            <thead>
                <tr>
                <th>
                    Table #
                </th>
                <th>
                    Covers
                </th>
                <th>
                    Walk-In
                </th>
                <th>
                    Drinks Only
                </th>
                <th>
                    Seated At
                </th>
                </tr>
        </thead>
        <tbody>
            {
            notifications.map(notification => {
                
                return (
                    <tr>
                        <td>{notification.tableNumber}</td>
                        <td>{notification.covers}</td>
                        <td>{notification.isWalkIn ? "yes" : "no"}</td>
                        <td>{notification.forDrinksOnly ? "yes" : "no"}</td>
                        <td>{notification.seatedTime}</td>
                    </tr>
                )
            })
            }

        </tbody>
        </Table>
    </CardBody>
       
    )
}

export default TableNotification;