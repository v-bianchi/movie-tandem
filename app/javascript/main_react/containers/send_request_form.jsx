import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import { sendRequest } from '../actions'

class SendRequestForm extends Component {
  handleClick = () => {
    this.props.sendRequest(document.getElementById('send-request-input').value, this.props.userData)
    document.getElementById('send-request-input').value = ""
  }

  render() {
    return (
      <div className="send-request-form">
        <h5>Create a watchlist with a new friend!</h5>
        <input id="send-request-input" type="email" placeholder="email"/>
        <button onClick={this.handleClick}>Send request</button>
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
