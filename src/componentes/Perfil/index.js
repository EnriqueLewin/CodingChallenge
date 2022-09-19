import React from "react";

const Perfil = (props) => {
  return(
    <div className={`${props.color} flex ml-4 mr-4 h-40 w-40`}>
      <h3>{props.nombre}</h3>
    </div>
  )

}

export default Perfil;
