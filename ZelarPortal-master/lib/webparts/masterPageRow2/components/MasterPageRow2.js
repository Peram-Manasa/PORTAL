import * as React from "react";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import "@pnp/sp/site-users/web";
import { getSP } from "./pnpConfig";
import ImageSliders from "./ImageSlider/ImageSliders";
import Feedback from "./Feedback/Feedback";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import QuickLinks from "./QuickLinks/QuickLinks";
import { useState } from "react";
const MasterPageRow2 = (props) => {
    let arr = [];
    let arrobj = [];
    const [imagedata, setImageData] = React.useState();
    const [depID, setDepID] = React.useState();
    const [repMan, setRepMan] = React.useState();
    const [quicklinkdata, SetQuickLinkData] = useState();
    //  const [listdata,setListdata] = React.useState<IListitems>({Title:"",Icon:"",url:""});
    const caml3 = {
        ViewXml: "<View><ViewFields><FieldRef Name='Title'/><FieldRef Name='image'/></ViewFields></View>",
    };
    const getUserData = async () => {
        let _sp = getSP(props.context);
        const list = await _sp.web.lists.getByTitle("EmployeeDetails");
        //EmployeeDetails
        let user = await _sp.web.currentUser();
        console.log(user);
        let userobj = user.Email;
        // const caml4: ICamlQuery = {
        //   ViewXml:
        //     `<View><ViewFields><FieldRef Name='Name/EMail'/></ViewFields></View>`,
        // };
        var r = await list.items.filter("Name/EMail eq '" + userobj + "'")();
        var y = await list.items.select('ReportingManager/EMail').expand('ReportingManager').filter("Name/EMail eq '" + userobj + "'")();
        console.log(r);
        console.log(y);
        // var r=await list.getItemsByCAMLQuery(caml4,"Name")
        y.map((x) => {
            console.log(x.ReportingManager.EMail);
            setRepMan(x.ReportingManager.EMail);
        });
        r.map((x) => {
            console.log(x.DepartmentId);
            setDepID(x.DepartmentId);
        });
    };
    const getQuickLinkData = async () => {
        let _sp = getSP(props.context);
        const qllist = await _sp.web.lists.getByTitle("Document Library");
        var qlistitems = await qllist.items();
        qlistitems.map((x) => {
            console.log(x.Title);
            let imgobj = x.Icon;
            let jobj = JSON.parse(imgobj);
            console.log(window.location.protocol + "//" + window.location.host + jobj.serverRelativeUrl);
            console.log(x.URL.Url);
            // updatedItem={Title:x.Title};
            arrobj.push({ Title: x.Title, Icon: window.location.protocol + "//" + window.location.host + jobj.serverRelativeUrl, Url: x.URL.Url });
            console.log(arrobj);
        });
        SetQuickLinkData(arrobj);
        console.log(quicklinkdata);
    };
    const getImageData = async () => {
        try {
            let _sp = getSP(props.context);
            const list = await _sp.web.lists.getByTitle("cursol2");
            var r = await list.getItemsByCAMLQuery(caml3);
            console.log(r);
            r.map((x) => {
                let y = JSON.parse(x.image);
                console.log(y.serverUrl + y.serverRelativeUrl);
                arr.push(y.serverUrl + y.serverRelativeUrl);
            });
            console.log(arr);
            setImageData(arr);
            // console.log(imagedata,'hello');
            console.log("Hello");
        }
        catch (e) {
            console.log(e);
        }
    };
    // setImageData("a");
    // const execute = async () => {
    //   await getImageData();
    // };
    React.useEffect(() => {
        try {
            console.log("hi");
            getImageData();
            console.log("hello");
            getUserData();
            getQuickLinkData();
        }
        catch (e) {
            console.log(e);
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mainContainer" },
            React.createElement("div", { className: "Containers1" },
                React.createElement("div", { className: "row2container__part1" },
                    React.createElement(ImageSliders, { data: imagedata })),
                React.createElement("div", { className: "row2container__part2" },
                    React.createElement(QuickLinks, { data: quicklinkdata }))),
            React.createElement("div", null,
                React.createElement(Feedback, { context: WebPartContext, depID: depID, repman: repMan })))));
};
export default MasterPageRow2;
//# sourceMappingURL=MasterPageRow2.js.map