import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import SideNavItem from "./side_nav_item"
import SendRequestForm from "./send_request_form"
import RequestList from "./request_list"

import { fetchWatchlists } from '../actions'

class SideNav extends Component {

  componentWillMount() {
    if (this.props.userData) {
      this.props.fetchWatchlists(this.props.userData);
    }
  }

  // componentDidMount() {
  //   if (this.props.userData) {
  //     const interval = setInterval(() => {
  //       this.props.fetchWatchlists(this.props.userData)
  //     },10000);
  //   }
  // }

  // componentWillUnmount() {
  //   clearInterval(interval);
  // }

  render() {
    return (
      <div className="side-nav bg-dark text-light py-md-4">
        <ul className="list-unstyled d-flex flex-row flex-md-column justify-content-around justify-content-md-start">
          {this.props.watchlists.map((watchlist, index) => {
            return <SideNavItem key={index} watchlist={watchlist} tabIndex={index} />
          })}
        </ul>
        <div className="d-none d-md-block">
          <RequestList />
          <SendRequestForm />
        </div>
        <div className="d-block d-md-none">
          <p className="text-center">
            <button
              className="btn-round"
              type="button"
              data-toggle="collapse"
              data-target="#requests-collapse"
              aria-expanded="false"
              aria-controls="requests-collapse"
              onClick={(event) => {
                if(event.target.innerHTML == '▼') {
                  event.target.innerHTML = '▲'
                } else {
                  event.target.innerHTML = '▼'
                }
              }}
            >
              ▼
            </button>
          </p>
          <div className="collapse" id="requests-collapse">
            <RequestList />
            <SendRequestForm />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    watchlists: state.watchlists,
    requests: state.requests,
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWatchlists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
