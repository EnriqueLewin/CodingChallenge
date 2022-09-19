import React from 'react';
import { Link } from 'react-router-dom'

const Pelicula = (props) => {
  return (
    <Link
      to={`/pelicula/${props.data?.id}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${props.data?.poster_path}`}
        style={{ minWidth: '300px'}}
        className="h-64 min-w-48"
        alt="image"
      />
    </Link>
  )
}

export default Pelicula;
