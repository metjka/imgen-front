import React, {Component, PropTypes} from 'react';
import {StyleSheet, css} from 'aphrodite';

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };
    }

    renderGallery() {
        const {images} = this.props;

        if (!images) return;

        const gallery = images.map((img, i) => {
            return (
                <a key={img.src}
                    href={img.src}
                    className={css(classes.thumbnail, classes[img.orientation])}
                >
                    <img src={img.thumbnail} className={css(classes.source)}/>
                </a>
            );
        });

        return (
            <div className={css(classes.gallery)}>
                {gallery}
            </div>
        );
    }

    render() {
        return (
            <div className="section">
                {this.props.heading && <h2>{this.props.heading}</h2>}
                {this.props.subheading && <p>{this.props.subheading}</p>}
                {this.renderGallery()}

            </div>
        );
    }
}


Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    heading: PropTypes.string,
    images: PropTypes.array,
    showThumbnails: PropTypes.bool,
    subheading: PropTypes.string,
};

const gutter = {
    small: 2,
    large: 4,
};
const classes = StyleSheet.create({
    gallery: {
        marginRight: -gutter.small,
        overflow: 'hidden',

        '@media (min-width: 500px)': {
            marginRight: -gutter.large,
        },
    },

    // anchor
    thumbnail: {
        boxSizing: 'border-box',
        display: 'block',
        float: 'left',
        lineHeight: 0,
        paddingRight: gutter.small,
        paddingBottom: gutter.small,
        overflow: 'hidden',

        '@media (min-width: 500px)': {
            paddingRight: gutter.large,
            paddingBottom: gutter.large,
        },
    },

    // orientation
    landscape: {
        width: '30%',
    },
    square: {
        paddingBottom: 0,
        width: '40%',

        '@media (min-width: 500px)': {
            paddingBottom: 0,
        },
    },

    // actual <img />
    source: {
        border: 0,
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
        width: 'auto',
    },
});

export default Gallery;