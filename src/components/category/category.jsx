import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Card, Container, Image } from "react-bootstrap";
import cupcakeVector from "../../assets/cupcakeVector.png";
import pizzaVector from "../../assets/pizzavector.png";
import kebabVector from "../../assets/kebabVector.png";
import doughnutVector from "../../assets/doughnutVector.png";
import salmonVector from "../../assets/salmonVector.png";

const Category = () => {
  const dummyData = [
    {
      name: "Cupcake",
      items: "22 items",
      img: cupcakeVector,
      bgcolor: "#F0FEEB",
    },
    {
      name: "Pizza",
      items: "25 items",
      img: pizzaVector,
      bgcolor: "#E6F3F5",
    },
    {
      name: "Kebab",
      items: "12 items",
      img: kebabVector,
      bgcolor: "#EAEEFA",
    },
    {
      name: "Salmon",
      items: "22 items",
      img: salmonVector,
      bgcolor: "#F9EEF3",
    },
    {
      name: "Doghnut",
      items: "22 items",
      img: doughnutVector,
      bgcolor: "#F3F7D9",
    },
  ];

  return (
    <div className="mt-5">
      <Container>
        <h1 className="fw-bold">Browse Our Categories</h1>
        <p className="fs-1 fw-bold green-2">Receipt</p>
      </Container>
      <Swiper
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 150,
          },
          1020: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        slidesPerView={4}
        spaceBetween={100}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-5 w-75"
      >
        {dummyData?.map((index, i) => (
          <SwiperSlide className="mb-5" key={i}>
            <Card style={{ width: "15rem", backgroundColor: index.bgcolor }}>
              <Card.Body>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Image src={index.img} height={50} width={50} />
                  <p className="text-center">
                    <span className="fw-bold fs-5">{index.name}</span> <br /> {index.items}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
