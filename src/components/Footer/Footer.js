import React, { Component } from "react";

export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
        <footer>
            <ul className="team">
                <li>Maria Noel Russo Mendez</li>
                <li>Franco Murina</li>
                <li>Alexia Alurralde</li>
            </ul>
            {/* <ul className="ultimalinea">
                <li className="facebook"><img src="../imagenes/facebook.png" alt="facebook"/></li>
                <li className="instagram"><img src="./imagenes/instagram.png" alt="instagram"/></li>
                <li className="twitter"><img src="./imagenes/twitter.png" alt="twitter"/></li>
            </ul> */}
        </footer>
        )
    }
}