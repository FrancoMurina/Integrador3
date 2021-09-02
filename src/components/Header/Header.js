import React, { Component } from "react";

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    ordenar(){};
    buscar(){};


    render(){
        return(
    <header>
        <h1>Título/ Nombre de la app</h1>
        <section>
            <p>Ordenar ASC/ DESC</p>
            <i class="fas fa-th"></i>
            <i class="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i class="fas fa-search">Buscar</i></button>
            </form>
        </section>
    </header>
        )
    }
}