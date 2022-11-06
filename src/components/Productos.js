import { useState,useEffect } from "react";
import { Data } from '../utils/Data'
import { customFetch } from '../utils/customFetch'
import Product from './Product'

const Productos = ()=> {
    const [datos, setDatos] = useState([])
    const deleteProducto = (id)=> {
        let nuevosProductos = datos.filter(item => item.id !== id)
        setDatos(nuevosProductos)
    }

    useEffect(()=>{
        customFetch(2000, Data)
            .then(resp => setDatos(resp))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        {
            datos.map(item => (
                <Product 
                key={item.id}
                nombre={item.nombre}
                precio={item.precio}
                stock={item.stock}
                img={item.img}
                deleteVideo={() => deleteProducto(item.id)} />
            ))
        }
        </>
    )
}

export default Productos;