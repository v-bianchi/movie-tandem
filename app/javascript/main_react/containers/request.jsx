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
          <p className="mb-1">{this.props.request.sender.first_name} wants to create a watchlist with you!</p>
          <div className="d-flex justify-content-between">
            <button onClick={this.handleAcceptClick} className="btn btn-sm btn-success">Accept</button>
            <button onClick={this.handleDeclineClick} className="btn btn-sm btn-danger">Decline</button>
          </div>
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