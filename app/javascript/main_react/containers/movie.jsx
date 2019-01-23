import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleWatched } from '../actions'

class Movie extends Component {
  handleToggleWatchedClick = (event) => {
    event.preventDefault()
    this.props.toggleWatched(this.props.movie.id, this.props.userData)
  }

  render() {
    return (
      <div>
        <li>
          <p className="cursor-pointer" data-toggle="collapse" data-target={`#collapse-${this.props.movie.id}`} aria-expanded="false" aria-controls={`collapse-${this.props.movie.id}`}>
            <strong>{this.props.movie.title}</strong> - 
            {this.props.movie.watched ? "WATCHED" : "NOT WATCHED"}
          </p>
          <div className="movie-list__item-info collapse" id={`collapse-${this.props.movie.id}`}>
            <div className="card card-body">
              <p>{this.props.movie.year}</p>
              <p><em>{this.props.movie.genre}</em></p>
              <p>{this.props.movie.overview}</p>
              <button className="btn btn-dark" onClick={this.handleToggleWatchedClick}>
                Mark as {this.props.movie.watched ? "unwatched" : "watched"}
              </button>
            </div>
          </div>
        </li>
      </div>
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