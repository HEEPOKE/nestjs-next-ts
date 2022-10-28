import React, { useState } from "react";
import { Container, Card, Form, Button, Row } from "react-bootstrap";
import NavbarMenu from "../components/navbarMenu";

export default function Create() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <NavbarMenu />
      <h2 className="text-dark text-center mt-2">Create</h2>
      <Container>
        <Row className="justify-content-center">
          <Card className="col-6">
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" required />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Details"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Details.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Images</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Enter Images"
                    accept="image/*"
                    multiple
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Images.
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
