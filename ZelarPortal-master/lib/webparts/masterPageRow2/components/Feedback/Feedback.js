import * as React from 'react';
import './Feedback.scss';
import { IoMdSend } from "react-icons/io";
import { getSP } from '../pnpConfig';
import "@pnp/sp/sputilities";
// import { IFeedbackprops } from './IFeedbackprops';
import { SlCheck } from "react-icons/sl";
const Feedback = (props) => {
    const [fb, setFb] = React.useState("");
    const [msg, setMsg] = React.useState(false);
    const postFeedback = async () => {
        // alert("a");
        let _sp = getSP(props.context);
        const list = await _sp.web.lists.getByTitle("FeedBackForm-List").items.add({
            Complients_x002f_Comments: fb,
            DepartmentNameId: props.depID
        });
        console.log(list);
        _sp.utility.sendEmail({
            To: [props.repman],
            Subject: "Recived Feedback ",
            Body: "You got feedback",
            AdditionalHeaders: {
                "content-type": "text/html"
            }
        });
    };
    console.log(fb);
    return (React.createElement("div", { className: 'rowMains' },
        React.createElement("div", { className: "feedbackTitle" }),
        React.createElement("div", { className: 'formDiv' },
            React.createElement("div", { className: "field" },
                React.createElement("textarea", { value: fb, placeholder: 'Enter your Feedback here', onChange: (e) => setFb(e.target.value) })),
            React.createElement("div", { className: 'submitBtn' },
                React.createElement("div", { className: msg ? 'msgopen' : 'msgclose' },
                    " ",
                    React.createElement(SlCheck, { size: 15, color: "green" }),
                    "   ",
                    React.createElement("div", { className: "successm" }, "      Successfully submitted")),
                React.createElement("div", { className: fb == "" ? "btnDivHide" : "btnDivShow" },
                    React.createElement("button", { onClick: () => {
                            postFeedback();
                            setFb("");
                            setMsg(true);
                            setTimeout(() => {
                                setMsg(false);
                            }, 2000);
                        } },
                        React.createElement(IoMdSend, null))))))
    // <div><h4>Opinion Poll</h4></div>
    );
};
export default Feedback;
//# sourceMappingURL=Feedback.js.map