import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleWatched, removeMovie } from '../actions'

class Movie extends Component {

  handleToggleWatchedClick = (event) => {
    event.preventDefault()
    this.props.toggleWatched(this.props.movie.id, this.props.userData)
  }

  handleRemoveClick = (event) => {
    event.preventDefault()
    $(`#removeModal-${this.props.movie.id}`).modal('hide') // close remove modal
    this.props.removeMovie(this.props.movie.id, this.props.userData)
  }

  render() {
    let removeButton = ''
    if (this.props.movie.added_by.id === this.props.userData.id) {
      removeButton =  <button
                        className="btn btn-danger m-1"
                        data-toggle="modal"
                        data-target={`#removeModal-${this.props.movie.id}`}
                      >
                        Remove
                      </button>
    } else {
      removeButton =  <button  className="btn btn-danger m-1 disabled" disabled>
                        Remove
                      </button>
    }

    return (
      <div>
        <li>
          <p className={this.props.movie.watched 
                        ? 'cursor-pointer text-muted todo-item-done'
                        : 'cursor-pointer'}
            data-toggle="collapse"
            data-target={`#collapse-${this.props.movie.id}`}
            aria-expanded="false"
            aria-controls={`collapse-${this.props.movie.id}`}
          >
            <strong>{this.props.movie.title}</strong>
          </p>
          <div className="movie__info collapse" id={`collapse-${this.props.movie.id}`}>
            <div className="card card-body">
              <div className="d-flex flex-column flex-lg-row">
                <div>
                  <p>{this.props.movie.year}</p>
                  <p><em>{this.props.movie.genre}</em></p>
                  <p>{this.props.movie.overview}</p>
                </div>
                <img className="movie__poster ml-lg-3" src={'https://image.tmdb.org/t/p/w300' + this.props.movie.poster_path} alt={`Movie poster for ${this.props.movie.title}`}/>
              </div>
              <div className="d-flex">
                {removeButton}
                <button className="btn btn-dark m-1 flex-grow-1" onClick={this.handleToggleWatchedClick}>
                  Mark as {this.props.movie.watched ? "unwatched" : "watched"}
                </button>
              </div>
            </div>
          </div>
        </li>

        {/* Remove movie modal */}
        <div className="modal fade" id={`removeModal-${this.props.movie.id}`} tabindex="-1" role="dialog" aria-labelledby="Remove" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                {`Are you sure you want to remove ${this.props.movie.title}?`}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">No, go back!</button>
                <button type="button" className="btn btn-danger" onClick={this.handleRemoveClick}>Yes, remove it!</button>
              </div>
            </div>
          </div>
        </div>
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
  return bindActionCreators({ toggleWatched, removeMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)