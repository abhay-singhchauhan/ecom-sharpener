import { useParams } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import Context from "../context/context";
import { useContext } from "react";

const SingleProduct = (props) => {
  const cnxt = useContext(Context);
  const params = useParams();
  console.log(params);
  let ele = props.arr.filter((e) => {
    if (e.id == params.productId) {
      return true;
    }
  });
  ele = ele[0];
  console.log(ele, props.arr);
  return (
    <Row className="mx-auto">
      <Col md={6} lg={6} xl={6} className="mb-2">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-center">{ele.title}</Card.Title>
            <Card.Img className="mx-auto" src={ele.imageUrl} alt={ele.title} />
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
    </Row>
  );
};
export default SingleProduct;
