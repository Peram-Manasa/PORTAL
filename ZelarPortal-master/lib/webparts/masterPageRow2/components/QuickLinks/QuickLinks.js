// import { SPFI } from '@pnp/sp';
import * as React from 'react';
// import { getSP } from '../pnpConfig'
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import './QuickLinks.scss';
const QuickLinks = (props) => {
    let arr = [];
    arr = props.data;
    console.log(arr);
    return (React.createElement(React.Fragment, null, arr === null || arr === void 0 ? void 0 : arr.map((x) => {
        return (React.createElement("div", { className: "row2container__part2__item" },
            React.createElement("a", { className: 'actualLink', href: x.Url },
                React.createElement("div", { className: "linkBody" },
                    React.createElement("div", { className: "linkIcon" },
                        React.createElement("img", { src: x.Icon })),
                    React.createElement("div", { className: "linkTitle" }, x.Title)))));
        // console.log(x.Title)
    })));
};
export default QuickLinks;
//# sourceMappingURL=QuickLinks.js.map