import React from "react";
import Link from "gatsby-link";
import "../css/menu.css";
import * as contentful from 'contentful';

const client = contentful.createClient({
  space: 'k9ku7u9xrhzb',
  accessToken: 'd0839b4b4157ee7a7ba50456ffa4fef59fe91c41abddcc4f2c9788d7d918ca36'
})

export default class Menu extends React.Component {
  state={}

  componentWillMount() {
    client.getEntries({
      'content_type': '6XwpTaSiiI2Ak2Ww0oi6qa'
    })
    .then((response) => {
      let responseObject = {};
      response.items.map(item => {
        responseObject[item.fields.title] = item.fields;
        this.setState({...responseObject});
      })
    })
    .catch(console.error);
  }

  renderState() {
    let entriesObject = this.state;
    let entriesArray = [];
    for (let prop in entriesObject) {
      entriesArray.push(entriesObject[prop]);
    }
    console.log(entriesArray);
    return(
      entriesArray.map(entry =>
        <div key={entry.title} className='flexItem'>
          <h3>{entry.title}</h3>
          <img src={entry.icon.fields.file.url}></img>
          <h3>{entry.categoryDescription}</h3>
        </div>
      )
    )
  }

  render() {
    return(
      <div className='flexContainer'>
        {this.renderState.bind(this)()}
      </div>
    )
  }
}
