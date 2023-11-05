import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// importaciones de firebase
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/config';
import './stylesmyorders.css';


const MyOrders = () => {

    // creamos la variable de estado orders y su funcion que la va actualizando
    const [orders, setOrders] = useState([]);
    const getData = async () => {
        onSnapshot(collection(db, 'Orders'), (querySnapshot) => {
            setOrders(querySnapshot.docs.map((doc) => doc.data()))
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="container-fluid styles_title">
            <h1 className="text-center mt-3">Ordenes Realizadas</h1>
            <div className="row">
                {orders &&
                    orders.map((order, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card text-bg-info mt-2">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <b> Nombre de Cliente:</b> {order.nombre_completo}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Fecha de Reserva:</b> {order.fechareserva}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Cantidad de Personas:</b> {order.cantidad_personas}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Correo Cliente:</b> {order.email}
                                    </li>
                                </ul>
                                <div className="card-footer text-center">
                                    <button className="btn btn-dark m-2">Ver Detalle</button>
                                    <button className="btn btn-dark">Cancelar</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );



}
export default MyOrders