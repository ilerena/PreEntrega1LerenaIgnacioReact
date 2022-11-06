import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-main sticky-top">
            <div className="container-fluid me-1">
            <a className="navbar-brand" href="index.html">Frutella Boutique</a>
            <button className="navbar-toggler navbar-toggler-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <a className="nav-link  viewscolor" href="monitoreo.html">Frutas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link viewscolor" href="boutique.html">Verduras</a>
                    </li>    
                    <li className="nav-item">
                        <a className="nav-link  viewscolor" href="login.html">Almacen</a>
                    </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <a className="nav-link viewscolor" href="boutique.html">Ingresar</a>
                    </li>    
                    <li className="nav-item">
                        <a className="nav-link viewscolor" href="registro.html">Registrarse</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  viewscolor" href="login.html"><CartWidget/></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    )
};

export default NavBar;