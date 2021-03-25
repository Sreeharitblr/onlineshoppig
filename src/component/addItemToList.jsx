import React, { useEffect, useState } from "react";
import { Button,Modal, Card, Row, Col, Form } from "react-bootstrap";
import { ArrowRight, ArrowLeft ,ExclamationSquareFill} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, NavLink, Link, withRouter } from "react-router-dom";

function addItemToList(props) {
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
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default addItemToList;
