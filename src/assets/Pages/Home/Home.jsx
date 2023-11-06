import carta from '../../Images/carta.jpg';
import platos from '../../Images/platos.jpg';
import reservas from '../../Images/reservas.jpg';
import Login from '../LogIn/Login';


// Objeto de las imagenes
// const data_img = {
//   "carta": carta,
//   "platos": platos,
//   "reservas": reservas
// }



export const Home = () => {
  return (
    <>
      <div className=" container p-3 backgroundhome text-white rounded ">
        <h1 className='text-center primary_title'>Bienvenido a Mapale </h1>
        <p className='text-center secondary_title'>Aplicación realizada con React</p>
      </div>


      <div className="container mt-2">
        <div className="row">
          <div className="col-md-4 mt-2 style_hover">
            <div className="card">
              <img className="card-img-top" src={carta} alt="Card image" />
              <div className="card-img-overlay ">
                <h4 className="card-title">Conoce Nuestra Carta</h4>

                <a href="#" className="btn btn-dark">Ver Carta</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-2">
            <div className="card">
              <img className="card-img-top" src={platos} alt="Card image" />
              <div className="card-img-overlay">
                <h4 className="card-title">Nuestros Platos</h4>
                <a href="#" className="btn btn-dark">Mirar Platos</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-2 mb-2">
            <div className="card">
              <img className="card-img-top" src={reservas} alt="Card image" />
              <div className="card-img-overlay">
                <h4 className="card-title">Reservas</h4>

                <a href="#" className="btn btn-dark">Reservar</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Home