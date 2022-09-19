import React from "react";
import { Link } from "react-router-dom";

import Perfil from "../Perfil";

const ListadoPerfiles = (props) => {
  return (
    <div className="flex">
      { props.perfiles?.map((perfil) => (
        <Link
          to='/catalogo'
        >
          <Perfil
            nombre={perfil.nombre}
            color={perfil.color}
          />
        </Link>
      ))}
    </div>
  )
}

export default ListadoPerfiles;
