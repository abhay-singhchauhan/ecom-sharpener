import React, { useContext, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Context from "../context/context";
import { Link } from "react-router-dom";

const MyCard = (props) => {
  const cnxt = useContext(Context);
  const arr = props.arr;
  const [productsArr, setProductArr] = useState(arr);

  return (
    <div className="rowCont">
      <Row className="mx-auto">
        {productsArr.map((ele, index) => (
          <Link to={`/products/${ele.id}`}>
            <Col key={index} md={1} lg={1} xl={1} className="mb-2">
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
          </Link>
        ))}
      </Row>
    </div>
  );
};

export default MyCard;
