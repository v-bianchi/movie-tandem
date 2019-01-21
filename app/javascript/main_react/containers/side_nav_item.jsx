import React, { Component } from "react";
import { connect } from "react-redux";

class SideNavItem extends Component {
  render() {
    return (
      <ul className="side-nav__item">
        <li>{this.props.watchlist.user_2.first_name}</li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, null)(SideNavItem);