import React, { Component } from "react";
import Historias from "./Historias";
import Opciones from "./Opciones";
import Historial from "./Historial";
import data from "./data"




export default class Conteiner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historial: [],
            escena: 1,
            actual: this.idHistoria("1"),
            seleccionPrevia: ""
        };
    }
    componentDidMount(data){
        if (window.confirm("¿Deseas jugar a este grandioso juego?")) {
            alert("Adelante, be my guest.")
        }else{
            alert("Te lo pierdes")
            window.close()
        }
        ;
    }
    idHistoria = (id) => {
        const arregloData = data.filter(obj => obj.id === id)
        return arregloData[0]
    }

    eleccionDeOpcion = (opcion) => {
        if (this.state.escena < 5) {
            switch (opcion) {
                case "a":
                    this.setState({
                        escena: this.state.escena + 1 ,
                        actual: this.idHistoria(this.state.escena + 1 + opcion),
                        seleccionPrevia: opcion.toUpperCase()
                    })
                    this.state.historial.push("A")
                    break;
                case "b":
                    this.setState({
                        escena: this.state.escena + 1,
                        actual: this.idHistoria(this.state.escena + 1 + opcion),
                        seleccionPrevia: opcion.toUpperCase()
                    })
                    this.state.historial.push("B")
                break;
            
                default:
                    break;
            
        } 
        }else{
            alert("No quedan más elecciones. Gracias por jugar.")
            window.close()
        }
        
    }

    render() { 
        return (
            <>
                <Historias relato={this.state.actual.historia} />
                <Opciones opcion={this.state.actual} eleccionDeOpcion={this.eleccionDeOpcion} />
                <p>Seleccion anterior: {this.state.historial[this.state.historial.length-1]}</p>
                <Historial historial = {this.state.historial}></Historial>
            </>
        );
    }
}
