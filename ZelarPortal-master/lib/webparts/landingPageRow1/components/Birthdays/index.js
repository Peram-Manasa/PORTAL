import * as React from "react";
import "../LandingPage/LandingPageRow1.module.scss";
import MonthSection from "./MonthSection";
const Birthday = (props) => {
    var _a;
    return (React.createElement("section", null, props.data && ((_a = props.data) === null || _a === void 0 ? void 0 : _a.map((month, index) => (React.createElement(MonthSection, { key: month.title, data: month, index: index }))))));
};
export { Birthday };
//# sourceMappingURL=index.js.map