import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Cart.css";

function Example(props) {
  const arr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  const [cartElements, setCartElements] = useState(arr);
  return (
    <>
      <Modal
        show={props.current}
        onHide={props.onClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="tableinside" border="1">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartElements.map((ele) => (
                <tr>
                  <td>
                    <img src={ele.imageUrl}></img>
                    <p>{ele.title}</p>
                  </td>
                  <td>
                    <p>${ele.price}</p>
                  </td>
                  <td>
                    <input type="number" value={1} min={1}></input>
                    <Button>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="primary">Buy</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
