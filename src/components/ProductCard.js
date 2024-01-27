import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const MyCard = () => {
  const arr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const [productsArr, setProductArr] = useState(arr);

  return (
    <div className="rowCont">
      <Row>
        {productsArr.map((ele, index) => (
          <Col key={index} md={6} lg={6} xl={6} className="mb-2">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-center">{ele.title}</Card.Title>
                <Card.Img
                  className="mx-auto"
                  src={ele.imageUrl}
                  alt={ele.title}
                />
                <div className="d-flex align-items-center justify-content-between">
                  <Card.Text>{`$ ${ele.price}`}</Card.Text>
                  <Button variant="primary" className="ml-2">
                    Add To Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyCard;
