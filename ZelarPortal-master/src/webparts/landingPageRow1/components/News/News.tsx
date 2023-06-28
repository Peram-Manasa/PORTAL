// import * as React from 'react'
// import "../Landing.scss";
// const News = (props:any) => {
//   return (
//     <>
//     <div className='row-2'>
//      <h2>News</h2>
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
// export default News;


import * as React from 'react'
import "../LandingPage/Landing.scss"
const News = (props:any) => {
  return (
    <div className='rowMain'>
    <div className='row2'>
    <h2>News</h2>
    </div>
       <div className='row3'>
       {props.data?.map((x:any)=>{
            return(
                <p>{x.Title}</p>
            )
        })}
    </div>
    </div>
  )
}
export default News







