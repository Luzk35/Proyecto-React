import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Notification from "../components/Notifications/Notification";
import webber from "../assets/images/avatar-mark-webber.webp";
import gray from "../assets/images/avatar-angela-gray.webp";
import kim from "../assets/images/avatar-anna-kim.webp";
import thompson from "../assets/images/avatar-jacob-thompson.webp";
import smith from "../assets/images/avatar-kimberly-smith.webp";
import peterson from "../assets/images/avatar-nathan-peterson.webp";
import hasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
// import Card from 'react-bootstrap/Card';


const NotificationsPannel = () => {
 
  const mockNotification1 = [
    {
      name: "Mark Webber ",
      action: "react",
      target: {
        type: "post",
        content: " My first tournament today!",
      },
      unread: true,
      date: "1m ago",
      avatar: webber,
    },
    {
      name: "Angela gray ",
      action: "follow",
      target: {
        type: "post",
        content: "",
        inbox: "",
      },
      unread: true,
      date: "5m ago",
      avatar: gray,
    },
    {
      name: "Jacob Thompson ",
      action: "join",
      target: {
        type: "post",
        content: " Chess Club",
        inbox: "",

      },
      unread: true,
      date: "1 day ago",
      avatar: thompson,
    },
    {
      name: "Rizky Hasanuddin ",
      action: "message",
      target: {
        type: "post",
        content: "",
        inbox: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'am already having lots of fun and improving my game.",

      },
      unread: false,
      date: "5 days ago",
      avatar: hasanuddin,
    },
    {
      name: "Kimberly Smith ",
      action: "comment",
      target: {
        type: "post",
        content: "",
        inbox: "",

      },
      unread: false,
      date: "1 week ago",
      avatar: smith,
    },
    {
      name: "Nathan Peterson ",
      action: "follow",
      target: {
        type: "post",
        content: " 5 end-game strategies to increase your win rate",
        inbox: "",

      },
      unread: false,
      date: "2 weeks ago",
      avatar: peterson,
    },
    {
      name: "Anna Kim",
      action: "react",
      target: {
        type: "post",
        content: "",
        inbox: "",

      },
      unread: false,
      date: "2 weeks ago",
      avatar: kim,

      
    },
  ];

  const [notifications, setNotifications] = useState(mockNotification1);


  const marcarTodoLeidos = () => {
    const updatedNotifications = notifications.map((notif) => ({
     

    }));
    
    //console.log(updatedNotifications);
    setNotifications(updatedNotifications);
  };

  return (
    <Container className="containerGeneral" style={{ width:"55%"}}>
    <Container className="layout-helper containerN" style={{ padding: "5%"  }}>
      <Row>
        <Container fluid className="layout-helper">
          <Row>
            <Col xs={7}>
              <Container fluid>

                <Row>
                  <Col className="textNegrilla texNegrilla2 col-4 " style={{textAlign:"left"}} >Notifications</Col>
                  <Col style={{textAlign:"left"}}>
                    
                     <span className="cuadrado">3</span> 
                  
                    {/* <div>{notifications.filter((notif) => notif.unread).length}</div> */}
                  </Col>
                </Row>
                
              </Container>
            </Col>

            <Col className="layout-helper message1" style={{textAlign:"right"}}>
              Mark all as read
            </Col>
          </Row>
          <Row>
            <Container fluid className="layout-helper">
              {/* {notifications.map((notif, index) => (
                <Notification key={index} notification={notif} />
              ))} */}

              {notifications.map((notif, index) => (
                <div key={index} className={notif.target.inbox ? "cuadroInbox" : "sinInbox"}>
                  <Notification notification={notif} />
                </div>
              ))}

            </Container>
          </Row>
        </Container>
      </Row>
    </Container>
    </Container>
  );
};

export default NotificationsPannel;
