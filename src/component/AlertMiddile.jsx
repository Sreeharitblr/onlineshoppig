import React, { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import {
  EmojiFrown,
  EmojiHeartEyes,
  ExclamationSquareFill,
} from "react-bootstrap-icons";

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
          <ExclamationSquareFill />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {console.log(props.msg)}
        <h4>
          Ooops! <EmojiFrown />
        </h4>
        <p>
          {props.msg} <EmojiHeartEyes />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.Continue}>
          Close
        </Button>
        {console.log()}
        <Button
          onClick={props.bacToHome ? props.Cancel :  props.setBacToHome}
        >
          {props.bacToHome ? "Login" : "Continue"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertMiddile;
