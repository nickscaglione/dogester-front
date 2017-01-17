import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

class Navbar extends Component {

  render(){
    // let homeStyle = this.props.currentPage === "home" ? "bold" : "none"
    // let leadStyle = this.props.currentPage === "leaderboards" ? "bold" : "none"

    return(
      <ul id="nav">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/leaderboards'>Leaderboards</Link></li>
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return state.currentPage
}

module.exports = connect(mapStateToProps)(Navbar)
