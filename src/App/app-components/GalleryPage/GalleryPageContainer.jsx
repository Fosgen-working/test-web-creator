import React from 'react';
import { connect } from 'react-redux';
import { setGalleryPageAC, toggleIsFetchingPageAC } from '../../../redux/galleryPageReducer';
import { toggleIsFetchingFormsAC, setFormsAC } from '../../../redux/formsReducer';
import GalleryPageAPI from './GalleryPageAPI';

const mapStateToProps = (state) => {

    return {
        isFetchingPage: state.galleryPage.isFetching,
        isFetchingForms: state.formsText.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (data) => {
            dispatch(setGalleryPageAC(data));
        },
        setForms: (data) => {
            dispatch(setFormsAC(data));
        },
        togglePage: (isFetching) => {
            dispatch(toggleIsFetchingPageAC(isFetching));
        },
        toggleForms: (isFetching) => {
            dispatch(toggleIsFetchingFormsAC(isFetching));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPageAPI);
