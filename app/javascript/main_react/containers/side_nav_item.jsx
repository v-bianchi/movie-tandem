import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectWatchlist } from '../actions'

class SideNavItem extends Component {
  handleClick = () => {
    this.props.selectWatchlist(this.props.watchlist)
  }

  render() {
    const otherPersonName = this.props.watchlist.user_1.id == this.props.userData.id
                          ? this.props.watchlist.user_2.first_name
                          : this.props.watchlist.user_1.first_name
    return (
      <li className='side-nav__item cursor-pointer' onClick={this.handleClick}>{otherPersonName}</li>
    )
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectWatchlist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNavItem)