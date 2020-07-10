import React from 'react';
import './GalleryPage.scss';
import GalleryContainer from './Gallery/GalleryContainer';
import TextsContainer from './Texts/TextsContainer';

const PageGallery = (props) => {
    return (
        <div className='GalleryPage'>
            <GalleryContainer />
            <TextsContainer />
        </div>
    );
}

export default PageGallery;