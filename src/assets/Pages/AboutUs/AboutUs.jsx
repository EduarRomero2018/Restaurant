import React from 'react'
import valores from '../../Images/valores2.png';
import aboutus from "../../Images/aboutus2.png";
import "./stylesaboutus.css";
const AboutUs = () => {



  return (
    <>
      <div className="col-md-12">
        <img src={aboutus} alt="" className="styles_img" />
      </div>

      <div className="container-fluid">
        <div className="row mt-5 text-center">
          <div className="col-sm-6">
            <div className="card-body style_border1">
              <h5 className="card-title">Misión</h5>
              <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dolor beatae nam corporis vero sit magnam ratione consectetur atque aperiam quaerat veritatis iure ipsa vel alias modi excepturi ipsam ea, omnis inventore incidunt eius sapiente molestias. In perspiciatis maxime harum?</p>

            </div>

          </div>
          <div className="col-sm-6">
            <div className="card-body style_border1">
              <h5 className="card-title">Visión</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsam. Velit placeat qui rem fugiat, quos nobis eum sed quasi. Consectetur magni sequi optio a sit enim adipisci laudantium, veritatis ipsum corporis autem inventore ea voluptatibus vero similique harum. Recusandae!</p>

            </div>

          </div>
        </div>


        <div className="row mt-3 fondo">
          <div className="col-md-6 m-0 row justify-content-center align-items-center">
            <div className="col-auto text-center">
              <img className="img-fluid m-3 img_reservas" src={valores} alt="Reservas" />
            </div>
          </div>

          <div className="col-md-6 m-0 row justify-content-center align-items-center">

              <h2 className='title_values'>Nuestros Valores</h2>
              <ul className="list_values text-left">
                <li>Creatividad y Tradición:
                  <p>
                  Respetamos profundamente la herencia cultural que suponen las recetas tradicionales, y partiendo de su conocimiento, empleamos con criterio toda nuestra creatividad para realizar nuevos platos y tapas, o crear nuevas versiones con nuestro toque de alta cocina.
                  </p>
                </li>
                <li>Profesionalidad y Pasión:
                  <p>
                  Solo contamos con profesionales comprometidos y que disfrutan haciendo bien su trabajo. Estar siempre dispuesto a dar lo mejor de uno mismo, es un requisito indispensable para conseguir que la experiencia de nuestros clientes al comer o cenar en Vivo, sea algo único y muy agradable.
                  </p>
                </li>
                <li>Trabajo en Equipo:
                  <p>
                  Creemos en la formación, el compañerismo, en compartir la experiencia con los más jóvenes o noveles, en la comunicación, la buena organización y en el compromiso con el objetivo común de agradar, sorprender y en definitiva hacer felices a nuestros clientes.
                  </p>
                </li>
              </ul>

            </div>
          </div>
        </div>










    </>
  )
}
export default AboutUs
