import React from "react";
import Link from "gatsby-link";

export default () => {
  return(
    <div style={{width:'60%', margin:'auto'}}>
      <form action="mailto:sailflyingeric@gmail.com" method="post" encType="text/plain">
        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" name="name" placeholder="Enter your name..."/>
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="email" name="email" placeholder="Enter your email..."/>
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" name="message" placeholder="Please leave your message..." style={{resize:'none'}}>
            </textarea>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
          <div className="control">
            <input className="button is-link" type="reset" value="Reset" />
          </div>
        </div>
       </form>
    </div>
  )
}
