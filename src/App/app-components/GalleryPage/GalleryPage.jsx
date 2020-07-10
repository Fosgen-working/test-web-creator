import React from 'react';
import './GalleryPage.scss';
import GalleryContainer from './Gallery/GalleryContainer';

const PageGallery = (props) => {
    return (
        <div className='GalleryPage'>
            <GalleryContainer />
        </div>
    );
}

export default PageGallery;