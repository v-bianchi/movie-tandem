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
      <li onClick={this.handleClick}
        className={this.props.selectedWatchlist.id == this.props.watchlist.id
                    ? 'd-flex align-items-center p-3 selected'
                    : 'd-flex align-items-center p-3'
                  }
      >
        <img src="http://i.pravatar.cc/100" alt={`Picture of ${otherPersonName}`} className="user-image"/>
        <span className="ml-2">{otherPersonName}</span>
      </li>
    )
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    selectedWatchlist: state.selectedWatchlist
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectWatchlist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNavItem)