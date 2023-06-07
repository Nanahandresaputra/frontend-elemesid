import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import cupcakecoco from "../../assets/cupcakecoco.png";
import pizzapaperoni from "../../assets/pizzapaperoni.png";
import pizameat from "../../assets/pizameat.png";
import donnutmilk from "../../assets/donnutmilk.png";
import kebab from "../../assets/kebab.png";
import kathikebab from "../../assets/kathikebab.png";
import salmonroll from "../../assets/salmonroll.png";
import donnutunicorn from "../../assets/donnutunicorn.png";

//
const Trending = () => {
  const dummyData = [
    {
      name: "Pizza Paperoni",
      category: "Pizza",
      bgcolor: "#E6F3F5",
      img: pizzapaperoni,
      rating: (
        <div>
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="grey" />
        </div>
      ),
    },
    {
      name: "Pizza Meat",
      category: "Pizza",
      bgcolor: "#E6F3F5",
      img: pizameat,
      rating: (
        <div>
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="grey" />
          <AiFillStar className="grey" />
        </div>
      ),
    },
    {
      name: "Doner Kebab",
      category: "Kebab",
      bgcolor: "#EAEEFA",
      img: kebab,
      rating: (
        <div>
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
        </div>
      ),
    },
    {
      name: "Salmon Roll",
      category: "Salmon",
      bgcolor: "#F9EEF3",
      img: salmonroll,
      rating: (
        <div>
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="grey" />
        </div>
      ),
    },
    {
      name: "Cupcake Coco",
      category: "Cupcake",
      bgcolor: "#F0FEEB",
      img: cupcakecoco,
      rating: (
        <div>
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="grey" />
          <AiFillStar className="grey" />
        </div>
      ),
    },
    {
      name: "Doughnut Milk",
      category: "Doughnut",
      bgcolor: "#F3F7D9",
      img: donnutmilk,
      rating: (
        <div>
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
        </div>
      ),
    },
    {
      name: "Doughnut Unicorn",
      category: "Doughnut",
      bgcolor: "#F3F7D9",
      img: donnutunicorn,
      rating: (
        <div>
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="grey" />
        </div>
      ),
    },
    {
      name: "Kathi Kebab",
      category: "Kebab",
      bgcolor: "#EAEEFA",
      img: kathikebab,
      rating: (
        <div>
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="text-warning" />
          <AiFillStar className="grey" />
        </div>
      ),
    },
  ];
  return (
    <div className="my-5">
      <Container>
        <h1 className="fw-bold">Browse Our Trending</h1>
        <p className="fs-1 fw-bold green-2">Receipt</p>
        <Row className="g-3">
          {dummyData?.map((index, i) => (
            <Col sm={12} md={4} lg={3} className="d-flex justify-content-center align-items" key={i}>
              <Card className="pt-3 shadow" style={{ width: "18rem", backgroundColor: index.bgcolor }}>
                <Card.Body>
                  <Image src={index.img} height={150} width={150} />
                  <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                    <p className="text-center fw-bold fs-5">
                      {index.name} <br /> <span className="fs-6 green-2">{index.category}</span>
                    </p>
                    <div>{index.rating}</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center mt-5">
          <Button variant="green-2" className="rounded-pill fw-bold">
            All Receipt
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Trending;
