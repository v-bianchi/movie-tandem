import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import Request from "./request";

import { fetchRequests } from '../actions'

class RequestList extends Component {
  
  componentWillMount() {
    if (this.props.userData) {
      this.props.fetchRequests(this.props.userData);
    }
  }

  render() {
    return (
      <div className="requests p-3">
        {/* Requests SENT by current user */}
        {this.props.requests.filter((elt) => elt.sender.id == this.props.userData.id).map((request, index) => {
          return (
            <Request key={index} request={request} nature="sent" />
          ) 
        })}
        {/* Requests RECEIVED by current user */}
        {this.props.requests.filter((elt) => elt.receiver.id == this.props.userData.id).map((request, index) => {
          return (
            <Request key={index} request={request} nature="received" />
          ) 
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    requests: state.requests,
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRequests }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestList)