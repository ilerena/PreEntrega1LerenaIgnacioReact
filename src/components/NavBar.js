import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-main sticky-top">
            <div className="container-fluid me-1">
            <a className="navbar-brand" href="index.html">Paraná Rowing Club</a>
            <button className="navbar-toggler navbar-toggler-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <a className="nav-link  viewscolor" href="monitoreo.html">Ropa de Juego</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link viewscolor" href="boutique.html">Accesorios</a>
                    </li>    
                    <li className="nav-item">
                        <a className="nav-link viewscolor" href="registro.html">Calzados</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  viewscolor" href="login.html">Indumentaria Informal</a>
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