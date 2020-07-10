import React from 'react';
import './App.scss';
import Conteiner from "react-bootstrap/Container";
import GalleryPageContainer from './app-components/GalleryPage/GalleryPageContainer';

const App = () => {
  return (
    <div className='App'>
      <header className='app-header'>
        <Conteiner><h1>Тестовое задание</h1></Conteiner>
      </header>
      <Conteiner>
        <GalleryPageContainer />
      </Conteiner>
      <footer></footer>
    </div>
  );
}

export default App;
