/* eslint-disable no-unused-vars */
//Importar modulos de react/dependencias
import React from "react";

//Funcion del componente
const MiComponente = () => {
    let nombre = "Jessica";
    let web = "victorroblesweb.es";

    let usuario = {
        nombre: "Jessica",
        apellidos: "Pozo",
        web: "victorroblesweb.es"
    };

    return (
        <div className="mi-componente">
            <hr />
            <h2>Componente creado</h2>
            <h3>Datos del usuario: </h3>
            <ul>
                <li>Nombre: { usuario.nombre }</li>
                <li>Apellidos: { usuario.apellidos }</li>
                <li>Web: { usuario.web }</li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </div>
    );
};


//Export
export default MiComponente;