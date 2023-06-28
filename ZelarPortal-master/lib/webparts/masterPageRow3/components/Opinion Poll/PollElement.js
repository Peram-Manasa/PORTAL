import * as React from 'react';
import { LeafPoll } from 'react-leaf-polls';
import 'react-leaf-polls/dist/index.css';
import { getSP } from '../../pnpConfig';
// import { truncate } from '@microsoft/sp-lodash-subset'
import "@pnp/sp/site-users/web";
// import PollForm from './PollForm';
const PollElement = (props) => {
    // var isUserVoted:boolean;
    let rowId = props.data.ID;
    let q = props.data.QuestionName;
    let c = props.data.Choices;
    let qid = String(props.data.QuestionId);
    let choicearr = JSON.parse(c);
    console.log(choicearr);
    const [isLoading, setLoading] = React.useState(true);
    const [userVoted, setUservoted] = React.useState(true);
    //const [choice, setChoice] =React.useState<any[]>([])
    let userarrr = [];
    //const [question,setQuestion] = React.useState<string>("")
    //     props.data&&props.data?.map((x:any)=>{
    //         //  ch=x.Choices;
    //           qn = x.QuestionName
    //         // console.log(ch);
    //         // console.log(qn);
    //         // setQuestion(qn)
    //         console.log(qn);
    // })
    // const resData = [
    //     { id: 0, text: 'Answer 1', votes: 0},
    //     { id: 1, text: '', votes: 7 },
    //     { id: 2, text: 'Answer 3', votes: 0 }
    //   ]
    //   resData[1]=( { id: 0, text: '', votes: 0 })
    // Object keys may vary on the poll type (see the 'Theme options' table below)
    const customTheme = {
        textColor: 'black',
        mainColor: '#00B87B',
        backgroundColor: 'rgb(255,255,255)',
        alignment: 'center'
    };
    const checkUser = async () => {
        let _sp = getSP(props.context);
        let user = await _sp.web.currentUser();
        const list = await _sp.web.lists.getByTitle("pollItems").items.select()();
        list.map((x) => {
            console.log(x.Email);
            userarrr.push(x.Email, String(x.qid));
        });
        console.log(userarrr);
        console.log(user.Email);
        console.log(userarrr.includes(user.Email));
        let cond = (userarrr.includes(user.Email) && userarrr.includes(qid));
        //  isUserVoted = userarrr.includes(user.Email)?true:false
        setUservoted(cond);
        setLoading(false);
        //  console.log(isUserVoted);
        //userarrr.includes(user.Email)?setUservoted(true):setUservoted(false);
        //console.log(userVoted);
        return user.Email;
    };
    const updateVotes = async (itm, res) => {
        let _sp = getSP(props.context);
        const list = await _sp.web.lists.getByTitle("OpinionPole");
        //   const items = await _sp.web.lists.getByTitle("OpinionPole").items.select("QuestionName", "Choices").top(50).getPaged<{Choices: string}[]>();
        //   if (items.results.length > 0) {
        //     console.log("We got results!");
        //     for (let i = 0; i < items.results.length; i++) {
        //         // type checking works here if we specify the return type
        //         console.log(items.results[i].Choices);
        //     }
        // }
        let user = await _sp.web.currentUser();
        let userEmail = user.Email;
        const iar = await _sp.web.lists.getByTitle("pollItems").items.add({
            Title: "PollItem",
            Item: JSON.stringify(itm),
            Email: userEmail,
            qid: qid
        });
        const i = await list.items.getById(rowId).update({
            Title: "My New Title",
            Choices: JSON.stringify(res)
        });
        console.log(i);
        console.log(iar);
    };
    function vote(item, results) {
        console.log(results);
        console.log(item);
        updateVotes(item, results);
        // Here you probably want to manage
        // and return the modified data to the server.
    }
    //   React.useEffect(()=>{
    //         setQuestion(qn)
    //   },qn)
    //   console.log(question);
    //   React.useEffect(()=>{
    //         props.data&&props.data?.map((x:any)=>{
    //             let q = x.QuestionName
    //             let c = x.Choices;
    //             let choicearr= JSON.parse(c)
    //             console.log(choicearr)
    //             setChoice(choicearr)
    //             setQuestion(q)
    //         })
    //   },props.data)
    //   console.log(choice);
    //   console.log(resData);
    React.useEffect(() => {
        checkUser();
    }, []);
    //   React.useEffect(()=>{
    //     //  isUs erVoted = userarrr.includes(user.Email)?true:false
    // let cond = userarrr.includes(props.uEmail)
    // setUservoted(cond)
    //   },[userarrr])
    if (isLoading) {
        return React.createElement("div", null, "Loading...");
    }
    return (React.createElement(LeafPoll, { type: 'multiple', question: q, results: choicearr, theme: customTheme, onVote: vote, isVoted: userVoted })
    //  props.data&&
    //   props.data?.map((x:any)=>{
    ///          let q = x.QuestionName
    //       let c = x.Choices;
    //     let choicearr= JSON.parse(c)
    //   console.log(choicearr)
    // console.log(userVoted);
    // setChoice(choicearr)
    // setQuestion(q)
    //   return(
    //       <>
    //       <LeafPoll
    //   type='multiple'
    //   question={q}
    //   results={choicearr}
    //   theme={customTheme}
    //   onVote={vote}
    //   isVoted={userVoted}
    // />
    //{/* <PollForm/> */}
    //  </>
    //       ) 
    //    })}
    //  </>
    );
};
export default PollElement;
//# sourceMappingURL=PollElement.js.map