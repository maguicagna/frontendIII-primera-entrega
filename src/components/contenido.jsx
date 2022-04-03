import React from "react";
import data from "./data";
import Options from "./options"
import History from "./history";


class Contenido extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            contador : 0,
            seleccionAnterior : "",
            history : [],

        }
        this.handleClick = this.handleClick.bind(this)
    }

    
    handleClick(e){
        const seleccion = e.target.id;
        if (this.state.contador >= 7){
            alert("FIN");
        }else if(seleccion === "A" && this.state.seleccionAnterior !== "A"){
            this.setState({
                contador : this.state.contador + 1,
                seleccionAnterior : "A",
            });
        } else if(seleccion === "A" && this.state.seleccionAnterior === "A"){
            this.setState({
                contador : this.state.contador + 2,
                seleccionAnterior : "A",
            });
        }else if (seleccion === "B" && this.state.seleccionAnterior === "A"){
            this.setState({
                contador : this.state.contador + 3,
                seleccionAnterior : "B",
            })
        }else if(seleccion === "B"){
            this.setState({
                contador : this.state.contador + 2,
                seleccionAnterior : "B",
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
                <h2 className="historia">{data[this.state.contador].historia}</h2>
                <Options 
                opcion={data[this.state.contador].opciones} 
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