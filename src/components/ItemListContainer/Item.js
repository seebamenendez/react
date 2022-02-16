import React from 'react';
import { Link } from 'react-router-dom';

function Item({prod}) {
    return (
        <div 
            className='container-fluid col-md-3'
        >                        
            <div className="border border-secondary">
                <div className="card-header">
                    {`${prod.nombre} - Colección ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.img} alt='' className='w-50' />
                    <p>$ {prod.precio}</p>                                                            
                </div>
                <div className="card-footer">  
                    <Link to={`/detalle/${prod.id}`}>                                         
                    <button className="btn btn-secondary btn-block">
                        Detalle del producto
                    </button>  
                    </Link>                                             
                                                                                                            
                </div>
            </div>
        </div>
    )
}

export default Item