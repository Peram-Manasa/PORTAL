import * as React from "react";
import { Persona, PersonaSize } from "@fluentui/react/lib/Persona";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
//import { Carousel, CarouselButtonsLocation, CarouselButtonsDisplay,CarouselIndicatorShape } from "@pnp/spfx-controls-react/lib/Carousel";
//import { ImageFit } from "office-ui-fabric-react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css"
//import { FontSizes } from "office-ui-fabric-react";
import '../LandingPage/Landing.scss';
const MonthSection = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "rowMain" },
            React.createElement("div", { className: "row2" },
                React.createElement("h2", null, "Birthdays")),
            React.createElement(Carousel, null,
                props.data.users.length === 0 && (React.createElement("div", { className: "birthday" },
                    React.createElement(Persona, { primaryText: "Next birthday will", secondaryText: "be celebrated soon!", size: PersonaSize.size56, styles: {
                            primaryText: {
                                color: "black",
                            },
                            secondaryText: {
                                color: "black",
                            },
                        } }))),
                props.data.users.map((user) => {
                    return (React.createElement(Carousel.Item, { key: user.id },
                        React.createElement(Carousel.Caption, null,
                            React.createElement("div", { style: { alignItems: "center" } },
                                React.createElement("br", null),
                                React.createElement("br", null))),
                        React.createElement("div", { className: "birthday" },
                            React.createElement(Persona, { primaryText: "Happy birthday!", secondaryText: user.name, imageUrl: `/_layouts/15/userphoto.aspx?UserName=${user.email}`, imageAlt: user.name, size: PersonaSize.size56, styles: {
                                    primaryText: {
                                        color: "black",
                                    },
                                    secondaryText: {
                                        color: "black",
                                    },
                                } })))); //return
                })))));
};
export default MonthSection;
//# sourceMappingURL=MonthSection.js.map