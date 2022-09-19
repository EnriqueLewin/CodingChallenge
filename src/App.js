import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './paginas/Home';
import SelectorPerfiles from './paginas/SelectorPerfiles';
import Catalogo from './paginas/Catalogo';
import Pelicula from './paginas/Pelicula';

import './index.css';

function App() {
  return (
    <div className='bg-black flex items-center justify-center h-screen w-full'>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/selector'
          element={<SelectorPerfiles/>}
        />
        <Route
          path='/catalogo'
          element={<Catalogo/>}
        />
        <Route
          path='pelicula/:id'
          element={<Pelicula/>}
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
