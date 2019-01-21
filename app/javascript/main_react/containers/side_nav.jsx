import React, { Component } from "react"
import { connect } from "react-redux"

import SideNavItem from "./side_nav_item"

class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <h3>Your movie buddies</h3>
          {this.props.watchlists.map((watchlist, index) => {
            return <SideNavItem key={index} watchlist={watchlist} tabIndex={index} />
          })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    watchlists: state.watchlists
  }
}

export default connect(mapStateToProps, null)(SideNav)