const SET_GALLERY_PAGE = 'SET_GALLERY_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    isFetching: false
};


const galleryPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GALLERY_PAGE:
            return {
                ...state,
                dataGallery: action.data.components.find(item => item.type === 'GalleryComponent'),
                dataTexts: action.data.components.find(item => item.type === 'GridComponent'),
                isFetching: true
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
}

export const setGalleryPageAC = (data) =>
    ({ type: SET_GALLERY_PAGE, data });

export const toggleIsFetchingAC = (isFetching) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching });

export default galleryPageReducer;