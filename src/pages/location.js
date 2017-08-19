import React from "react";
import Link from "gatsby-link";

export default () => {
  return(
    <div style={{textAlign:'center'}}>
      <h3 style={{letterSpacing:'1px'}}>GLEN COVE STORE</h3>
      <p style={{color:'#888'}}>673 Glen Cove Ave, Glen Head, NY 11545</p>
     <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.8001973767964!2d-73.63215804968642!3d40.83235213808056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c285dd5673e1e7%3A0xa9cba6e0384a6347!2s673+Glen+Cove+Ave%2C+Glen+Head%2C+NY+11545!5e0!3m2!1sen!2sus!4v1503174834128'
        style={{margin:'50px auto', width:'60vw', height:'70vh', frameborder:'0', border:'0'}}
        allowFullScreen>
      </iframe>
    </div>
  )
}
