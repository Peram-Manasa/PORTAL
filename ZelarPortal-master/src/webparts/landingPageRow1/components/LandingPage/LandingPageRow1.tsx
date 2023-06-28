import * as React from "react";
import { ICamlQuery } from "@pnp/sp/lists";
import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import { getSP } from "../pnpConfig";
import { ILandingPageRow1Props } from "./ILandingPageRow1Props";
// import Announcements from "./Announcements";
import News from "../News/News";
//import { MonthSection } from "./MonthSection";
import { Birthday } from "../Birthdays";

import { SharePointService } from "../Birthdays/Utils/SharepointService";
import { BirthdaysMonth } from "../Birthdays/models/BirthdayMonths";
import Announcements from "../Announcements/Announcements";
//import News from "./News";
//import Birthday from "./Birthday";
//import { MonthSection } from "./MonthSection";
//import Birthday from "./Birthday";
//import { MonthSection } from "./MonthSection";
//import Birthday from "./Birthday";
//import { MonthSection } from "./MonthSection";
// import "./Landing.scss";
// import Birthday from '../../birthdaysinMonth/Components/Birthday';
// import News from './News';
// import BirthdayinMonth from '../../birthdaysinMonth/Components/BirthdayinMonth';
const LandingPageRow1 = (props: ILandingPageRow1Props) => {
  const [announcementsdata, setAnnouncementsData] = React.useState<any>();
  const [newsdata, setNewsData] = React.useState<any>();

  const [birthdaydata, setBirthdayData] = React.useState<any>();
  const caml: ICamlQuery = {
    ViewXml:
      "<View><ViewFields><FieldRef Name='Title' /></ViewFields><RowLimit>5</RowLimit></View>",
  };

  // const caml2: ICamlQuery = {
  //   ViewXml:
  //     "<View><ViewFields><FieldRef Name='Title' /></ViewFields><ViewFields><FieldRef Name='Employee' /></ViewFields><RowLimit>5</RowLimit></View>",
  //};
  const getAnnouncementsData = async () => {
    let _sp: SPFI = getSP(props.context);
    const list = await _sp.web.lists.getByTitle("Announcements");
    var r = await list.getItemsByCAMLQuery(caml);
    setAnnouncementsData(r);
    console.log(announcementsdata);
  };

  const getNewsData = async () => {
    let _sp: SPFI = getSP(props.context);
    const list1 = await _sp.web.lists.getByTitle("News1");
    var r2 = await list1.getItemsByCAMLQuery(caml);
    setNewsData(r2);
    console.log(newsdata);
  };

  const getBirthdayData = async () => {
    let _sp: SPFI = getSP(props.context);
    const sharePointService = new SharePointService(_sp);
    const birthdays: Array<BirthdaysMonth> =
      await sharePointService.GetBirthdays();
    // const elementProps: IBirthdaysPerMonthProps = {
    //   data: birthdays,
    // };
    setBirthdayData(birthdays);
  };

  React.useEffect(() => {
    const execute = async () => {
      await getAnnouncementsData();
      await getNewsData();
      await getBirthdayData();
    };
    execute();
  }, []);
  return (
    <div className="mainContainer">
      <div className="Containers" >
        <div>
          <Announcements data={announcementsdata} />
        </div>
        <div>
          <Birthday data={birthdaydata} />
        </div>
        <div>
          <News data={newsdata} />
        </div>
      </div>
    </div>
  );
};
export default LandingPageRow1;
