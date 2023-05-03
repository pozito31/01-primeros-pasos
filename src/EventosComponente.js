import React from 'react';

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al botón !!" + nombre);
    }

    function hasDadoDobleClick(e) {
        alert("Has dado doble click!!!");
    }

    const hasEntrado = (e) => {
        alert("Has entrado a la caja con el mouse!!");
    }

    const hasSalido = (e) => {
        alert("Has salido de la caja con el mouse!!");
    }

    const estasDentro = (e) => {
        console.log("Estas dentro del input, mete tu nombre!!!");
    }

    const estasFuera = (e) => {
        console.log("Estas fuera del input");
    }

    return (
        <div>
            <h1>Eventos en React</h1>
            <p>
                {/* Evento click */}
                <button onClick={e => hasDadoClick(e, "Jessica")}>Dame click!</button>
            </p>
            <p>
                {/* Evento doble click */}
                <button onDoubleClick={hasDadoDobleClick}>Dame doble click!</button>
            </p>
            <div id="caja"
                onMouseEnter={hasEntrado}
                onMouseLeave={hasSalido}
            >
                {/* Evento onMouserEnter, onMouseLeave */}
                Pasa por encima!!!
            </div>
            <p>
                <input type="text"
                    onBlur={estasFuera}
                    onFocus={estasDentro}
                    placeholder="Introduce tu nombre..." />
            </p>
        </div>
    );
}
