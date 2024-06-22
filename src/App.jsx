import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Sesuaikan path sesuai dengan struktur proyek Anda
import Home from './pages/Home';
import Surah from './pages/Surah';
import Juz from './pages/Juz';
import Features from './pages/features';
import Loading from './components/Loading';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='w-full h-full flex flex-col'>
      <Header />
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/contact' element={<Loading />} /> {/* Halaman loading untuk Kontak */}
          <Route path='/surah/:id' element={<Surah />} />
          <Route path='/juz/:id' element={<Juz />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Home />} /> {/* Route default */}
        </Routes>
      </div>
    </div>
  );
}

export default App;