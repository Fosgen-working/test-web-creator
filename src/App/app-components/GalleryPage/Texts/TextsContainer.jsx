import React from 'react';
import { connect } from 'react-redux';
import Gallery from './Texts';


const mapStateToProps = (state) => {

    return {
        galleryData: state.galleryPage.dataTexts
    };
};

export default connect(mapStateToProps)(Texts);