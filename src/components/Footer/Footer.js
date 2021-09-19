import React from "react";
import './style.css';

function Footer() {

    return(
        <footer>
            <p className="integrantes">Maria Noel Russo Mendez, Alexia Alurralde y Franco Murina</p>
            <ul className="ultimalinea">
                <li className="facebook"><img src="../imagenes/facebook.png" alt="facebook"/></li>
                <li className="instagram"><img src="./imagenes/instagram.png" alt="instagram"/></li>
                <li className="twitter"><img src="./imagenes/twitter.png" alt="twitter"/></li>
            </ul>
        </footer>
    )
}

export default Footer;