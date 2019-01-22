import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { acceptRequest, removeRequest } from '../actions'

class Request extends Component {

  handleAcceptClick = () => {
    console.log("handleacceptclick was triggered")
    this.props.acceptRequest(this.props.request.id, this.props.userData)
  }

  handleDeclineClick = () => {
    this.props.removeRequest(this.props.request.id, this.props.userData)
  }

  render() {
    if (this.props.nature === "sent") {
      return (
        <div>
          <p>Request sent! Waiting for {this.props.request.receiver.first_name}'s reply...</p>
        </div>
      )
    } else if (this.props.nature === "received") {
      return (
        <div>
          <p>{this.props.request.sender.first_name} wants to create a watchlist with you!</p>
          <button onClick={this.handleAcceptClick}>Accept</button>
          <button onClick={this.handleDeclineClick}>Decline</button>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ acceptRequest, removeRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Request)