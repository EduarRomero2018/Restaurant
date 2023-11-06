import imgFooter from "../Images/mi_logo.png";
const Footer = () => {
    return (
        <>
        <footer>
            <div className="text-center mt-2 style_footer">

                <div className="card-footer">
                    <img src={imgFooter} alt="" className="img-fluid"/>
                </div>

                <div>
                    Copyright © 2023 Eduar_Romero.
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer