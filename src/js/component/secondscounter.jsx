import React from "react";

const SecondsCounter = (props) => {
    let decenasSegundos = 0;

    if (props.seconds % 10 && props.seconds != 0) {
        decenasSegundos++;
    }

    return (
        <>
            <div className="container-fluid m-5 w-75 text-light bg-dark border">
                <h1 className="row ms-4 p-2">Seconds Counter</h1>
                <div className="row ms-4 p-1">
                    <i className="display-5 col-1 mt-1 fa-regular fa-clock shadow-lg"></i>
                    <h1 className="numero display-1 col-1 rounded">{props.hora3}</h1>
                    <h1 className="numero display-1 col-1 rounded">{props.hora2}</h1>
                    <h1 className="numero display-1 col-1 rounded">{props.hora1}</h1>
                    <h1 className="numero display-1 col-1 rounded">{props.centenaSeconds}</h1>
                    <h1 className="numero display-1 col-1 rounded">{props.decenaSeconds}</h1>
                    <h1 className="numero display-1 col-1 mb-5 rounded shadow-lg ">{props.seconds}</h1>
                </div>
            </div>
        </>
    );
}

export default SecondsCounter;