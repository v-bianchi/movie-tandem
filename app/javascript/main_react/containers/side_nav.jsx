import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import SideNavItem from "./side_nav_item"

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
      <div className="side-nav">
        <h3>Your movie buddies</h3>
        <ul>
          {this.props.watchlists.map((watchlist, index) => {
            return <SideNavItem key={index} watchlist={watchlist} tabIndex={index} />
          })}
        </ul>
        <h3>Pending requests</h3>
        <ul>
          <li>list</li>
          <li>of</li>
          <li>requests</li>
          <li>goes</li>
          <li>here</li>
        </ul>
        <h5>Create a watchlist with a new friend!</h5>
        <input type="email" placeholder="email"/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    watchlists: state.watchlists,
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWatchlists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)