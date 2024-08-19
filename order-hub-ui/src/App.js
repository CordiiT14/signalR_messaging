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
          <KitchenScreen tableNotifications={tableNotifications}></KitchenScreen>
        </Col>
        <Col>
          <BarScreen tableNotifications={tableNotifications}></BarScreen>
        </Col>
      </Row>
    </>
  );
}

export default App;
