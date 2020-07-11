import React from 'react';
import './GalleryPage.scss';
import GalleryContainer from './Gallery/GalleryContainer';
import TextsContainer from './Texts/TextsContainer';
import FormContainer from './Form/FormContainer';

const PageGallery = (props) => {
    return (
        <div className='GalleryPage'>
            <GalleryContainer />
            <TextsContainer />
            <FormContainer />
        </div>
    );
}

export default PageGallery;