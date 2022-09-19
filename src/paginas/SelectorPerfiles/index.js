import React, { useEffect, useState } from 'react';
import ListadoPerfiles from '../../componentes/ListadoPerfiles';

const SelectorPerfiles = () => {

  const [perfiles, setPerfiles] = useState([]);

  useEffect(()=> {
    const perfilesUsuario = [
      { nombre: 'Padres', color: 'bg-red-100', imagen: '....'},
      { nombre: 'Hermano', color: 'bg-yellow-100', imagen: '....'},
      { nombre: 'Zanguijuela 1', color: 'bg-green-100', imagen: '....'},
    ];
    setPerfiles(perfilesUsuario);
  }, []);

  return (
    <>
      <ListadoPerfiles
        perfiles={perfiles}
      />
    </>
  )
}

export default SelectorPerfiles;
