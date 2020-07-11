import { connect } from 'react-redux';
import Texts from './Texts';


const mapStateToProps = (state) => {

    return {
        textsData: state.galleryPage.dataTexts
    };
};

export default connect(mapStateToProps)(Texts);