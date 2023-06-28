import * as React from 'react'
import PollElement from './PollElement'
import { SPFI } from '@pnp/sp';
import { getSP } from '../../pnpConfig';
import { ICamlQuery } from '@pnp/sp/lists';
import { IPollProps } from './IPollProps';
import "@pnp/sp/site-users/web";
// import { AiFillPlusCircle } from "react-icons/ai";
//  import PollForm from './PollForm';
import './Poll.scss'
// import { PermissionKind } from "@pnp/sp/security";


// import PollForm from './PollForm';
const OpinionPoll = (props:IPollProps) => {
  const[pollData,setPolldata] = React.useState<any>([])
  const[formmode,setFormmode]=React.useState<boolean>(true)
  // const[createformmode,setCreateformmode] = React.useState<boolean>(false);
  // const[ setcanCreate] = React.useState<boolean>(false)
  // const[userem,setuserem] = React.useState<any>()
  let arr: any[]
  // const caml: ICamlQuery = {
  //   ViewXml:
  //     "<View><ViewFields><FieldRef Name='ID' /><FieldRef Name='QuestionId' /><FieldRef Name='QuestionName' /><FieldRef Name='Choices' /></ViewFields></View>",
  // };

  const caml:ICamlQuery={
    ViewXml:"<View><Query><FieldRef Name='ID' /><FieldRef Name='Q.Id' /><FieldRef Name='Q.Name' /><FieldRef Name='Q.Choices' /><Where><Eq><FieldRef Name='Active'/><Value Type='Boolean'>1</Value></Eq></Where></Query></View>",
  }
//<RowLimit>3</RowLimit>


  // const checkPrem =async ()=>{
  //   let _sp:SPFI = getSP(props.context)
    // const prems = await _sp.web.lists.getByTitle("OpinionPole").getCurrentUserEffectivePermissions()

    // if(_sp.web.hasPermissions(prems,PermissionKind.AddListItems)&&_sp.web.hasPermissions(prems,PermissionKind.EditListItems)){
    //   console.log("can create new form");
    //   setcanCreate(true)
    // }
    // else{
    //   console.log("cannot create new form");
    //   setcanCreate(false)
  //   // }

  // }


  const getData = async() =>{
    let _sp: SPFI = getSP(props.context);
    const list = await _sp.web.lists.getByTitle("OpinionPole");
  const r = await list.getItemsByCAMLQuery(caml);
  
     arr=await r;
    //  let user = await _sp.web.currentUser();
    // //  let em = user.Email
    console.log(r);
  //  setuserem(em)
    
    setPolldata(arr)
    if(arr.length>0){setFormmode(false)}
  
  }


  React.useEffect(()=>{
    getData();
    // checkPrem();
  },[])

  // React.useEffect(()=>{
  //   getData();  
  // },pollData)

 
  return (
    <>
    <div className='rowMain3'>
    <div className='row31'>
        <h2>Opinion Poll</h2>
    </div>
    <div className='row32'>
   {/* {canCreate&&
     <AiFillPlusCircle className={createformmode?"formBtnOpened":"formBtn"} onClick={()=>setCreateformmode(!createformmode)} size={40}/>
   } */}
  {/* {createformmode && <PollForm context={props.context}/>}  */}
    {console.log(formmode)}
    {
      pollData&&pollData?.map((x:any)=>{
          return(
            <PollElement data={x} context={props.context}/>
          )
      })
    }
    
    {
    console.log(pollData)
    
    }
    </div>
    </div>
    </>
   
  )
}

export default OpinionPoll

// import { SPFx, spfi } from "@pnp/sp";
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/items";
// import * as React from "react";



// export default async function index() {
//   const sp = spfi().using(SPFx(this.context));

// // get all the items from a list
// const items: any[] = await sp.web.lists.getByTitle("OpinionPoll").items();
//  console.log(items);
  
//   return (
//     <div>Hi</div>
    
//   )
// }



