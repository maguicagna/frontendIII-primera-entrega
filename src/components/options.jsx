import React from "react";

class Options extends React.Component{
    render(){
        return(
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={this.props.handleClick}>A</button>
                    <h4>{this.props.opcion.a}</h4>            
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={this.props.handleClick}>B</button>
                    <h4>{this.props.opcion.b}</h4>
                </div>
            </div>

        )
    }

}

export default Options;