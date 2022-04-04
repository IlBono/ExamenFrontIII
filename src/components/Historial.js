import React, { Component } from "react";

export default class Historial extends Component {
    render() {
        return (
            <div >
                <h4>Historial de opciones elegidas: {this.props.historial.map((opcion,key)=> (<li key = {key}>{opcion}</li>))} </h4>
            </div>
        );
    }
}