import React from 'react'

import aboutus from "../../Images/aboutus2.png";
import "./stylesaboutus.css";
const AboutUs = () => {



  return (
    <>
      <div className="col-md-12">
            <img src={aboutus} alt="" className="styles_img" />
    </div>

    <div className="container">
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

    </div>








    </>
  )
}
export default AboutUs
