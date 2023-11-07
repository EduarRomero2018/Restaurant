import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import login from '../../Images/1.png';
import './styleslogin.css';
// importaciones de sweetalert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// importaciones de firebase
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase/config.js';

// declaramos la constante de sweetalert y la inicializamos
const MySwal = withReactContent(Swal)


// definimos un hook de estado con un objeto que es donde se almacenaran los datos ingresados en el formulario
const Login = () => {

    const [data, setData] = useState({
        nombre_completo: '',
        email: '',
        cantidad_personas: '',
        fechareserva: ''
    });
    // creans las funciones que va a estas camnbiando los valores de los datos ingresados en los inputs
    const rename = (event) => {
        setData((valores) => ({
            ...valores,
            nombre_completo: event.target.value
        }))
    }

    const changedirection = (event) => {
        setData((valores) => ({
            ...valores,
            email: event.target.value
        }))
    }

    const numberpeople = (event) => {
        setData((valores) => ({
            ...valores,
            cantidad_personas: event.target.value
        }))
    }

    const reservationdate = (event) => {
        setData((valores) => ({
            ...valores,
            fechareserva: event.target.value
        }))
    }

    // creamos la funcion para procesar el formulario
    const procesar = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(db, 'Orders'), data);
            MySwal.fire({
                icon: 'success',
                title: 'Éxito!',
                text: ' Su Reserva fue realizada!',
                timer: 3000
            })
            rename({ target: { value: '' } })
            changedirection({ target: { value: '' } })
            numberpeople({ target: { value: '' } })
            reservationdate({ target: { value: '' } })

            console.log('Reserva realizada');

        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Algo salió mal!',
                timer: 3000
            })
        }
        // console.log(data.nombre_completo + ' ' + data.email + ' ' + data.cantidad_personas + ' ' + data.fechareserva);
    }

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-6 m-0 vh-80 row justify-content-center align-items-center">
                        <div className="col-auto text-center">
                            <img className="img-fluid" src={login} alt="Reservas" />
                        </div>
                    </div>

                    <div className="col-md-6 m-0  style_hover vh-80 row justify-content-center align-items-center">
                        <div className="col-auto text-center">
                            <h2>Reserva tu momento especial</h2>

                            {/* creamos el formulario */}
                            <form onSubmit={procesar} >

                                <div className="form-floating mb-2 styles_forms">
                                    <input type="text" value={data.nombre_completo} onChange={rename} className="form-control" id="nombre_completo" placeholder="Digite su nombre" />
                                    <label for="floatingPassword">Nombre Completo</label>
                                </div>

                                <div className="form-floating mb-2">
                                    <input type="email" value={data.email} onChange={changedirection} className="form-control" id="email" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>

                                <div className="form-floating mb-2">
                                    <input type="number" value={data.cantidad_personas} onChange={numberpeople} className="form-control" id="cantidad_personas" placeholder="Cantidad de personas" />
                                    <label for="floatingPassword">Cantidad de personas</label>
                                </div>

                                <div className="form-floating mb-2">
                                    <input type="date" value={data.fechareserva} onChange={reservationdate} className="form-control" id="fechareserva" placeholder="Fecha reserva" />
                                    <label for="floatingPassword">Fecha de la Reserva</label>
                                </div>

                                <button type="submit" className="btn btn-light">Reservar</button>

                            </form>
                        </div>
                    </div>
                </div>
                {/* <h2>Datos ingresados</h2>
                <ul>
                    <li>{data.nombre_completo}</li>
                    <li>{data.email}</li>
                    <li>{data.cantidad_personas}</li>
                    <li>{data.fechareserva}</li>
                </ul> */}
            </div>

        </>
    )
}

export default Login