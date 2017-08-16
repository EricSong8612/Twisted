import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import "../css/index.css";

const Header = () =>
  <div id='header'>
    <Link to='/'>
      <img id='logo' src='https://s3.amazonaws.com/twisted-site/twisted_logo.png' alt='logo'/>
    </Link>
    <Link to='/'>
      <img id='facebook' src='https://s3.amazonaws.com/twisted-site/fb.png' alt='facebook'/>
    </Link>
    <div className='navigation'>
      <ul>
        <li><Link to='/'>Menu</Link></li>
        <li><Link to='/'>Location</Link></li>
        <li><Link to='/'>Hours</Link></li>
        <li><Link to='/'>Contact Us</Link></li>
      </ul>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Twisted"
      meta={[
        { name: 'description', content: 'Twisted' },
        { name: 'keywords', content: 'Twisted' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
