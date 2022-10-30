import '../../src/App.css';

const ItemListConteiner = (props) => {
    return (
        <div className="divProductos">
            {props.mensaje}
        </div>
    )
}

export default ItemListConteiner;