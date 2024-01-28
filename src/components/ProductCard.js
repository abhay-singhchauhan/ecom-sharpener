import React, { useContext, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Context from "../context/context";

const MyCard = () => {
  const cnxt = useContext(Context);
  const arr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const [productsArr, setProductArr] = useState(arr);

  return (
    <div className="rowCont">
      <Row className="mx-auto">
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
                  <Button
                    onClick={() => cnxt.addItem(ele)}
                    variant="primary"
                    className="ml-2"
                  >
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
