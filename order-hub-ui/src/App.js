import OrderingTab from './components/OrderingTab';
import KitchenScreen from './components/KitchenScreen';
import BarScreen from './components/BarScreen';
import { Col, Row } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

function App() {
  const[online, setOnline] = useState(false);
  const [connection, setConnection] = useState(null);
  const [tableNotifications, setTableNotifications] = useState([])
  const [kitchenOrders, setKitchenOrders] = useState([]);
  const [barOrders, setBarOrders] = useState([]);

  useEffect(() =>{
    const newConnection = new HubConnectionBuilder()
    .withUrl("https://localhost:7168/order-hub")
    .withAutomaticReconnect()
    .build();

    setConnection(newConnection);
  }, [])

  useEffect(() => {
    if (connection){
      connection.start()
      .then( () => {
        console.log("connected");
        setOnline(true);

        connection.on("NewTableNotification", notification => {
          setTableNotifications(prev => [...prev, notification]); 
        })

        connection.on("NewFoodOrderNotification", notification => {
          setKitchenOrders(prev => [...prev, notification]);
        })

        connection.on("NewDrinksOrderNotification", notification => {
          setBarOrders(prev => [...prev, notification]);
        })
      })
      .catch( e => {
        console.log("Connection failed:", e);
        setOnline(false);
      })
    }
  }, [connection])



  return (
    <>
      <Row className="bg-light border vh-100">
        <Col>
          <OrderingTab></OrderingTab>
        </Col>
        <Col>
          <KitchenScreen orders={kitchenOrders} tableNotifications={tableNotifications}></KitchenScreen>
        </Col>
        <Col>
          <BarScreen orders={barOrders} tableNotifications={tableNotifications}></BarScreen>
        </Col>
      </Row>
    </>
  );
}

export default App;
