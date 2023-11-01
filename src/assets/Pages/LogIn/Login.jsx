import { NavLink, Link } from "react-router-dom";
import carta from '../../Images/carta.jpg';
import login from '../../Images/login.jpg';
const Login = () => {
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-6 mt-2 style_hover">
                        <div className="card">
                            <img className="card-img-top" src={carta} alt="Card image" />
                            <div className="card-img-overlay">
                                <h4 className="card-title">Conoce Nuestra Carta</h4>
                                <p className="card-text">Some example text.</p>
                                <a href="#" className="btn btn-dark">Ver Carta</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-2 style_hover">
                        <div className="card">
                            <img className="card-img-top" src={carta} alt="Card image" />
                            <div className="card-img-overlay">
                                <h4 className="card-title">Conoce Nuestra Carta</h4>
                                <p className="card-text">Some example text.</p>
                                <a href="#" className="btn btn-dark">Ver Carta</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login