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
            <ul class="team">
                <li>Maria Noel Russo Mendez</li>
                <li>Franco Murina</li>
                <li>Alexia Alurralde</li>
            </ul>
        </footer>
        )
    }
}