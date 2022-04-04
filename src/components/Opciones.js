import React, { Component } from "react";

export default class Opciones extends Component {

    render() {
        const {opcion} = this.props
        const {eleccionDeOpcion} = this.props
        return (
            <section>
                <div>
                    <button onClick={() =>{eleccionDeOpcion("a")}}>A</button> <h2>{opcion.opciones.a}</h2>
                </div>
                <div>
                    <button onClick={() =>{eleccionDeOpcion("b")}}>B</button> <h2>{opcion.opciones.b}</h2>
                </div>
            </section>
        );
    }
}

