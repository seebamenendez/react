import { React, useContext, useState } from "react";
import { Card } from "react-bootstrap";
//import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";
import FinalizarCompra from "../../FinalizarCompra/FinalizarCompra";
import { CartContext } from "../../CartContext/CartContext";

const ItemDetail = ({ product }) => {
  const [show, setShow] = useState(true);
  const {agregarAlCarrito} =useContext(CartContext)

  const { foto, nombre, precio, coleccion, stock } = product;

  const onAdd = (count) => {
    agregarAlCarrito(product, count)
    setShow(false);
  };

  return (
    <div>
      <Card style={{ width: "18rem", margin: "20px" }}>
        <Card.Img variant="top" src={foto} style={{ minHeight: "300px" }} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Colección: {coleccion}</Card.Text>
          <Card.Text>$ {precio}</Card.Text>
        </Card.Body>
      </Card>

      {show ? (
        <ItemCount stock={stock} onAdd={onAdd} />
      ) : (
        <div>
          <FinalizarCompra />
          
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
