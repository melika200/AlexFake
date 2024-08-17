import { Col, Container, Form, Row } from "react-bootstrap";
import "./Contact.css";
import Button from "react-bootstrap/Button";
function Contact() {
  return (
    <>
      <Container fluid id="Contact" className="ContactState">
        <Row className="mt-5">
          <div style={{ margin: "35px 0px" }}>
            <h3
              className="ContactHeader"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                paddingBottom: "18px",
              }}
            >
              Contact
            </h3>
            <span style={{ color: "black" }}>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem sint consectetur velit .
            </span>
          </div>
          <Col className="ContactBox">
            <Form>
              <Row
                className="mb-3"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Group
                    style={{ padding: "35px 0px" }}
                    as={Col}
                    controlId="formGridName"
                  >
                    <Form.Label
                      style={{ fontWeight: "bold", color: "#7492a0" }}
                    >
                      Your Name
                    </Form.Label>
                    <Form.Control
                      style={{
                        width: "100%",
                        height: "28px",
                        marginTop: "15px",
                      }}
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group
                    style={{ padding: "25px 0px", marginTop: "10px" }}
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label
                      style={{ fontWeight: "bold", color: "#7492a0" }}
                    >
                      Your Email
                    </Form.Label>
                    <Form.Control
                      style={{
                        width: "100%",
                        height: "28px",
                        marginTop: "15px",
                      }}
                      type="email"
                    />
                  </Form.Group>
                </div>
                <Form.Group
                  style={{ padding: "15px 0px" }}
                  as={Col}
                  controlId="formGridSubject"
                >
                  <Form.Label style={{ fontWeight: "bold", color: "#7492a0" }}>
                    Subject
                  </Form.Label>
                  <Form.Control
                    style={{ width: "100%", height: "38px", marginTop: "15px" }}
                    type="text"
                  />
                </Form.Group>
                <Form.Group
                  style={{ padding: "15px 0px" }}
                  as={Col}
                  controlId="formGridMessages"
                >
                  <Form.Label style={{ fontWeight: "bold", color: "#7492a0" }}>
                    Messages
                  </Form.Label>
                  <Form.Control
                    style={{
                      width: "100%",
                      height: "300px",
                      marginTop: "15px",
                    }}
                    type="text"
                  />
                </Form.Group>

                <Button
                  type="button"
                  style={{
                    backgroundColor: "#149ddd",
                    width: "30%",
                    margin: "auto",
                    height: "30px",
                    borderRadius: "30px",
                    padding: "15px 10px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    border: "1px solid #fff",
                    justifyContent:'center'
                }}
                >
                  Send Messeages
                </Button>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
export default Contact;
