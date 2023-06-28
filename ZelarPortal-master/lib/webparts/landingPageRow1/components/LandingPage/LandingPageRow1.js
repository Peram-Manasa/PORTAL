import * as React from "react";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import { getSP } from "../pnpConfig";
// import Announcements from "./Announcements";
import News from "../News/News";
//import { MonthSection } from "./MonthSection";
import { Birthday } from "../Birthdays";
import { SharePointService } from "../Birthdays/Utils/SharepointService";
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
const LandingPageRow1 = (props) => {
    const [announcementsdata, setAnnouncementsData] = React.useState();
    const [newsdata, setNewsData] = React.useState();
    const [birthdaydata, setBirthdayData] = React.useState();
    const caml = {
        ViewXml: "<View><ViewFields><FieldRef Name='Title' /></ViewFields><RowLimit>5</RowLimit></View>",
    };
    // const caml2: ICamlQuery = {
    //   ViewXml:
    //     "<View><ViewFields><FieldRef Name='Title' /></ViewFields><ViewFields><FieldRef Name='Employee' /></ViewFields><RowLimit>5</RowLimit></View>",
    //};
    const getAnnouncementsData = async () => {
        let _sp = getSP(props.context);
        const list = await _sp.web.lists.getByTitle("Announcements");
        var r = await list.getItemsByCAMLQuery(caml);
        setAnnouncementsData(r);
        console.log(announcementsdata);
    };
    const getNewsData = async () => {
        let _sp = getSP(props.context);
        const list1 = await _sp.web.lists.getByTitle("News1");
        var r2 = await list1.getItemsByCAMLQuery(caml);
        setNewsData(r2);
        console.log(newsdata);
    };
    const getBirthdayData = async () => {
        let _sp = getSP(props.context);
        const sharePointService = new SharePointService(_sp);
        const birthdays = await sharePointService.GetBirthdays();
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
    return (React.createElement("div", { className: "mainContainer" },
        React.createElement("div", { className: "Containers" },
            React.createElement("div", null,
                React.createElement(Announcements, { data: announcementsdata })),
            React.createElement("div", null,
                React.createElement(Birthday, { data: birthdaydata })),
            React.createElement("div", null,
                React.createElement(News, { data: newsdata })))));
};
export default LandingPageRow1;
//# sourceMappingURL=LandingPageRow1.js.map