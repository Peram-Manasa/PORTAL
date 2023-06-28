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




import * as React from 'react'
import "../LandingPage/Landing.scss"
const Announcements = (props: any) => {
    return (
        <div className='rowMain'>
            <div className='row2'>
                <h2>Announcements</h2>
            </div>
            <div className='row1'>
                {/* <h2>Announcements</h2> */}
                {props.data?.map((x: any) => {
                    return (
                        <p>{x.Title}<br /><br /></p>
                    )
                })}
            </div>
        </div>
    )
}
export default Announcements;

















