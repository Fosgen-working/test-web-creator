import { connect } from 'react-redux';
import Form from './Form';
import { updateTitlesFieldsAC } from '../../../../redux/formsReducer';


const mapStateToProps = (state) => {

    return {
        formData: state.galleryPage.dataForm,
        fieldsData: state.formsText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTitles: (textFields, nameFields) => {
            dispatch(updateTitlesFieldsAC(textFields, nameFields));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);