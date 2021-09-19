import React, { Component } from "react";
import "./style.css";

export default class Buscador extends Component{
    constructor(){
        super();
        //Valor inicial del estado
        this.state= {
            valorInput: ""
        }
    }
    
   
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
        //Funcion callback que se ejecuta inmediatamente despues de actualizar el estado
        () => this.props.filtrarPorNombre(this.state.valorInput)
        )
    }


    render(){
        return(
    <div>
        <section>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>

            <form className="formbuscar" onSubmit= {(evento) => this.prevenirSubmit(evento)}>
                <input className="inputbuscar" onChange={(evento)=> this.capturaInput(evento)} type="text" name="search" id="" placeholder="Buscar..."/>
                {/* <h3> {this.state.valorInput}</h3> */}
                <button className="botonbuscar"type="submit"><i className="fas fa-search">Buscar</i></button>
            </form>
        </section>
    </div>
        )
    }
}