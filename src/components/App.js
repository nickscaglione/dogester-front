import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
