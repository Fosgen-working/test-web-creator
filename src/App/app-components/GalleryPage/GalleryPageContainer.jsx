import React from 'react';
import { connect } from 'react-redux';
import { setGalleryPageAC, toggleIsFetchingAC } from '../../../redux/galleryPageReducer';
import GalleryPageAPI from './GalleryPageAPI';

const mapStateToProps = (state) => {

    return {
        isFetching: state.galleryPage.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (data) => {
            dispatch(setGalleryPageAC(data));
        },
        toggle: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPageAPI);
