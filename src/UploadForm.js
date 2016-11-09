import Request from "request";
import React from "react";
import {hashHistory} from "react-router";

import NavBar from "./NavBar"
import C from "./C"

class UploadForm extends React.Component {


    constructor() {
        super();
        this.state = {
            user: JSON.parse(localStorage.user),
            file: '',
            imagePreviewUrl: '',
            base65Image: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let options = {
            url: C.IMAGE_STORE_DEV + '/v1/image/' + this.state.user['username'],
            type: 'text/plain',
            body: this.state.base65Image,
            headers: {'Origin': window.location.origin}
        };

        function cb(error, response, body) {
            console.log(response.statusCode);
            if (!error && response.statusCode == 200) {
                console.log(body);
                localStorage.setItem('user', JSON.stringify(body));
                hashHistory.push('/user');
            }
        }

        Request.post(options, cb)
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                base65Image: reader.result.split(',')[1]
            });
        };
        reader.readAsDataURL(file)
    }


    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl}/>);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent">
                <NavBar username={this.state.user['username']}/>
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" type="file" onChange={this.handleImageChange}/>
                    <button className="submitButton" type="submit" onClick={this.handleSubmit}>Upload Image
                    </button>
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        );
    }
}

export default UploadForm