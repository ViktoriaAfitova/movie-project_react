import React from 'react';
import { Route, Routes } from "react-router-dom";
import Trending from '../pages/Trending/Trending';
import Tv from '../pages/Tv/Tv';
import Movies from '../pages/Movies/Movies';
import Search from '../pages/Search/Search';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Trending/>} exact/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/Tv' element={<Tv/>}/>
      <Route path='/search' element={<Search/>} />
    </Routes>
  )
}

export default AppRouter;