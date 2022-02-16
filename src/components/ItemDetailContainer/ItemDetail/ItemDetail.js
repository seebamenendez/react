import { React, useState } from "react";
import { Card } from "react-bootstrap";
//import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";
import RealizarCompra from "../../RealizarCompra/RealizarCompra";
import { useCartContext } from "../../CartContext/CartContext";


const ItemDetail = ({producto}) => {

  const [show, setShow] = useState(true)
  const {agregarAlCarrito} = useCartContext()
  
  const onAdd = (cant) => {
    agregarAlCarrito({...producto, cantidad: cant});
    setShow(false);
};

  return (
    <>
    <div>
      <Card style={{ width: "18rem", margin: "10px" }}>
        
        <Card.Body className="card-header">
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Img variant="top" src={producto.img} style={{ minHeight: "300px" }} />
          <Card.Text>Colección: {producto.categoria}</Card.Text>
          <Card.Text>$ {producto.precio}</Card.Text>
          
          {show ? (
        <ItemCount stock={producto.stock} onAdd={onAdd} />
      ) : (
        <div>
          <RealizarCompra />
        </div>
      )}
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default ItemDetail;
