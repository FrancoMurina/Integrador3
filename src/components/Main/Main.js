import React, { Component } from "react";
import Tarjeta from "../Tarjeta/Tarjeta"

let key = "3801289076602860794bddb717c8f4f5"
let api =`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            pelicula:[]
        }
    }
    componentDidMount(){
        fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                pelicula:data.results,
                filteredPelicula:data.results,
            })
        })
        .catch(error => console.log(error));
    }
    expandirPelicula(){

    }
    eliminarPelicula(id){
        let peliculaFiltradas = this.state.pelicula.filter(pelicula => pelicula.id !== id)
        console.log(peliculaFiltradas); 
        this.setState({
            pelicula:peliculaFiltradas,
            filteredPelicula:peliculaFiltradas,
    })
}

    render(){
        console.log(this.state.pelicula)
        //console.log(this.state.pelicula[0])
    return(
            <main>
                
                <h4>Cargando... </h4>
                {this.state.pelicula.map((pelicula,index)=>{
                    return <Tarjeta
                    key={index}
                    foto={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                    titulo={pelicula.title}//Funciona
                    descripcion={pelicula.overview}//Funciona
                    // vermas={(titulo)=>this.expandirPelicula(titulo)}
                    idioma={pelicula.original_language}
                    estreno={pelicula.release_date}
                    popularidad={pelicula.popularity}
                    eliminar={(id)=>this.eliminarPelicula(id)}
                    ></Tarjeta>
                })}
                
            </main>
        )
    }
}