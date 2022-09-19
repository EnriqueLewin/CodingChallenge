import React from 'react';
import Pelicula from '../Pelicula';

const ListadoPeliculas = (props) => {
  return (
    <div className='mt-2'>
      <h1 className='font-bold text-white'>{props.nombre}</h1>
      <div className="flex">
        {props.peliculas?.map((pelicula) => (
          <Pelicula
            data={pelicula}
          />
        ))}
      </div>
    </div>
  )
};

export default ListadoPeliculas;
