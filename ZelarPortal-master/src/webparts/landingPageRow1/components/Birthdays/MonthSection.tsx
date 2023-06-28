import * as React from "react";
import { Persona, PersonaSize } from "@fluentui/react/lib/Persona";
import { BirthdaysMonth } from "./models/BirthdayMonths";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
//import { Carousel, CarouselButtonsLocation, CarouselButtonsDisplay,CarouselIndicatorShape } from "@pnp/spfx-controls-react/lib/Carousel";
//import { ImageFit } from "office-ui-fabric-react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css"
//import { FontSizes } from "office-ui-fabric-react";
import '../LandingPage/Landing.scss'
//import { ISliderCarouselProps } from './ISliderCarouselProps';

interface IMonthSectionProps {
  data: BirthdaysMonth;
  index: number;
  //users:any;
}

const MonthSection = (props: IMonthSectionProps): JSX.Element => {
  return (
    <>
      <div className="rowMain">
      <div className="row2">
            <h2>Birthdays</h2>
          </div>
        <Carousel>
          
          {props.data.users.length === 0 && (
            <div className="birthday">
             
              <Persona
                     primaryText="Next birthday will"
                    secondaryText="be celebrated soon!"
                    size={PersonaSize.size56}
                    styles={{
                      primaryText: {
                        color: "black",
                      },
                      secondaryText: { 
                        color: "black",
                      },
                    }}
            />
            </div>
          )}
          {props.data.users.map((user) => {
            return (
              <Carousel.Item key={user.id}>
                <Carousel.Caption>
                  <div style={{ alignItems: "center" }}>
                    <br />
                    <br />
                  </div>
                </Carousel.Caption>
                <div className="birthday">
                  {/* <ul className="carouseldata">
                    <li>
                      <img
                        className="d-block w-100"
                        width={100}
                        src={`/_layouts/15/userphoto.aspx?UserName=${user.email}`}
                      />
                    </li>
                    <li style={{ display: "flex", flexDirection: "row" }}>
                      <br />
                      <label style={{ color: "black" }}>
                        Wishing you a very happy birthday! --------
                      </label>
                      <label style={{ color: "black" }}>{user.name}</label>{" "}
                    </li>
                  </ul> */}
                  <Persona
                    primaryText="Happy birthday!"
                    secondaryText={user.name}
                    imageUrl={`/_layouts/15/userphoto.aspx?UserName=${user.email}`}
                    imageAlt={user.name}
                    size={PersonaSize.size56}
                    styles={{
                      primaryText: {
                        color: "black",
                      },
                      secondaryText: {
                        color: "black",
                      },
                    }}
                  />
                </div>
              </Carousel.Item>
            ); //return
          })}
        </Carousel>
      </div>
      {/* <div></div> */}
    </>
  );
};

export default MonthSection;
