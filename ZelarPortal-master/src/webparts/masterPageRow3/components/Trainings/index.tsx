import * as React from "react";
import { useState } from "react";
//import { sp } from "@pnp/sp"; 
import "@pnp/sp/lists/web";
import "@pnp/sp/folders/web";
import "@pnp/sp/files/folder";
import "@pnp/sp/items/list";
import "@pnp/sp/fields/list";
import "@pnp/sp/views/list";
import "@pnp/sp/site-users/web";
import "@pnp/sp/sputilities";
// import "./../SimplePoll.scss";
import { getSP } from '../../pnpConfig';
// import SPHelper from "../../../../Common/SPHelper";
//import SPHelper from ""
//import { IUserInfo } from "../../../../Models";
import { SPFI, SPFx, spfi } from "@pnp/sp";
//import { Web } from "@pnp/sp/webs";
// import { IList } from "@pnp/sp/lists";
// import { IItemAddResult } from "@pnp/sp/items";
import { IPollProps } from '../Opinion Poll/IPollProps'
import { ICamlQuery } from "@pnp/sp/lists";
const MyTrainings = (props: IPollProps) => {
  const [trainingdata, setTrainingData] = useState([]);
  const [currentuser, setCurrentUser] = useState("");

  //let arr: any[]
  const caml: ICamlQuery = {
    ViewXml:
      "<View><ViewFields><FieldRef Name='Title' /><FieldRef Name='Description' /></ViewFields><RowLimit>2</RowLimit></View>",
  };




  //const [manager, setManager]=useState('');

  // const   getCurrentUserInfo = async ()  => {

  //     let userinfo: IUserInfo = null;
  //     let currentUserInfo = await sp.web.currentUser.get();

  //     userinfo = {
  //         ID: currentUserInfo.Id.toString(),
  //         Email: currentUserInfo.Email,
  //         LoginName: currentUserInfo.LoginName,
  //         DisplayName: currentUserInfo.Title,
  //         Picture: '/_layouts/15/userphoto.aspx?size=S&username=' + currentUserInfo.UserPrincipalName,

  //     };

  //     return userinfo;
  // }

  const getTrainingDetails = async () => {
    try {
      //let _sp: SPFI = getSP(props.context);

      const webUrl = `${window.location.protocol}//${window.location.hostname}/sites/Dev/LearingManag`;
      console.log(webUrl);

    const spWebChild=spfi(webUrl).using(SPFx(props.context));
      // console.log(k.getList);
      //  const ensureCheck=await  k.lists.ensure("TrainingCalender")
      //  console.log(ensureCheck);
    const list=await spWebChild.web.lists.getByTitle("TrainingCalender");
       //const list=await k.lists.getByTitle("TrainingCalender").ite;
      //const list1 = await k.lists.getById("d59aa7ae-e9e7-4ca0-b2ac-13c1f3b5729f");
      const trainingOutput = await list.getItemsByCAMLQuery(caml);
      console.log(list);

      //   .items.select("Title", "Description")
      //   .get();
     console.log(trainingOutput);



      // const trainingInfo = await sp.web.lists
      //   .getByTitle("Training")
      //   .items.select("Title", "Description")
      //   .get();


      setTrainingData(trainingOutput);
      //console.log(trainingoutput);

      // console.log(manager,"here is manager");
    } catch (error) {
      console.log(error);
    }
  }; //function end
  // const  getReportingManager = async()=>{
  //   try{
  //    const reportingManger= await sp.web.lists.getByTitle('Department').items.select('DepID', 'Reporting Manager').get();
  //  // const actualresult=JSON.parse(trainingInfo);

  //    console.log(reportingManger);
  //    setManager(reportingManger);
  //     console.log(manager);

  //   }
  //   catch(e){
  //    console.log(e);
  //   }

  //}//function end

  const sendemail = async (Title: any) => {
    //get currentuser info
    try {
      let _sp: SPFI = getSP(props.context);

     console.log(_sp);
      const userInfo = await _sp.web.currentUser();

      console.log(userInfo);
      // const userInfoDetails = await userInfo;
      // console.log(userInfoDetails);
      let userobj = userInfo.Email;
       
      // userInfo((x) => {
      //   userobj = x.Email;
      //   console.log(userobj);
      // });
      setCurrentUser(userobj);
      console.log(userobj);

      // console.log(arrayUserInfo);

      //get managerinfo
      // let parentcontext = await _sp.web.getParentWeb();
      // let contextinfo = JSON.stringify(parentcontext);
      console.log(currentuser, "hi");
      const webUrl = `${window.location.protocol}//${window.location.hostname}/sites/Dev`;
     
    const spWebParent=spfi(webUrl).using(SPFx(props.context));
      const empInfo = spWebParent.web.lists
        .getByTitle("EmployeeDetails")
        .items.select("ReportingManager/EMail")
        .expand("ReportingManager")
        .filter("Name/EMail eq '" + userobj + "'")();

        // const caml:ICamlQuery={
        //   ViewXml:"<View><Query><FieldRef Name='ID' /><FieldRef Name='QuestionId' /><FieldRef Name='QuestionName' /><FieldRef Name='Choices' /><Where><Eq><FieldRef Name='Active'/><Value Type='Boolean'>1</Value></Eq></Where></Query></View>",
        // }
      console.log(empInfo);

      let actualmanager = " ";
      empInfo.then((responsedata: any) => {
        console.log(responsedata);
        let y = JSON.parse(JSON.stringify(responsedata));
        y.map((x: any) => {
          actualmanager = x.ReportingManager.EMail;
          console.log(x.ReportingManager.EMail);
        });


      console.log(currentuser, actualmanager);
      //sending email
      
      _sp.utility.sendEmail({
        To: [actualmanager],

        Subject: "Request for" + Title,
        Body: "Iam interested in" + Title,
        AdditionalHeaders: {
          "content-type": "text/html",
        },
      });
      window.alert("Request for Nomination Sent");
      console.log("emailsent");
     } )
    }
    catch (e) {
      console.log(e);
    }
    // setManager(actualmanager);
  };

  React.useEffect(() => {
    try {
      console.log("hi");
      getTrainingDetails();
      console.log("hello");
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <div className="rowMain3">
        <div className="row31">
          <h2>My Tainings</h2>
        </div>
        {/* border=2 width=80% style="font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; */}
        {console.log(trainingdata)}
        {/* {console.log(actualmanager)} */}
        <table className="training_table">
          <th>Title</th>

          <th>Apply</th>
          {trainingdata &&
            trainingdata?.map((item, i) => {
              return (
                <tr>
                  <td>
                    <label> {item.Title}</label>
                  </td>
                  <td>

                    <button
                      id="nominate_btn${i}"
                      className="nominate1"
                      onClick={() => sendemail(item.Title)}
                    >
                      Nominate
                    </button>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </>
  );
};

export default MyTrainings;