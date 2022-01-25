import React from 'react';
import { Link } from 'react-router-dom';

function Item({prod}) {
    return (
        <div 
            className='container-fluid col-md-4'
        >                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.nombre} - Colección ${prod.coleccion}`}
                </div>
                <div className="card-body">
                    <img src={prod.foto} alt='' className='w-50' />
                    <p>$ {prod.precio}</p>                                                            
                </div>
                <div className="card-footer">  
                    <Link to={`/detalle/${prod.id}`}>                                         
                    <button className="btn btn-outline-primary btn-block">
                        Detalle del producto
                    </button>  
                    </Link>                                             
                                                                                                            
                </div>
            </div>
        </div>
    )
}

export default Item