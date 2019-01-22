import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleWatched } from '../actions'

class Movie extends Component {
  handleMovieInfoClick = (event) => {
    event.currentTarget.querySelector('.movie-list__item-info').classList.toggle('hidden')
  }

  handleToggleWatchedClick = (event) => {
    event.preventDefault()
    this.props.toggleWatched(this.props.movie.id, this.props.userData)
  }

  render() {
    return (
      <li onClick={this.handleMovieInfoClick} className="cursor-pointer">
        <p>
          <strong>{this.props.movie.title}</strong> - 
          {this.props.movie.watched ? "WATCHED" : "NOT WATCHED"}
          <span className="movie-list__item-caret"><small>&#9660;</small></span>
        </p>
        <div className="movie-list__item-info hidden">
          <p>{this.props.movie.year}</p>
          <p><em>{this.props.movie.genre}</em></p>
          <p>{this.props.movie.overview}</p>
          <button onClick={this.handleToggleWatchedClick}>
            Mark as {this.props.movie.watched ? "unwatched" : "watched"}
          </button>
        </div>
      </li>
    )
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleWatched }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)