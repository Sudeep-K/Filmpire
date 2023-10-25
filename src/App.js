import { Routes, Route } from 'react-router-dom';
import './App.css';
import { CssBaseline } from '@mui/material';

import { Actors, MovieInformation, Movies, Profile } from './pages';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route exact path='/movie/:id' element={<MovieInformation />} />
          <Route exact path='/actors/:id' element={<Actors />} />
          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
