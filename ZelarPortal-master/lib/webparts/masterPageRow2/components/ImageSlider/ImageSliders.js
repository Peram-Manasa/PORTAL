import * as React from 'react';
import "../MasterPageRow2.scss";
import "./ImageSlider.scss";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "@pnp/sp/profiles";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
const ImageSliders = (props) => {
    console.log(props.data);
    let arr = [];
    arr = props.data;
    console.log(arr);
    return (React.createElement(React.Fragment, null,
        React.createElement(Slide, null, props.data && props.data.map((x) => {
            return (React.createElement("div", { className: 'each-slide' },
                React.createElement("img", { src: x })));
        }))));
};
export default ImageSliders;
//# sourceMappingURL=ImageSliders.js.map