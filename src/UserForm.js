import React from 'react';
import Request from 'request';

import NavBar from "./NavBar";
import * as C from './C';
import Gallery from "./Gallery"

const DEFAULT_IMAGES = [
    {id: '1470619549108-b85c56fe5be8', caption: 'Photo by Alan Emery', orientation: 'square', useForDemo: true}, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
    {id: '1471079502516-250c19af6928', caption: 'Photo by Jeremy Bishop', orientation: 'landscape', useForDemo: true}, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
    {id: '1454023492550-5696f8ff10e1', caption: 'Photo by Jessica Weiller', orientation: 'landscape', useForDemo: true}, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
    {id: '1470854989922-5be2f7456d78', caption: 'Photo by Piotr Łaskawski', orientation: 'landscape', useForDemo: true}, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
    {id: '1470317596697-cbdeda56f999', caption: 'Photo by Michel Bosma', orientation: 'landscape', useForDemo: true}, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

function makeUnsplashSrc(id) {
    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet(id, size) {
    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail(id, orientation = 'landscape') {
    const dimensions = orientation === 'square'
        ? 'w=300&h=300'
        : 'w=240&h=159';

    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

class UserGalleryForm extends React.Component {


    constructor() {
        super();
        this.state = {
            user: JSON.parse(localStorage.user),
            images: []
        };
        this.getImages = this.getImages.bind(this)
    }

    getImages() {
        // let options = {
        //     url: C.IMAGE_STORE_DEV + '/v1/image/?username'+this.state.user['username'],
        //     headers: {'Origin': window.location.origin}
        // };
        //
        // function cb(error, response, body) {
        //     console.log(response.statusCode);
        //     if (!error && response.statusCode == 200) {
        //         console.log(body);
        //         this.setState = {
        //
        //         }
        //     }
        // }
        //
        // Request.get(options,cb)
    }

    render() {
        return (
            <div onLoad={this.getImages}>
                <NavBar username={this.state.user['username']}/>
                <Gallery images={[
                    {
                        src: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        thumbnail: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        showThumbnails: 'true'
                    },
                    {
                        src: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        thumbnail: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        showThumbnails: 'true'
                    },
                    {
                        src: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        thumbnail: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        showThumbnails: 'true'
                    },
                    {
                        src: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        thumbnail: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        showThumbnails: 'true'
                    },
                    {
                        src: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        thumbnail: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        showThumbnails: 'true'
                    },
                    {
                        src: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        thumbnail: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        showThumbnails: 'true'
                    },
                    {
                        src: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        thumbnail: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        showThumbnails: 'true'
                    },
                    {
                        src: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        thumbnail: 'http://localhost:1113/v1/image/ihor_1478694773198',
                        showThumbnails: 'true'
                    }
                ]}/>
            </div>
        )
    }
}


export default UserGalleryForm