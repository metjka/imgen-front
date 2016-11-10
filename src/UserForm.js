import React from 'react';
import Request from 'request'

import NavBar from "./NavBar";
import * as C from './C';
import Gallery from "./Gallery"

class UserGalleryForm extends React.Component {

    constructor() {
        super();
        this.state = {
            user: JSON.parse(localStorage.user),
            images: []
        };
    }

    componentDidMount() {
        let options = {
            url: C.IMAGE_STORE_DEV + '/v1/image/?username=' + this.state.user['username'],
            headers: {'Origin': window.location.origin}
        };

        var self = this;

        function cb(error, response, body) {
            console.log(response.statusCode);
            if (!error && response.statusCode == 200) {
                let array = JSON.parse(body);
                var igi  = array.map((obj) => {

                    let imgLink = C.IMAGE_STORE_DEV + obj;
                    return {src: imgLink, thumbnail: imgLink, showThumbnails: 'true'};
                });

                console.log("Callback", igi);
                self.setState({images:igi}, ()=>{
                    console.log(JSON.stringify(self.state))
                });

            }
        }

        Request.get(options, cb);

    }


    render() {
        let i = this.state.images;
        console.log('render', i);
        return (
            <div >
                <NavBar username={this.state.user['username']}/>
                <Gallery images={this.state.images}/>
            </div>
        )
    }
}

export default UserGalleryForm