'use strict';

const React = require('react');

require('../test.css');

class Wrapper extends React.Component {
  componentDidMount() {
    console.log('mounted');
  }

  componentDidUpdate() {
    console.log('updated');
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Wrapper;