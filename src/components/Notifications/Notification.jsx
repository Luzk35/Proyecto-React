import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import '../../styles/components/notification.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Notification = ({ notification }) => {
  /**
   * Constantes
   */

  const MESSAGES = {
    react: [
      "reacted to your recent post",
      "followed you",
      "Has joined your group",
      "sent you a private message",
      "commented on your picture",
      "reacted to your recent post",
    ],
  };

  /**
   * Use State
   */

  const [notifMessage, setNotifMessage] = useState("");

  useEffect(() => {
    const { action } = notification;

    switch (action) {
      case "react":
        setNotifMessage(MESSAGES.react[0]);
        break;
      case "follow":
        setNotifMessage(MESSAGES.react[1]);
        break;
      case "join":
        setNotifMessage(MESSAGES.react[2]);
        break;
      case "message":
        setNotifMessage(MESSAGES.react[3]);
        break;
      case "comment":
        setNotifMessage(MESSAGES.react[4]);
        break;
      case "follow":
        setNotifMessage(MESSAGES.react[1]);
        break;
      case "react":
        setNotifMessage(MESSAGES.react[0]);
        break;        

      default:
        setNotifMessage("");
    }
  }, [notification]);

  return (
    <Container className="layout-helper colorNotification containerPpal"
      style={{ marginTop: "2%", marginBottom: "2%"}}      
    >
        {/* avatar */}

      <Row className="rowAvatar">

        <Container className="contenedorAVATAR">
          <Col className="layout-helper__notif col-1 colorNotification colAvatar"> 
            <Avatar alt="avatarr" src={notification.avatar} className="avatarClass"/>     
          </Col>   
        </Container>   


        {/* notification content */}
        <Col className="messageContent mess " >
          <Container className="conten">
            <Row className="parrafos">

              <Col className="colParrafos">
                <p>            
                  <span className="textNegrilla mess"> {notification.name} </span>
                  <span className="message1 mess "> {notifMessage}</span>
                  <span className=" message2 ">{notification.target.content} </span>  
                </p>
              </Col>

            </Row>


            <Row className="rowTime">
              <span className="mess time" > {notification.date}</span> 
              
              <span className="mensajeInbox">{notification.target.inbox}</span>
            </Row>


          </Container>
        </Col>  
     
      </Row>
    </Container>
  );
};

export default Notification;