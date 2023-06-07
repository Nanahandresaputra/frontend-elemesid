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
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1020: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
        }}
        //   centeredSlides={true}
        slidesPerView={4}
        spaceBetween={100}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-5 w-75"
      >
        <SwiperSlide className="mb-5">
          <Card style={{ width: "15rem", backgroundColor: "#F0FEEB" }}>
            <Card.Body>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Image src={cupcakeVector} height={50} width={50} />
                <p className="text-center">
                  <span className="fw-bold fs-5">Cupcake</span> <br /> 22 items
                </p>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="mb-5">
          <Card style={{ width: "15rem", backgroundColor: "#E6F3F5" }}>
            <Card.Body>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Image src={pizzaVector} height={50} width={50} />
                <p className="text-center">
                  <span className="fw-bold fs-5">Pizza</span> <br /> 25 items
                </p>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="mb-5">
          <Card style={{ width: "15rem", backgroundColor: "#EAEEFA" }}>
            <Card.Body>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Image src={kebabVector} height={50} width={50} />
                <p className="text-center">
                  <span className="fw-bold fs-5">Kebab</span> <br /> 12 items
                </p>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="mb-5">
          <Card style={{ width: "15rem", backgroundColor: "#F9EEF3" }}>
            <Card.Body>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Image src={salmonVector} height={50} width={50} />
                <p className="text-center">
                  <span className="fw-bold fs-5">Salmon</span> <br /> 22 items
                </p>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="mb-5">
          <Card style={{ width: "15rem", backgroundColor: "#F3F7D9" }}>
            <Card.Body>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Image src={doughnutVector} height={50} width={50} />
                <p className="text-center">
                  <span className="fw-bold fs-5">Doughnut</span> <br /> 22 items
                </p>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
