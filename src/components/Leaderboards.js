import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Leaderboards extends Component {

  render(){
    return(
      <div id="leads-container">

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

function mapStateToProps(state) {
  return state.leaderboards
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboards)
