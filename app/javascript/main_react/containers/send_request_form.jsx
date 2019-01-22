import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import { sendRequest } from '../actions'

class SendRequestForm extends Component {
  render() {
    return (
      <div className="send-request-form">
        <h5>Create a watchlist with a new friend!</h5>
        <input type="email" placeholder="email"/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SendRequestForm)
