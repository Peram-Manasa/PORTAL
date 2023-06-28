// import { SPFI } from '@pnp/sp';
import * as React from 'react'
// import { getSP } from '../pnpConfig'
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import './QuickLinks.scss'
const QuickLinks = (props:any) => {
let arr:any[] = []
  arr = props.data
  console.log(arr)
 
  return (
    <>
    { arr?.map((x)=>{
      return( <div className="row2container__part2__item">
        <a className='actualLink' href={x.Url}><div className="linkBody">
        <div className="linkIcon"><img src={x.Icon}/></div>
        <div className="linkTitle">{x.Title}</div>
        </div></a>
        
      
    </div>)
   // console.log(x.Title)
  })}
    {/* <div className="row2container__part2__item">
      one
    </div>
    <div className="row2container__part2__item">
      two
    </div>
    <div className="row2container__part2__item">
      three
    </div>
    <div className="row2container__part2__item">
      four
    </div>
    <div className="row2container__part2__item">
      five
    </div>
    <div className="row2container__part2__item">
      six
    </div>
            */}
    </>
  )
}

export default QuickLinks