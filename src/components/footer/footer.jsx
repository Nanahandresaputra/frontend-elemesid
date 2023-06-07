import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <div className="bg-green-2-light py-5">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Image src={logo} />
            <p className="grey fw-bold my-3">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950</p>
            <div className="d-flex">
              <div className=" fs-3 rounded-circle px-2 mail">
                <AiOutlineMail />
              </div>
              <div className=" fs-3 rounded-circle px-2 mail">
                <BsTelephone />
              </div>
              <div className=" fs-3 rounded-circle px-2 mail">
                <AiOutlineInstagram />
              </div>
            </div>
          </Col>
          <Col md={2} className="d-none d-md-block">
            <h4 className="fw-bold">Categories</h4>
            <p>Cupcake</p>
            <p>Pizza</p>
            <p>Kebab</p>
            <p>Salmon</p>
            <p>Doughnut</p>
          </Col>
          <Col md={2} className="d-none d-md-block">
            <h4 className="fw-bold">About Us</h4>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Report Problem</p>
          </Col>
          <Col md={4} className="d-none d-md-block">
            <h4 className="fw-bold">Newsleter</h4>
            <p className="grey">Get now free 50% discount for alll products on your first order</p>
            <InputGroup className="mb-3">
              <Form.Control placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
              <Button variant="green-2" id="button-addon2" className="fw-bold">
                Send
              </Button>
            </InputGroup>
            <p>
              <AiOutlineMail className="fs-3 green-2" /> <span className="fw-bold">elemesid@gmail.com</span>
            </p>
            <p>
              <BsTelephone className="fs-3 green-2" /> <span className="fw-bold">0888 1111 2222</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
