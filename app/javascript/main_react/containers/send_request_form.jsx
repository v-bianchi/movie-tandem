import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import { sendRequest } from '../actions'

class SendRequestForm extends Component {
  componentDidUpdate(prevProps) {
    // Close modal when new request is sent or received
    if(this.props.requests.length !== prevProps.requests.length ) {
      document.getElementById('send-request-input').value = "" // clear input field
      $('#sendRequestModal').modal('hide') // close modal
      $('#error-box').html('')
    }
  }

  handleClick = () => {
    this.props.sendRequest(document.getElementById('send-request-input').value, this.props.userData)
  }

  render() {
    return (
      <div>
        {/* Modal trigger button */}
        <div className="text-center my-4">
          <button type="button" className="btn btn-warning btn-sm" data-toggle="modal" data-target="#sendRequestModal">
            Add new friend
          </button>
        </div>

        {/* Modal */}
        <div className="modal fade" id="sendRequestModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered text-dark" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add new friend</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Please enter your friend's email address</p>
                <input id="send-request-input" type="email" placeholder="email" className="form-control"/>
                <div id="error-box"></div>
                <button onClick={this.handleClick} className="btn btn-warning mt-2 w-100">Send request</button>
              </div>
            </div>
          </div>
        </div>
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
  return bindActionCreators({ sendRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SendRequestForm)
