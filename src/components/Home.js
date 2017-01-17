import React, { Component } from 'react';
import { swipeRight, swipeLeft } from '../actions/swipes.js'
import { getDogs } from '../actions/getDogs.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
  componentWillMount() {
    this.props.getDogs()
  }

  handleLeft() {
    event.preventDefault()
    this.props.swipeLeft()
  }

  handleRight() {
    event.preventDefault()
    this.props.swipeRight(this.props.current.id)
  }

  render(){
    return(
      <div id="home-container">
        <button onClick={this.handleLeft} value="left"/>

        <img role="presentation" id="current-image" src={this.props.current.image_url} />
        <h6>{this.props.current.name} - {this.props.current.age}</h6>

        <button onClick={this.handleRight} value="left"/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({swipeLeft, swipeRight, getDogs}, dispatch)
}

function mapStateToProps(state) {
  return state.home
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
