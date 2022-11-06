import { useState, useEffect } from 'react';
import '../App.css';

const Product = (props)=>{
    const [rate, setRate]= useState(0);
    const rateProduct = ()=> {
        setRate(rate + 1)
    }
    useEffect(()=>{
    }, [rate])

    return (
        <div className="product-conteiner">
            <div className="img-conteiner">
                <img src={props.img} alt={props.nombre} />
            </div>
            <div>
                <button onclick={props.deleteVideo}>No ver más este producto</button>
                <h3>{props.nombre}</h3>
                <span>Este producto tiene una calificacion de {rate}.</span> | <button onClick={rateProduct}>Califica este producto</button>
                <p>Precio: ${props.precio}</p>
                <h4>Stock: {props.stock}</h4>
            </div>
        </div>
    )
}

export default Product;