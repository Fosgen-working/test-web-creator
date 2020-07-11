import React from 'react';
import * as axios from 'axios';
import GalleryPage from './GalleryPage';
import Preloader from '../Preloader/Preloader';

class GalleryPageAPI extends React.Component {
    componentDidMount() {
        this.props.togglePage(false);
        this.props.toggleForms(false);
        axios.get('https://gist.githubusercontent.com/alexandrov-va/7f353ca822d074d7ce22d3af3d13696f/raw/0907091de6fedf6153cdb718f32a4215dc2c53cf/page.json')
            .then(response => {
                this.props.setPage(response.data);
                this.props.setForms(response.data.form.fields);
            });
    }

    render() {
        let page = (this.props.isFetchingPage && this.props.isFetchingForms) ? <GalleryPage /> : <Preloader />;
        return page;
    }
}

export default GalleryPageAPI;