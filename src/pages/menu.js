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
    client.getContentTypes()
    .then((response) => {
      let responseObject = {};
      response.items.sort(function(a, b){return a.description - b.description});
      //console.log(response.items);
      response.items.map(item => {
        responseObject[item.name] = item;
        this.setState({menubar:responseObject});
      })
    })
    .catch(console.error)

    client.getEntries({
      'content_type': 'frozenYogurt'
    })
    .then((response) => {
      let responseObject = {};
      response.items.map(item => {
       // console.log(item);
        responseObject[item.fields.name] = item.fields;
        this.setState({menuContent:responseObject});
      })
    })
    .catch(console.error);
  }

  updateContent(type) {
    //console.log(type);
    client.getEntries({
      'content_type': type
    })
    .then((response) => {
      let responseObject = {};
      response.items.map(item => {
        //console.log(item);
        responseObject[item.fields.name] = item.fields;
        this.setState({menuContent:responseObject});
      })
    })
    .catch(console.error);
  }

  renderMenuBar() {
    let barObject = this.state.menubar;
    //console.log(barObject);
    let barArray = [];
    for (let prop in barObject) {
      barArray.push(barObject[prop]);
    }
    return(
      barArray.map(item =>
        <li key={item.name}
          onClick={this.updateContent.bind(this, `${item.sys.id}`)}>{item.name}
        </li>
      )
    )
  }

  renderMenuContent() {
    let contentObject = this.state.menuContent;
    //console.log(contentObject);
    let contentArray = [];
    for (let prop in contentObject) {
      contentArray.splice(0, 0, contentObject[prop]);
    }
    //console.log(contentArray);
    return(
      contentArray.map(content =>
        <div key={content.name} className='flexItem'>
          <img src={content.img.fields.file.url}></img>
          <h3>{content.name}</h3>
        </div>
      )
    )
  }

  render() {
    return(
      <div>
        <div>
          <ul id='menuBar'>
            {this.renderMenuBar.bind(this)()}
          </ul>
        </div>
        <div className='flexContainer'>
          {this.renderMenuContent.bind(this)()}
        </div>
        <div className='clear'></div>
      </div>
    )
  }
}
