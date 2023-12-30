


import {Form,Row,Button,Col} from "react-bootstrap"
import "./style.css"
function Contact(){
    return(
        <>
          <Form className="form">
      <Row className="rowcontact">
        <Col>
          <span>First Name:</span>
          <Form.Control placeholder="Enater Your Name" />
        </Col>
        <Col>
         <span>Last Name:</span>
          <Form.Control placeholder="Enter Your Last Name" />
        </Col>
      </Row>
{/* another code  */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label><span>Email:</span></Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="">
          <Form.Label><span>Password:</span></Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="">
        <Form.Label><span>Address:</span></Form.Label>
        <Form.Control placeholder="Enter your address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label><span>New Address:</span> </Form.Label>
        <Form.Control placeholder="Enter your new address" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label><span>City:</span></Form.Label>
          <Form.Select defaultValue="Choose..">
            <option selected hidden>All India State</option>
            <option>Gorakhpur</option>
            <option>Noida</option>
            <option>Varanshi</option>
            <option>Prayagraj</option>
            <option>Lucknow</option>
          <Form.Control />
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label><span>State:</span></Form.Label>
          <Form.Select defaultValue="Choose...">
            <option selected hidden>All India State</option>
            <option>Uttra Pradesh</option>
            <option>Bihar</option>
            <option>Maharashtra</option>
            <option>Gujrat</option>
            <option>Rajasthan</option>
            <option>Himanchal Pradesh</option>
            <option>Goa</option>
            <option>Delhi</option>
            <option>Hariyana</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label><span>All</span> </Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check the form then submit" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </>
    )
}
export default Contact