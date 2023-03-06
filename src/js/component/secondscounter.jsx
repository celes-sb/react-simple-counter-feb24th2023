import React from "react";

const SecondsCounter = (props) => {
    return (
        <>
            <div className="container-fluid text-light bg-dark">
                <div className="row">
                    <i className="icono col-1 fa-regular fa-clock shadow"></i>
                    <h1 className="numero col-1 rounded shadow-sm">{props.hora3}</h1>
                    <h1 className="numero col-1 rounded shadow-sm">{props.hora2}</h1>
                    <h1 className="numero col-1 rounded shadow-sm">{props.hora1}</h1>
                    <h1 className="numero col-1 rounded shadow-sm">{props.centenaSeconds}</h1>
                    <h1 className="numero col-1 rounded shadow-sm">{props.decenaSeconds}</h1>
                    <h1 className="numero col-1 mb-5 rounded shadow-sm">{props.seconds}</h1>
                </div>
            </div>
        </>
    );
}

export default SecondsCounter;