import React from 'react';

class History extends React.Component{
    render(){
        return(
            <div className="recordatorio">
                <p>Seleccion anterior: {this.props.anterior}</p>
                <p>Historial:</p>
                <ul>
                    {this.props.historial.map((item, i)=> (<li key={i}>{item}</li>))}
                </ul>
            </div>
        )
    }

}

export default History;