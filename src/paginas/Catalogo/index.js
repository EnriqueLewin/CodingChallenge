import React, { useEffect, useState } from 'react';
import ListadoPeliculas from '../../componentes/ListadoPeliculas';

const Catalogo = () => {
  const [populares, setPopulares] = useState([]);
  const [rankeadas, setRankeadas] = useState([]);
  const [estrenos, setEstrenos] = useState([]);
  const [cartelera, setCartelera] = useState([]);

  useEffect(() => {
    getPopulares();
    getRankeadas();
    getEstrenos();
    getCartelera();
  }, [])

  const getPopulares = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=35ae0ab849a7893db02cf33f003e017f')
      .then(response => response.json())
      .then((peliculas) => {
        setPopulares(peliculas.results)
      })
      .catch(() => {

      })
  }

  const getRankeadas = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=35ae0ab849a7893db02cf33f003e017f')
      .then(response => response.json())
      .then((peliculas) => {
        setRankeadas(peliculas.results)
      })
      .catch(() => {
        
      })
  }

  const getEstrenos = () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=35ae0ab849a7893db02cf33f003e017f')
    .then(response => response.json())  
    .then((peliculas) => {
        setEstrenos(peliculas.results)
      })
      .catch(() => {
        
      })
  }

  const getCartelera = () => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=35ae0ab849a7893db02cf33f003e017f')
      .then(response => response.json())
      .then((peliculas) => {
        setCartelera(peliculas.results);
      })
      .catch(() => {
        
      })
  }

  return (
    <div className='flex flex-col'>
      <ListadoPeliculas
        nombre='Populares'
        peliculas={populares}
      />
      <ListadoPeliculas
        nombre='Mejor Rankeadas'
        peliculas={rankeadas}
      />
      <ListadoPeliculas
        nombre='Próximos estrenos'
        peliculas={estrenos}
      />
      <ListadoPeliculas
        nombre='En cartelera'
        peliculas={cartelera}
      />
    </div>
  )
}

export default Catalogo;
