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
      <div>
        {/* Modal trigger button */}
        <div className="text-center my-4">
          <button type="button" className="btn btn-warning btn-sm" data-toggle="modal" data-target="#sendRequestModal">
            Add new friend
          </button>
        </div>

        {/* Modal */}
        <div className="modal fade" id="sendRequestModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SendRequestForm)
