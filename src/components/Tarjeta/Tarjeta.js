import React, { Component } from "react";
import './style.css';
export default class Tarjeta extends Component{
    constructor(props){
        super(props);
        this.state={
            clase:'esconder',
            mensaje:"Ver mas"
        };
    }
    handleShow(){
        if(this.state.clase === 'esconder'){
        this.setState({
        clase:'mostrar',
        mensaje:"Ver menos"
        })
    }else{
        this.setState({
            clase:'esconder',
            mensaje:"Ver mas"
        })
    }}
    render(){

        return(
            <div className="contenedorTarjeta">
            <article>
                <section className="navigation">
                    <div>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close"></i>
                </section>
                <main className="tarjetas">
                
                    <img className="foto" src={this.props.foto} alt="Cargando"/>
                    <div className="info">
                    <h3>{this.props.titulo}</h3>
                    <p className="description">{this.props.descripcion}</p>
                    <p className='mas' onClick={()=> this.handleShow()}>{this.state.mensaje}</p>
                    <section className={this.state.clase}>
                        <ul>
                            <li className="masinfo">Idioma original: {this.props.idioma}</li>
                            <li className="masinfo">Fecha de estreno: {this.props.estreno}</li>       
                            <li className="masinfo">Popularidad: {this.props.popularidad}</li>
                        </ul>
                    </section>
                    {/* <a onClick={()=>this.props.vermas(this.props.name)} href="https://www.google.com/?client=safari">Ver más</a> */}
                    <button className="boton"onClick={()=>this.props.eliminar(this.props.id)}>Borrar pelicula</button>
                    </div>
                </main>
            </article>
            </div>
        )
    }

};

