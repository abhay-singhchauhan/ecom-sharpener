import { useCallback, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Cart.css";
import Context from "../context/context";

function Example(props) {
  const cnxt = useContext(Context);

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
              {cnxt.items.map((ele) => (
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
                    <Button onClick={() => cnxt.removeItem(ele)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <div className="totalAmount">
          <h5>Total</h5>
          <h5>${cnxt.totalAmount}</h5>
        </div>
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
