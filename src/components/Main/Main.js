import React, { Component } from "react";
import Tarjeta from "../Tarjeta/Tarjeta";
import Buscador from "../Buscador/Buscador";
import './style.css'; 

let key = "3801289076602860794bddb717c8f4f5"
let api =`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            pelicula:[],
            filterPeliculas: [],
            mensaje:"Cargando...",
            page: 2,
            direccion: "filas",
            ordenarPor:"columna",
        }
    }
    componentDidMount(){
        fetch(api)
        .then(response => { return response.json() })
        .then(data => {
            //console.log(data)
            this.setState({
                pelicula:data.results, //Va a estar fijo
                filterPeliculas:data.results, //Va a ir cambiando
            })
        })
        .catch(error => console.log(error));
    }

    eliminarPelicula(id){
        console.log(id)
        let peliculaFiltradas = this.state.pelicula.filter(pelicula => pelicula.id !== id)
        console.log(peliculaFiltradas); 
        this.setState({
            pelicula:peliculaFiltradas,
            filterPeliculas:peliculaFiltradas,
    })
    }

    filtrarPorNombre(nombreAFiltrar){
        console.log(nombreAFiltrar);
        const arrayFiltrada = this.state.pelicula.filter(
            pelicula => pelicula.title.toLowerCase().includes(nombreAFiltrar.toLowerCase())
        );
        if(nombreAFiltrar === ""){
            this.setState({
                filterPeliculas: this.state.pelicula,
                mensaje:"Cargando...",
            })
        }else if(arrayFiltrada.length <= 0){
                this.setState({
                    mensaje: "No hay datos que coincidan con su búsqueda.",
                    filterPeliculas: []
                    
                })
        }else {
            this.setState({
                filterPeliculas: arrayFiltrada,
                mensaje:"Cargando...",
            })
        } 
    }
    agregarPelicula(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${this.state.page}&top=10&index=${this.state.index}`)
        .then(response => response.json())
        .then(data=>{
            let arrayPrevio = this.state.pelicula;
            let arrayActualizado = arrayPrevio.concat(data.results);
            let paginaActualizado = this.state.page + 1
            this.setState({
                pelicula:arrayActualizado,
                filterPeliculas:arrayActualizado,
                pagina: paginaActualizado,
            })
        })
    }
    ordenarPelicula(){
        if(this.state.direccion === 'filas'){
            this.setState({
                direccion: 'columna',
                ordenarPor:'filas'
            })
        }else{
            this.setState({
                direccion:'filas',
                ordenarPor:'columna',
            })
        }
    }
  
    render(){
        console.log(this.state.pelicula)
        //console.log(this.state.mensaje)
        //console.log(arrayFiltrada)
        //console.log(filterPeliculas)
        //console.log(this.state.pelicula[0])
    return(
        <div>
            <header className="cabezera">
                <nav className="nav">
                    <img className="logo" src="../imagenes/logo copy.png" alt="logo"/>
                    <ul className="opciones">
                        <li className="ordenar"> <button className="boton" onClick={()=>this.ordenarPelicula()}>Ordenar peliculas en {this.state.direccion} </button></li>
                        <li className="agregar"> <button className="boton" onClick={()=>this.agregarPelicula()}>Agregar mas</button></li> 
                    </ul>
                </nav>
                <img className="banner" src="../imagenes/banner corto copy.jpg" alt="banner"/>
            </header>

            <Buscador filtrarPorNombre={(nombreAFiltrar)=>this.filtrarPorNombre(nombreAFiltrar)} />
               
            <main className={this.state.ordenarPor}>
                
                {this.state.filterPeliculas.length === 0 ?
                
                <h2>{this.state.mensaje}</h2>:
                this.state.filterPeliculas.map((pelicula,index)=>{
                    return <Tarjeta
                    key={index}
                    id={pelicula.id}
                    foto={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                    titulo={pelicula.title}
                    descripcion={pelicula.overview}
                    // vermas={(titulo)=>this.expandirPelicula(titulo)}
                    idioma={pelicula.original_language}
                    estreno={pelicula.release_date}
                    popularidad={pelicula.popularity}
                    eliminar={(id)=>this.eliminarPelicula(id)}
                    ></Tarjeta>

                })}
                
            </main>
        </div>
        )
    }
}