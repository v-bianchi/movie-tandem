import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectWatchlist } from '../actions'

class SideNavItem extends Component {
  handleClick = () => {
    this.props.selectWatchlist(this.props.watchlist)
  }

  render() {
    return (
      <li className='side-nav__item cursor-pointer' onClick={this.handleClick}>{this.props.watchlist.user_2.first_name}</li>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectWatchlist }, dispatch);
}

export default connect(null, mapDispatchToProps)(SideNavItem)