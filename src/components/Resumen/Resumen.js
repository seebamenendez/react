import React from 'react';
import { Link } from 'react-router-dom';

function Resumen({idOrden}) {
  return (
    <>
      <div>
        Muchas gracias por su compra. El id de la orden generada es: {idOrden}
      </div>
      <Link to={`/`}>
        <button>Volver al Inicio</button>
      </Link>
    </>
  );
}

export default Resumen;
