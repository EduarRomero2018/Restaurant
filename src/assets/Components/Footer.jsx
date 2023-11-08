import imgFooter from "../Images/mi_logo.png";
import { AiOutlineWhatsApp, AiFillInstagram, AiOutlineFacebook, AiFillTwitterCircle} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";
const Footer = () => {
    return (
        <>


                <footer className="container-fluid footer">
                    <ul className="nav justify-content-center border-bottom">
                        <li className="nav-item"><a href="#" className="nav-link"> <p class="text-secondary"> <AiOutlineWhatsApp /></p></a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><p class="text-secondary"> <AiFillInstagram /> </p></a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><p class="text-secondary"> <AiOutlineFacebook /></p></a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><p class="text-secondary"> <AiFillTwitterCircle /></p></a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><p class="text-secondary"> <FaTiktok /></p></a></li>
                    </ul>
                    <p className="text-center text-body-secondary">&copy; Copyright © 2023 Eduar_Romero.</p>
                </footer>



        </>
    )
}
export default Footer
