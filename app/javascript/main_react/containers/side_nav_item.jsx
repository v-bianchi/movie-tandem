import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectWatchlist } from '../actions'

class SideNavItem extends Component {
  handleClick = () => {
    this.props.selectWatchlist(this.props.watchlist)
  }

  render() {
    const otherPerson = this.props.watchlist.user_1.id == this.props.userData.id
                      ? this.props.watchlist.user_2
                      : this.props.watchlist.user_1

    const otherPersonPhoto =  otherPerson.photo.avatar.url
                              ? <img src={otherPerson.photo.avatar.url} alt={`Picture of ${otherPerson.name}`} className="user-image"/>
                              : <img className="user-image" src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg" alt=""/>

    return (
      <li onClick={this.handleClick}
        className={this.props.selectedWatchlist.id == this.props.watchlist.id
                    ? 'd-flex align-items-center p-3 selected'
                    : 'd-flex align-items-center p-3'
                  }
      >
        {otherPersonPhoto}
        <span className="ml-2">{otherPerson.name}</span>
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