// import * as React from 'react'
// import "../Landing.scss";
// const AnnComp = (props:any) => {
//   return (
//     <>
//     <div className='row-2'>
//      <h2>Announcements</h2>
//      </div>
//        <div className='row-1'>
//            {/* <h2>Announcements</h2> */}
//        {props.data?.map((x:any)=>{
//             return(
//                <p>{x.Title}<br/><br/></p>
//             )
//         })}
//     </div>
//     </>
//   )
// }
// export default AnnComp;
import * as React from 'react';
import "../LandingPage/Landing.scss";
const Announcements = (props) => {
    var _a;
    return (React.createElement("div", { className: 'rowMain' },
        React.createElement("div", { className: 'row2' },
            React.createElement("h2", null, "Announcements")),
        React.createElement("div", { className: 'row1' }, (_a = props.data) === null || _a === void 0 ? void 0 : _a.map((x) => {
            return (React.createElement("p", null,
                x.Title,
                React.createElement("br", null),
                React.createElement("br", null)));
        }))));
};
export default Announcements;
//# sourceMappingURL=Announcements.js.map