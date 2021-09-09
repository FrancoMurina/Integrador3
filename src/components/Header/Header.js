import React, { Component } from "react";

export default class Header extends Component{
    constructor(){
        super();
        this.state= {
            valorInput: ""
        }
    }
    
    // ordenar(){};
    
   
    prevenirSubmit(evento){
        console.log("Prevenimos el comportamiento por default del form que es recargar la página");
        evento.preventDefault();
    }

    capturaInput(evento){
        // console.log(evento.target.value);
        this.setState({
            valorInput: evento.target.value 
        },
        //Filtrar
        () => this.props.filtrarPorNombre(this.state.valorInput)
        )
    }


    render(){
        return(
    <header>
        <h1>Título/ Nombre de la app</h1>
        <section>
            <p>Ordenar ASC/ DESC</p>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>

            <form onSubmit= {(evento) => this.prevenirSubmit(evento)}>
                <input onChange={(evento)=> this.capturaInput(evento)} type="text" name="search" id="" placeholder="Search"/>
                {/* <h3> {this.state.valorInput}</h3> */}
                <button type="submit"><i className="fas fa-search">Buscar</i></button>
            </form>
        </section>
    </header>
        )
    }
}