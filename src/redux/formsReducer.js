const SET_FORMS = 'SET_FORMS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const UPDATE_TITLES_FIELDS = 'UPDATE_TITLES_FIELDS';

let initialState = {
    isFetching: false,
};


const formsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FORMS:
            let stateCopy = { ...state };
            action.dataForms.forEach(item => {
                let objectElement = item.name;
                stateCopy[objectElement] = { 'value': '', 'required': item.required };
            });
            stateCopy.isFetching = true;
            return stateCopy;
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case UPDATE_TITLES_FIELDS:
            let stateCopyTitles = { ...state };
            stateCopyTitles[action.nameFields] = { ...state[action.nameFields] };
            stateCopyTitles[action.nameFields].value = action.textFields;

            return stateCopyTitles;
        default:
            return state;
    }
}

export const setFormsAC = (data) =>
    ({ type: SET_FORMS, dataForms: data });

export const toggleIsFetchingFormsAC = (isFetching) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching });

export const updateTitlesFieldsAC = (textFields, nameFields) =>
    ({ type: UPDATE_TITLES_FIELDS, textFields, nameFields });

export default formsReducer;