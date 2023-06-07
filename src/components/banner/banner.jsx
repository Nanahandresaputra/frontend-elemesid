import { Col, Container, Image, Row } from "react-bootstrap";
import food from "../../assets/food.png";

const Banner = () => {
  return (
    <div className="pt-5">
      <Container className="d-none d-md-block">
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <h1 className="display-2 fw-bold green-2">Good Food Us</h1>
            <h1 className="display-2 fw-bold green-2">Good Mood</h1>
            <p className="fs-5 fw-bold grey">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <Image src={food} height="85%" width="85%" className="border-food" />
          </Col>
        </Row>
      </Container>
      <Container className="d-block d-md-none">
        <h1 className="display-2 fw-bold green-2">Good Food Us</h1>
        <h1 className="display-2 fw-bold green-2">Good Mood</h1>
        <div className="d-flex justify-content-center align-items-center my-3">
          <Image src={food} height="85%" width="85%" className="border-food" />
        </div>
        <p className="fs-5 fw-bold grey">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
      </Container>
    </div>
  );
};

export default Banner;
