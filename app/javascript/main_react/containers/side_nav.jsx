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
      <div className="side-nav bg-dark text-light py-sm-4">
        <ul className="list-unstyled d-flex flex-row flex-sm-column justify-content-around justify-content-sm-start">
          {this.props.watchlists.map((watchlist, index) => {
            return <SideNavItem key={index} watchlist={watchlist} tabIndex={index} />
          })}
        </ul>
        <RequestList />
        <SendRequestForm />
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