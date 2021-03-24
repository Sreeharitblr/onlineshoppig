import React, { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { EmojiFrown,EmojiHeartEyes,ExclamationSquareFill } from "react-bootstrap-icons";

function AlertMiddile(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <ExclamationSquareFill/>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Woops! <EmojiFrown/></h4>
        <p>
          You have not Loged in , Plase login to Continue... <EmojiHeartEyes/>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertMiddile;
