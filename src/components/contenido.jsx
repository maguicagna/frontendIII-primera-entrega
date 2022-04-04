import React from "react";
import data from "./data";
import Options from "./options"
import History from "./history";


class Contenido extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            contador : 1,
            historiaActual: this.buscarHistoriaPorId("1"), 
            seleccionAnterior : "",
            history : [],

        }
        this.handleClick = this.handleClick.bind(this)
    }

    

    buscarHistoriaPorId = (id) => {
        const historiaActual = data.filter(item => item.id === id);
        return historiaActual[0];

    }

    handleClick(e){
        const seleccion = e.target.id;
        //const opcion = 
        if(this.state.contador === 5){
            alert("Fin");
        }else{
            this.setState( {
                contador : this.state.contador+1,
                historiaActual : this.buscarHistoriaPorId(this.state.contador+1+seleccion),
                seleccionAnterior: seleccion.toUpperCase(),
            })
        }

    }


    componentDidUpdate(prevState){
        if(prevState.contador !== this.state.contador){
            this.state.history.push(this.state.seleccionAnterior);
        }
    }


    render(){
        return(
            <div className="layout">
                <h2 className="historia">{this.state.historiaActual.historia}</h2>
                <Options 
                opcion={this.state.historiaActual.opciones} 
                handleClick={this.handleClick}
                />
                <History 
                anterior={this.state.seleccionAnterior} 
                historial={this.state.history}
                />
            </div>
            
        )
    }


}

export default Contenido;