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
  //   const interval = setInterval(() => {
  //     this.props.fetchWatchlists(this.props.userData)
  //   },3000);
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