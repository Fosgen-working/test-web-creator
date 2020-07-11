const SET_GALLERY_PAGE = 'SET_GALLERY_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
CONST UPDATE_TITLES_FIELDS = 'UPDATE_TITLES_FIELDS';

let initialState = {
    isFetching: false,
};


const galleryPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_GALLERY_PAGE:
            const dataFieldsСonstructor = (array) => {
                let object = {};
                array.forEach(item => {
                    let objectElement = item.name;
                    object[objectElement] = { 'value': '', 'required': item.required };
                });
                return object;
            };

            return {
                ...state,
                dataGallery: action.data.components.find(item => item.type === 'GalleryComponent'),
                dataTexts: action.data.components.find(item => item.type === 'GridComponent'),
                dataForm: action.data.form,
                isFetching: true,
                dataFields: dataFieldsСonstructor(action.data.form.fields)
                // У вас в json 2 имя name, поэтому не запишет для первого input
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case UPDATE_TITLES_FIELDS:
            return {
                ...state,
                dataFields: [...dataFields[action.nameFields]]
            };
        default:
            return state;
    }
}

export const setGalleryPageAC = (data) =>
    ({ type: SET_GALLERY_PAGE, data });

export const toggleIsFetchingAC = (isFetching) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching });

export const updateTitlesFieldsAC = (textFields, nameFields) =>
    ({ type: UPDATE_TITLES_FIELDS, textFields, nameFields });

export default galleryPageReducer;