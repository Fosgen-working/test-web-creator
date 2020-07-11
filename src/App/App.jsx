import React from 'react';
import './App.scss';
import Conteiner from "react-bootstrap/Container";
import { Route, BrowserRouter } from 'react-router-dom';
import GalleryPageContainer from './app-components/GalleryPage/GalleryPageContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='app-header'>
          <Conteiner><h1>Тестовое задание</h1></Conteiner>
        </header>
        <Conteiner>
          <Route path='/gallery' render={() => <GalleryPageContainer />} />
          <Route path='/' render={() => <GalleryPageContainer />} />
        </Conteiner>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
