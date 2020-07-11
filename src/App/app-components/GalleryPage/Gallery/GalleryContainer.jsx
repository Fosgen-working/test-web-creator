import { connect } from 'react-redux';
import Gallery from './Gallery';


const mapStateToProps = (state) => {

    return {
        galleryData: state.galleryPage.dataGallery
    };
};

export default connect(mapStateToProps)(Gallery);